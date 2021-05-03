/* eslint-disable import/no-anonymous-default-export */
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import developersReducer from '../reducers/developers';

import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      developers: developersReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
