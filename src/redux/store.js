import {createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import cakeReducer from './cake/cakeReducer';
import userReducers from './user/userReducer';


const reducers = combineReducers({
    cake: cakeReducer, 
    user: userReducers
});
const store = createStore(reducers, applyMiddleware(thunk));
export default store;