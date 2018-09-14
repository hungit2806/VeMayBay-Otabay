import { createStore, applyMiddleware, compose } from "redux";
// import { browserHistory } from "react-router";
import { BrowserRouter,Switch, Route } from "react-router-dom";
import sagas from "../sagas";
import createSagaMiddleware from 'redux-saga';
import {
  routerMiddleware
} from "react-router-redux";
import reducer from "../reducers/index";

// create the middleware with the userManager
// const oidcMiddleware = createOidcMiddleware(userManager);

const sagaMiddleware = createSagaMiddleware();
const initialState = {};

const createStoreWithMiddleware = compose(
  applyMiddleware(sagaMiddleware, routerMiddleware(BrowserRouter))
)(createStore);

const store = createStoreWithMiddleware(reducer, initialState);

export default store;
sagaMiddleware.run(sagas);
