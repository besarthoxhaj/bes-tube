import * as R from 'ramda';
import { delay } from 'redux-saga';
import { select, put, call, take, takeEvery, fork } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

import c from '../../constants';
import * as modalSel from '../Modal/selectors';
import * as librarySagas from '../Library/sagas';
import * as utils from '../../utils';
import config from '../../config';

/**
 * DOCUMENTATION:
 *
 * Since react-router@4 there is not middleware
 * which previously was added to fire http requests
 * depending on the route. Middlewares were also
 * used to scroll to the top of the page.
 *
 * All of this now as to be done manually.
 */
export function watchPathChange(history) {
  return function* () {
    yield takeEvery(LOCATION_CHANGE, function* (action) {

      /**
       * The first time the attribute query is not present
       * in the location object, I add it here to make
       * sure is always present.
       */
      const { payload:curr } = action;
      curr['query'] = utils.parseUrl(curr['search'])['query'];
      const prev = utils.getPrev(history);
      prev['query'] = utils.parseUrl(prev['search'])['query'];

      const isFirstLink = (prev.pathname === undefined);
      const isModalOpen = yield select(modalSel.isVisible());

      const isSamePath = curr['pathname'] === prev['pathname'];
      const isDiffPath = !isSamePath;

      const isLibrary = curr['pathname'] == '/library';

      if(isDiffPath) {
        window.scrollTo(0,0);
      }

      if(isDiffPath && isLibrary) {
        yield call(librarySagas.getLibrary);
        return;
      }
    });
  }
}
