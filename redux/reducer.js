const initialState = {
    count: 0,
    cartItems:[],
    amount: 0
    };

function countReducer(state = initialState, action) {
  switch (action.type) {
    case 'COUNTER_CHANGE':
      return { count: state.count + 1 }
    case 'DECREASE_COUNT':
      return { count: state.count - 1 }  
    default:
      return state
  }
};

function amountReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_AMOUNT':
      return { amount: state.amount + action.payload }
    case 'DELETE_AMOUNT':
      return { amount: state.amount - action.payload }  
    default:
      return state
  }
};

function addToCartReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return { cartItems:[...state.cartItems, action.payload] }

    case 'DELETE_ITEM':
      return { cartItems:state.cartItems.filter((el,index) => index !== action.payload)}

    default:
      return state
  }
}

export { countReducer }
export { addToCartReducer }
export { amountReducer }