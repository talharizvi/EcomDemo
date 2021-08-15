import { COUNTER_CHANGE, DECREASE_COUNT, ADD_ITEM, DELETE_ITEM, ADD_AMOUNT, DELETE_AMOUNT } from '../constants';

export function increaseCount() {
    return {
        type: COUNTER_CHANGE,
    }
}

export function decreaseCount() {
    return {
        type: DECREASE_COUNT,
    }
}

export function addItem(newItem) {
    return {
        type: ADD_ITEM,
        payload: newItem
    }
}

export function deleteItem(id) {
    return {
        type: DELETE_ITEM,
        payload: id
    }
}

export function addAmount(amount) {
    return {
        type: ADD_AMOUNT,
        payload: amount
    }
}

export function deleteAmount(amount) {
    return {
        type: DELETE_AMOUNT,
        payload: amount
    }
}