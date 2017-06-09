import test from 'tape';
import syncFlow from 'sync-flow';
import nock from 'nock';

import data from '../../data';
import config from '../config';
import { btns } from './_helpers';
import utils from '../_utils';
import appSagas from '../containers/App/sagas';

test('001 - HOME', t => {

  const { dom, rootElm } = utils.start();

  global.window = dom.window;
  global.document = window.document;
  global.navigator = window.navigator
  global.React = require('react');
  global.ReactDOM = require('react-dom');
  const Main = require('../main').default;

  t.test('001.01 - HOME - SIMPLE SEARCH', st => {

    nock.cleanAll();
    nock(`${config('api')}`)
      .post(`/api/search`)
      .times(3)
      .reply(200, (url,body) => {
        const text = JSON.parse(body)['text'].toUpperCase();
        return data[`GET.SEARCH.${text}`];
      });
    nock(`${config('api')}`)
      .post(`/api/download`)
      .reply(200,{});

    const {store,history} = utils.start();

    syncFlow([
      () => {
        appSagas.map(store.runSaga);
        ReactDOM.render(<Main store={store} history={history} />, rootElm);
      },
      () => {
        st.comment('Type text into input');
        btns.insertSearch(window,document,'Hello');
      },
      () => {
        st.comment('...wait and press `Enter`');
        btns.enterSearch(window,document);
      },
      () => { st.comment('...wait') },
      () => {
        utils.snap({
          numId:'001.01.01',
          mess:'Enter input text'
        },utils.log(dom.serialize()));
      },
      () => {
        st.comment('Type text into input');
        btns.insertSearch(window,document,'');
        btns.insertSearch(window,document,'Messi');
      },
      () => {
        st.comment('...wait and press `Enter`');
        btns.enterSearch(window,document);
      },
      () => { st.comment('...wait') },
      () => {
        utils.snap({
          numId:'001.01.02',
          mess:'Enter Messi text'
        },utils.log(dom.serialize()));
        btns.downloadMessi(document).click();
      },
      () => {
        st.comment('APP: unmount Component');
        ReactDOM.unmountComponentAtNode(rootElm);
        st.end();
      },
    ],st.end,500);
  });
});
