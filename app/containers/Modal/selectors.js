/* @flow */
import type { AppState } from '../../types';
import * as R from 'ramda';
import { createSelector as create } from 'reselect';

export const selectDomain = () => (state:AppState) => {
  return state['modal'];
};

export const isVisible = () => create(
  selectDomain(),
  (subState) => subState['isVisible']
);

export const isAnimated = () => create(
  selectDomain(),
  (subState) => subState['animated']
);

export const getRoute = () => create(
  selectDomain(),
  (subState) => subState['route']
);
