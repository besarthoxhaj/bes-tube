import { combineReducers } from 'redux';

import global from './containers/App/reducer';
import home from './containers/Home/reducer';
import router from './containers/Router/reducer';
import alert from './containers/Alert/reducer';
import modal from './containers/Modal/reducer';

const rootReducer = combineReducers({
  global,
  home,
  router,
  alert,
  modal,
});

export default rootReducer;
