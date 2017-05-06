import { take } from 'redux-saga/effects';

import c from '../../constants';
import * as homeSagas from '../Home/sagas';

export default [
  homeSagas['watchSubmitSearch']
];
