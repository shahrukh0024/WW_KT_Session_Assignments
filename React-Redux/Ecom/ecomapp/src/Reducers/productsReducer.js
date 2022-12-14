const initialState = {
  products: [],
  cart: []
};
const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      state = { ...state, products: action.payload };
      break;
    case "SET_PRODUCT_IN_CART":
      state.cart.push(action.payload);
      // state = { ...state, cart: action.payload };
      break;
    default:
      return state;
  }
  return state;
};

export default productsReducer;
