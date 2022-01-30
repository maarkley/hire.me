import { createStore, combineReducers, applyMiddleware } from 'redux'
import UserReducer from './UserReducer'
import InterfaceReducer from './InterfaceReducer'
import ContractReducer from './ContractReducer'
import promiseMiddleware from 'redux-promise-middleware'

let reducers = combineReducers({
    user: UserReducer,
    contract: ContractReducer,
    interface: InterfaceReducer
})

let store = createStore(reducers, applyMiddleware(promiseMiddleware()))
// applyMiddleware(store, promiseMiddleware())

export default store