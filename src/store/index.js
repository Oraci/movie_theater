import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './ducks';
import saga from './sagas';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  composeEnhancer(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(saga);

export default store;
