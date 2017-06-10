import { take } from 'redux-saga/effects';

import c from '../../constants';
import * as homeSagas from '../Home/sagas';
import * as routerSagas from '../Router/sagas';

export default function({history}) {

  if(history === undefined) {
    throw 'Forgot to pass {history} to appSagas';
  }

  return [
    homeSagas['watchSubmitSearch'],
    routerSagas['watchPathChange'](history),
  ];
}
