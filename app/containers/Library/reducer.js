/* @flow */
import type { LibraryState, LibraryActions } from './types';
import * as c from './constants';

const initialState:LibraryState = {
  isLoading: true,
  library: undefined,
};

export default function(
  state:LibraryState = initialState,
  action:LibraryActions
):LibraryState {
  switch (action.type) {
    case c.LOAD_LIBRARY_RESULTS:
      return {
        ...state,
        isLoading: false,
        library: action.data,
      };
    default:
      return {
        ...state,
      };
  }
}
