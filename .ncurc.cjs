// @ts-check
const fs = require('node:fs');
const path = require('node:path');
const semver = require('semver');
const packageJson = require('./package.json');

const CACHE_DIRECTORY = path.join(__dirname, 'node_modules/.cache/npm-check-updates');
fs.mkdirSync(CACHE_DIRECTORY, {recursive: true});

/**
 * Blocks *updating to* any version matching the given semver range for a package
 * (it does not restrict the version we update *from*). Use to skip a known-broken
 * release until a fix ships. Each entry documents why it is blocked.
 * @type {Record<string, string>}
 */
const IGNORED_PACKAGE_RANGES_TO_UPDATE = {
  // Broken publish: its bundled dependency map references an unpublished package,
  // so installs crash — including pnpm/action-setup's self-install step
  // https://github.com/pnpm/pnpm/issues/12955
  pnpm: '11.12.0',

  // Pulls in rolldown-plugin-dts >=0.27, which false-errors on (or silently drops)
  // forward-referenced type exports when bundling DTS
  tsdown: '0.22.5',
};

/** @type {Set<string>} */
const IGNORED_MAJOR_VERSION_TRANSITIONS = new Set(['@types/node']);

const SRC_DIRECTORY = path.join(__dirname, 'src');
const EXTERNAL_IMPORT_REGEX = /(?<![\w.])(?:import\s*\(\s*|import\s+|from\s+)["']([^"']+)["']/g;

/**
 * The bundled set is emergent: `tsdown` runs with `unbundle: true` and no explicit bundle list,
 * so every external package `src/` imports ends up bundled. Deriving it here (rather than hand-
 * maintaining a list that drifts) keeps the "Bundled utilities" ncu group correct on its own.
 * Reading `dist/` instead is not an option: ncu runs without a build, and its extra transitive
 * packages are not in `package.json` for ncu to act on anyway.
 */
const collectBundledPackages = () => {
  /** @type {Set<string>} */
  const packageNames = new Set();

  const addPackagesFromSource = (/** @type {string} */ source) => {
    for (const [, specifier] of source.matchAll(EXTERNAL_IMPORT_REGEX)) {
      if (specifier.startsWith('.') || specifier.startsWith('node:')) {
        continue;
      }

      const segments = specifier.split('/');
      packageNames.add(specifier.startsWith('@') ? `${segments[0]}/${segments[1]}` : segments[0]);
    }
  };

  const walk = (/** @type {string} */ directory) => {
    for (const entry of fs.readdirSync(directory, {withFileTypes: true})) {
      const entryPath = path.join(directory, entry.name);
      if (entry.isDirectory()) {
        walk(entryPath);
        continue;
      }

      if (entry.name.endsWith('.ts')) {
        addPackagesFromSource(fs.readFileSync(entryPath, 'utf8'));
      }
    }
  };

  walk(SRC_DIRECTORY);

  // eslint-disable-next-line unicorn/no-array-sort
  return [...packageNames].sort();
};

const bundledPackages = collectBundledPackages();

/**
 * @type {Record<string, {packages: string[]; groupName?: string; icon?: string; priority?: number | null}>}
 */
const PACKAGE_GROUPS = Object.entries({
  'Package manager': {
    packages: ['pnpm'],
    icon: '📦',
    priority: 1,
  },
  '@eslint': {
    packages: ['eslint', 'eslint-config-un'],
    groupName: 'ESLint',
  },
  '@cspell': {
    packages: ['cspell'],
  },
  'Bundled utilities': {
    packages: bundledPackages,
    icon: '🧩',
    priority: 0,
  },
  // '@commitlint': {packages: []},
}).reduce((result, [groupName, {packages: packagesInGroup, ...groupMeta}]) => {
  const isScopedGroup = groupName.startsWith('@');
  const groupInfo = {
    groupName: isScopedGroup ? groupName.slice(1) : groupName,
    ...groupMeta,
  };

  const packagesInCurrentGroup = Object.fromEntries([
    [isScopedGroup ? `${groupName}/*` : groupName, groupInfo],
    ...packagesInGroup.map((packageInGroup) => [packageInGroup, groupInfo]),
  ]);

  return Object.assign(result, packagesInCurrentGroup);
}, {});

/**
 * @type {import('npm-check-updates').RunOptions}
 */
module.exports = {
  cache: true,
  cacheExpiration: 30,
  cacheFile: path.join(CACHE_DIRECTORY, 'cache.json'),

  filterResults: (
    packageName,
    {currentVersion: currentVersionRaw, upgradedVersion: upgradedVersionRaw},
  ) => {
    const [currentVersion, upgradedVersion] = [currentVersionRaw, upgradedVersionRaw].map((v) =>
      v.split('@').at(-1),
    );

    const blockedVersionRange = IGNORED_PACKAGE_RANGES_TO_UPDATE[packageName];
    if (blockedVersionRange && semver.satisfies(upgradedVersion || '', blockedVersionRange)) {
      return false;
    }

    const [currentVersionSemver, upgradedVersionSemver] = [currentVersion, upgradedVersion].map(
      (v) => semver.parse(v),
    );
    return !(
      IGNORED_MAJOR_VERSION_TRANSITIONS.has(packageName) &&
      currentVersionSemver?.major !== upgradedVersionSemver?.major
    );
  },

  format: ['group'],
  interactive: true,
  groupFunction: (fullName) => {
    const [nameScope] = fullName.split('/', 1);
    const knownGroup = PACKAGE_GROUPS[fullName] || PACKAGE_GROUPS[`${nameScope}/*`];

    if (knownGroup) {
      const {groupName, icon, priority} = knownGroup;
      return `${priority === null ? '' : `${priority ?? 4}. `}${icon || '📁'} ${groupName}`;
    }

    return fullName in packageJson.devDependencies
      ? '3. 🧑‍💻 Dev dependencies'
      : '2. 📦 Direct dependencies';
  },
};
