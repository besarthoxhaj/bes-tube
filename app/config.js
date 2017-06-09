/**
 * @flow
 *
 * Global config file.
 */

import { mergeAll } from 'ramda';

export const dev = {
  api: `http://localhost:9005`,
};

export const stag = {
  api: 'https://staging.com',
};

export const prod = {
  api: 'https://production.com',
};

export const envs = {
  dev,
  stag,
  prod,
};

export default (key:string) => mergeAll([
  {},
  envs[window._REACT_ENV || 'dev'],
])[key];
