import {createStore, combineReducers} from 'redux'
import {logReducer} from './reducers'
export const store = createStore(combineReducers({ isLogin: logReducer }));