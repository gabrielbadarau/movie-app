import {createStore,applyMiddleware} from 'redux';
import {signInMethodReducer} from './reducers/signInMethod';
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const store=createStore(signInMethodReducer,applyMiddleware(thunk,logger));

export default store;