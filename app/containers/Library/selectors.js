/* @flow */
import type { AppState } from '../../types';
import * as R from 'ramda';
import { createSelector as create } from 'reselect';

export const selectDomain = (
) => (state:AppState) => {
  return state['library'];
};
