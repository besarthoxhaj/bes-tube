import * as R from 'ramda';
import queryString from 'query-string';

import * as U from './helpers';
import config from '../config';

/**
 * Substitutes
 */
export const addQueryParam = (loc:Location, keysValue:KeyValueInput):Location => {
  const newLoc = R.pick(['pathname','search'],loc);
  newLoc.query = queryString.parse(newLoc.search);
  Object.keys(keysValue).forEach((elm) => delete newLoc.query[elm]);
  newLoc.query = Object.assign(keysValue,newLoc.query);
  newLoc.search = queryString.stringify(newLoc.query);
  return newLoc;
};

export const removeQueryParam = (loc:Location, keys:Array<string>):Location => {
  const newLoc = R.pick(['pathname','search'],loc);
  newLoc.query = queryString.parse(newLoc.search);
  keys.forEach((elm) => delete newLoc.query[elm]);
  newLoc.search = queryString.stringify(newLoc.query);
  return newLoc;
};

/**
 * Light wrapper around Fetch API. Check MDN docs:
 * - https://developer.mozilla.org/en/docs/Web/API/Fetch_API
 */
export const request = R.curry((opts, url) => {

  const mergeOpts = R.merge({
    'Headers': {
      'Content-Type': 'application/json',
    }
  }, opts);

  return fetch(url, mergeOpts)
    .then(checkStatus)
    .then(parseJSON);

  function parseJSON(res) {
    return res.json();
  }

  function checkStatus(res) {
    if(res.status >= 200 && res.status < 300) {
      return res;
    }
    const err = new Error(res.statusText);
    err.res = res;
    throw err;
  }
});

/**
 * [parseUrl description]
 * @param  {[type]} url [description]
 * @return {[type]}     [description]
 */
export const parseUrl = (url) => {

  var pathname = R.pipe(
    R.either(U.regExp(/\#(.*?)\?/), U.regExp(/\#(.*)/)),
    R.either(U.getNth(1), U.curryIdentity('/'))
  )(url);

  var search = R.pipe(
    U.regExp(/\?(.*)/),
    R.either(U.getNth(0), U.curryIdentity(''))
  )(url);

  var query = queryString.parse(search);

  return {
    pathname,
    search,
    query,
  };
}

/**
 * Create a `randomString`
 */
export const randomString = (length) => {
  const chars = '01236789abcdefghijkltuvwxyzABNOPQRWXYZ';
  let result = '';
  for (let i = length; i > 0; --i) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
};

/**
 * Just a list of random colors
 * to use as placeholder for
 * development
 */
export const getColor = () => {

  const COLORS = [
    '#15B371',
    '#DB3737',
    '#FF7373',
    '#F29D49',
    '#669EFF',
    '#29A634',
    '#C274C2',
    '#9E2B0E',
    '#A82A2A',
  ];

  return COLORS[Math.floor(Math.random() * COLORS.length)];
};

/**
 * Get previous history state.
 */
export const getPrev = (history):{
  pathname: string,
  search: string,
  hash: string,
  key: string,
} => {

  // BUG: during the tests for some reason
  // past entries are duplicated. This filter
  // will ensure that only unique keys are
  // present. To make it more weird it
  // doesn't happend in production
  if(history.entries && global._TEST_) {
    history.entries = R.uniqWith(
      (a,b) => a['key'] === b['key'],
      history.entries
    );
  }

  const len = (history.entries || {}).length;

  if(len === 1 || len === 0 || len === undefined) {
    return {};
  }

  const prev = history.entries.slice(len-2,len-1);
  const clone = JSON.parse(JSON.stringify(prev[0]));
  return clone;
};

/**
 * Google Analytics.
 * NOTE: this is a self invoking
 * function.
 */
export const GA = (() => {

  // const ReactGA = global._TEST_
  //   ? require('../_utils/mocks/react-ga')
  //   : require('react-ga');

  const ReactGA = require('../_utils/mocks/react-ga');

  ReactGA.initialize(config('id'),{
    debug:config('debug'),
  });

  return ReactGA;
})();
