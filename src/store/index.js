import { applyMiddleware, createStore, compose } from 'redux';
import createLogger from 'redux-logger';
import reducer from './reducer';

const loggerMiddleware = createLogger({
  colors: {},
  collapsed: () => true,
});


const middleware = applyMiddleware(
  loggerMiddleware,
);

const store = createStore(
  reducer,
  compose(
    middleware,
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

export default store;
