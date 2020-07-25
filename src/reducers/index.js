import { combineReducers } from "redux";
import logReducer from "./logReducer";

export default combineReducers({
  log: logReducer,
});

/*
import {combineReducers } from 'redux';

export default combineReducers({});
*/
