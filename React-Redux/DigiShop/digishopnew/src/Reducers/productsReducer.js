import { act } from "react-dom/test-utils";

const initialState = {
  products: [],
  cart: [],
  shippingAddress: {
    name: "Jos",
    email:"",
    phone:"",
    address: "AB Rd",
    city: "Indore",
    postalCode: "42001",
    country: "India",
  },
};
const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      state = { ...state, products: action.payload };
      break;
    case "ADD_TO_CART":
      const item = state.products.find((item) => item.id === action.payload.id);
      const inCart = state.cart.find((item) => item.id === action.payload.id)
        ? true
        : false;
      return {
        ...state,
        // cart: inCart ? state.cart.map((item)=> item.id === action.payload.id ? {...item, qty: item.qty+1} : item )
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: +action.payload.qty }
                : item
            )
          : [...state.cart, { ...item, qty: action.payload.qty }],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case "ADJUST_ITEM_QTY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case "LOAD_CURRENT_ITEM":
      return {
        ...state,
        currentItem: action.payload,
      };
    case "CART_SAVE_SHIPPING_ADDRESS":
      return {
        ...state,
        shippingAddress: action.payload,
      };
    default:
      return state;
  }
  return state;
};

export default productsReducer;
