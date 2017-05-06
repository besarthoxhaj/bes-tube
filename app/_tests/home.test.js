import test from 'tape';
import syncFlow from 'sync-flow';
import nock from 'nock';

import data from '../../data';
import config from '../config';
import { btns } from './_helpers';
import utils from '../_utils';
import appSagas from '../containers/App/sagas';

test('HOME', t => {

  // nock.cleanAll();
  //
  // nock(`${config('api')}`)
  //   .post(`/api/search`)
  //   .times(3)
  //   .reply(200, (url,body) => {
  //     const text = JSON.parse(body)['text'].toUpperCase();
  //     return data[`GET.SEARCH.${text}`];
  //   });

  const { dom, rootElm } = utils.start();

  global.window = dom.window;
  global.document = window.document;
  global.navigator = window.navigator
  global.React = require('react');
  global.ReactDOM = require('react-dom');
  const Main = require('../main').default;

  t.test('HOME - SIMPLE SEARCH', st => {

    const { store, history } = utils.start();

    const exec = [
      () => {
        ReactDOM.render(<Main store={store} history={history} />, rootElm);
        appSagas.map(store.runSaga);
      },
      () => {
        t.comment('Type text into input');
        btns.insertSearch(window,document,'Hello');
      },
      () => {
        t.comment('...wait and press `Enter`');
        btns.enterSearch(window,document);
      },
      () => { t.comment('...wait') },
      () => {
        utils.snap({
          numId:'001',
          mess:'Enter input text'
        },utils.log(dom.serialize()));
      },
      () => {
        t.comment('Type text into input');
        btns.insertSearch(window,document,'');
        btns.insertSearch(window,document,'Messi');
      },
      () => {
        t.comment('...wait and press `Enter`');
        btns.enterSearch(window,document);
      },
      () => { t.comment('...wait') },
      () => {
        utils.snap({
          numId:'002',
          mess:'Enter Messi text'
        },utils.log(dom.serialize()));
        btns.downloadMessi(document).click();
      },
      () => { t.comment('...wait') },
      () => {

      },
      () => {
        t.comment('APP: unmount Component');
        ReactDOM.unmountComponentAtNode(rootElm);
        t.end();
      },
    ];

    syncFlow(exec, t.end, 500);
  });
});
