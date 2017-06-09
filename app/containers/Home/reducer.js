/* @flow */
import type { HomeState, HomeActions } from './types';
import * as c from './constants';

const initialState:HomeState = {
  isLoadingRes: true,
  searchRes: undefined,
};

export default function(
  state:HomeState = initialState,
  action:HomeActions
):HomeState {
  switch (action.type) {
    case c.POST_SEARCH:
      return {
        ...state,
        isLoadingRes: true,
      };
    case c.LOAD_SEARCH_RESULTS:
      return {
        ...state,
        searchRes: action.data,
        isLoadingRes: false,
      };
    default:
      return {
        ...state,
      };
  }
}
