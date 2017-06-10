import { call, put, takeEvery, select } from 'redux-saga/effects';
import * as R from 'ramda';

import c from '../../constants';
import * as utils from '../../utils';
import config from '../../config.js';

export function* getLibrary() {

  const url = `${config('api')}/api/library`;
  const reqApi = utils.request({'method':'GET'});

  try {
    const res = yield call(reqApi, url);
    yield put({
      type: c.LOAD_LIBRARY_RESULTS,
      data: res['data']['results'],
    });
  } catch(err) {
    console.log('LIBRARY_SAGA_ERROR',err);
  }
}
