import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import handleHomeState from './handle-home.reducer.js'
const reducer = combineReducers(
  {
    routing: routerReducer,
    homeState:handleHomeState
  }
);

export default reducer;
