import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';



import {
    userListReducer,
  } from './reducers/userReducers';


const reducer = combineReducers({
    userList: userListReducer,
  });

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,

  composeEnhancer(applyMiddleware(thunk))
);

export default store;