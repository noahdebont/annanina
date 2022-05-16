import React from 'react';
import { render } from 'react-dom';
import { routes } from './routes';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { notify } from 'react-notify-toast';
import { rootReducer, actions, cqApi } from 'cq-base-react';
import { ScrollContext } from 'react-router-scroll-4';
import Favicon from 'react-favicon';
import FavIconImage from '../client/images/favicon-an.jpg';
import {
  TrackerWrapper
} from 'cq-components-react';
import promiseFinally from 'promise.prototype.finally';
promiseFinally.shim();

import './styles/app.css';

//
// Add the client app start up code to a function as window.webappStart.
// The webapp's full HTML will check and call it once the js-content
// DOM is created.
//
require.ensure(
  ['./sw-registration'],
  require => {
    require('./sw-registration')(notify);
  },
  'sw-registration'
);

window.webappStart = () => {
  window.prerenderReady = false;

  cqApi.generalSettingsApi()
  .get({showMappedConfig: true})
  .then(generalSettingsMapped => {
    const apiConfiguration = cqApi.cqApi.getConfiguration();
    cqApi.cqApi.initialize(_.merge(generalSettingsMapped, apiConfiguration))
  })
  .finally(() => {
    const {
      options,
      locale,
      localeList
    } = cqApi.cqApi.getConfiguration();

    const initialState = window.__PRELOADED_STATE__;
    const loggerMiddleware = createLogger();
    const store = createStore(
      rootReducer,
      initialState,
      applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
      ),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    // Create new order or refresh order
    store.dispatch(actions.refreshOrder());

    // Get user if already authentificated
    store.dispatch(actions.user.get());

    if (options && options.hasWishlist) {
      store.dispatch(actions.getWishlists());
    }
    
    const baseName = (localeList && !localeList.includes(locale)) ? localeList[0] : locale;

    render(
      <Provider store={store}>
        <BrowserRouter
          basename={`/${baseName}`}>
          <ScrollContext
            shouldUpdateScroll={(prevRouterProps, { location, history })  => {
              if (store.getState().modal.isVisible) {
                store.dispatch(actions.hideModal());
              }
              return prevRouterProps && location.pathname !== prevRouterProps.location.pathname;
            }}
          >
            <TrackerWrapper>
              <React.Fragment>
                <Favicon url={FavIconImage} />
                {routes}
              </React.Fragment>
            </TrackerWrapper>
          </ScrollContext>
        </BrowserRouter>
      </Provider>,
      document.querySelector('.js-content'),
      () => {
        setTimeout(() => {
          window.prerenderReady = true;
        }, 6000)
      }
    );
  });
};
