import {createStore,combineReducers ,applyMiddleware} from 'redux';
import {signInMethodReducer} from './reducers/signInMethod';
import {listReducer} from './reducers/list'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const rootReducer=combineReducers({
    list:listReducer,
    signInMethod:signInMethodReducer
})
// removed logger middleware
const store=createStore(rootReducer,applyMiddleware(thunk));

export default store;