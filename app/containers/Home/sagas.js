import { call, put, takeEvery, select } from 'redux-saga/effects';
import * as R from 'ramda';

import c from '../../constants';
import * as utils from '../../utils';
import config from '../../config.js';

export function* watchSubmitSearch() {
  yield takeEvery([
    c.POST_SEARCH,
    c.POST_DOWNLOAD,
  ], function* (action) {
    if(action.type === c.POST_SEARCH) {
      yield call(sendSearch, action.value);
    } else {
      yield call(sendDownload, action.value);
    }
  });
}

export function* sendSearch(text) {

  const url = `${config('api')}/api/search`;

  const reqApi = utils.request({
    'method': 'POST',
    'body': JSON.stringify({text}),
  });

  try {
    const res = yield call(reqApi, url);
    yield put({
      type: c.LOAD_SEARCH_RESULTS,
      data: res['data']['items'],
    });
  } catch(err) {
    console.log('SEARCH_SAGA_ERROR',err);
  }
}

export function* sendDownload(videoId) {

  const url = `${config('api')}/api/download`;

  const reqApi = utils.request({
    'method': 'POST',
    'body': JSON.stringify({videoId}),
  });

  try {
    const res = yield call(reqApi, url);
    console.log('DOWNLOAD RES',res);
  } catch(err) {
    console.log('DOWNLOAD_SAGA_ERROR',err);
  }
}
