import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { cartReducer } from './reducer/cartReducer'


const rootReducer= combineReducers({
     allcart: cartReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))