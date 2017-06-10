/* @flow */

import type { LibraryResult } from '../../types/api';

export type LibraryState = {
  isLoading: boolean,
  library: ?Array<LibraryResult>,
};

export type LibraryActions =
    { type: 'library/LOAD_LIBRARY_RESULTS', data: Array<LibraryResult> }
  | { type: 'library/GET_LIBRARY' }
;
