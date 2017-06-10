import { combineReducers } from 'redux';

import global from './containers/App/reducer';
import home from './containers/Home/reducer';
import router from './containers/Router/reducer';
import alert from './containers/Alert/reducer';
import modal from './containers/Modal/reducer';
import library from './containers/Library/reducer';

const rootReducer = combineReducers({
  global,
  home,
  router,
  alert,
  modal,
  library,
});

export default rootReducer;
