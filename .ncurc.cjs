// @ts-check
const fs = require('node:fs');
const path = require('node:path');
const semver = require('semver');
const packageJson = require('./package.json');

const BUNDLED_PACKAGES = [
  '@ark/util',
  'arkregex',
  'destr',
  'devalue',
  'es-toolkit',
  'lossless-json',
  'neotraverse',
  'remeda',
  'safe-stable-stringify',
  'string-ts',
  'ts-extras',
  'type-fest',
  'yieldable-json',
];

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
    packages: BUNDLED_PACKAGES,
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
    const [nameScope] = fullName.split('/');
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
