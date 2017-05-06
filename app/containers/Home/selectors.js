/* @flow */
import type { AppState } from '../../types';
import * as R from 'ramda';
import { createSelector as create } from 'reselect';

export const selectDomain = (
) => (state:AppState) => {
  return state['home'];
};

export const isLoadingRes = () => create(
  selectDomain(),
  (subState) => subState['isLoadingRes']
);

export const getSearchRes = () => create(
  selectDomain(),
  (subState) => subState['searchRes']
);
