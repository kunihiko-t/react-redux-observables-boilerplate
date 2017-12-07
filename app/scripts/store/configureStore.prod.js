import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createEpicMiddleware } from 'redux-observable';

import rootEpics from 'epics';
import rootReducer from 'reducers';
import { persistCombineReducers, createTransform } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // or whatever storage you are using

const epicMiddleware = createEpicMiddleware(rootEpics);
// const reducer = combineReducers({ ...rootReducer });

const myTransform = createTransform(
  null, null,
  // configuration options
  { whitelist: ['app', 'github', 'user'] }
);

const config = {
  transform: myTransform,
  key: 'primary',
  debug: true,
  storage,
};

const reducer = persistCombineReducers(config, { ...rootReducer });

export default (initialState = {}) => {
  const createStoreWithMiddleware = applyMiddleware(thunk, epicMiddleware)(createStore);

  return createStoreWithMiddleware(reducer, initialState);
};
