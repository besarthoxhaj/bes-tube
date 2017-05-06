/* @flow */

import type { SearchResult } from '../../types/api';

export type HomeState = {
  isLoadingRes: boolean,
  searchRes: Array<SearchResult>,
};

export type HomeActions =
    { type: 'home/LOAD_SEARCH_RESULTS', data: Array<SearchResult> }
  | { type: 'home/POST_SEARCH' }
;
