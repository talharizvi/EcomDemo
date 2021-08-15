import { createStore, combineReducers } from 'redux';
import { countReducer, addToCartReducer, amountReducer } from '../redux/reducer';

const rootReducer = combineReducers({ 
    count: countReducer,
    cartItems : addToCartReducer,
    amount: amountReducer
    });

    const store = createStore(rootReducer)     

export default store ;

