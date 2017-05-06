import test from 'tape';
import syncFlow from 'sync-flow';

import { btns } from './_helpers';
import utils from '../_utils';
import appSagas from '../containers/App/sagas';

test('APP', t => {

  const { store, history, dom, rootElm } = utils.start();

  global.window = dom.window;
  global.document = window.document;
  global.navigator = window.navigator
  global.React = require('react');
  global.ReactDOM = require('react-dom');
  const Main = require('../main').default;

  const exec = [
    () => {
      ReactDOM.render(<Main store={store} history={history} />, rootElm);
      appSagas.map(store.runSaga);
    },
    () => {
      utils.snap(
        {numId:'000',mess:'App mounts without errors'},
        utils.log(dom.serialize())
      );
    },
    () => {
      t.comment('APP: unmount Component');
      ReactDOM.unmountComponentAtNode(rootElm);
      t.end();
    }
  ];

  syncFlow(exec, t.end, 200);
});
