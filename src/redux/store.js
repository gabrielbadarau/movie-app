import {createStore,applyMiddleware,combineReducers} from 'redux';
import {searchReducer} from './reducers/search';
import logger from 'redux-logger'

// const rootReducer=combineReducers(
//     {
//         list:listReducer,
//         sortersList:sortersListReducer
//     }
// )
const store=createStore(searchReducer,applyMiddleware(logger));

export default store;