import {regexTyped} from 'unutils/regex';

const match = regexTyped('^(\\d+)$').exec('5');
if (match) {
  const capture: `${number}` = match[1];
  void capture;
}
