import { act } from "react-dom/test-utils";

const SortProducts = (type, filteredProducts) => {
  if (type == "a-z") {
    filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
  } else if (type == "z-a") {
    filteredProducts.sort((a, b) => b.title.localeCompare(a.title));
  } else if (type == "high to low") {
    const sortbyHighToLow = (item1, item2) => item2.price - item1.price;
    filteredProducts.sort(sortbyHighToLow);
  } else if (type == "low to high") {
    const sortbyLowtoHigh = (item1, item2) => item1.price - item2.price;
    filteredProducts.sort(sortbyLowtoHigh);
  }
  return filteredProducts;
};

const initialState = {
  products: [],
  filteredProducts: [],
  recentlyViewedProducts: [],
  recommendedProducts: [],
  filterOnCategory: "all items",
  cart: [],
  currentItem: null,
  shippingAddress: {
    name: "Jos",
    email: "s@p.com",
    phone: "9876543210",
    address: "AB Rd",
    city: "Indore",
    postalCode: "42001",
    country: "India",
  },
  gridView: true,
};
const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      state = {
        ...state,
        products: action.payload,
        // filteredProducts: action.payload,
      };
      break;
    case "ADD_TO_CART":
      const item = state.products.find((item) => item.id == action.payload.id);
      const inCart = state.cart.find((item) => item.id == action.payload.id)
        ? true
        : false;
      return {
        ...state,
        // cart: inCart ? state.cart.map((item)=> item.id === action.payload.id ? {...item, qty: item.qty+1} : item )

        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: action.payload.qty }
                : { ...item, qty: action.payload.qty }
            )
          : [...state.cart, { ...item, qty: action.payload.qty }],
      };
    case "SET_RECENTLY_VIEWED_PRODUCTS":
      const prod = state.products.find((prod) => prod.id == action.payload.id);
      // console.log(prod);
      const inRecently = state.recentlyViewedProducts.find(
        (prod) => prod.id == action.payload.id
      )
        ? true
        : false;
      if (!inRecently) {
        return {
          ...state,
          recentlyViewedProducts: [
            ...state.recentlyViewedProducts,
            { ...prod },
          ],
        };
      }
      return {
        ...state,
      };
    case "SET_RECOMMENDED_PRODUCTS":
      const product = state.products.find(
        (prod) => prod.id == action.payload.id
      );
      const recProds = state.products.filter((prod) => {
        if (prod.category == product.category && prod.id !== product.id)
          return prod;
      });
      return {
        ...state,
        recommendedProducts: [...recProds],
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
            ? { ...item, qty: action.payload.qty }
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
    case "APPLY_FILTER":
      // state.filteredProducts =
      //   action.payload.category === "all items"
      //     ? state.products
      //     : state.products.filter(
      //         (product) => product.category === action.payload.category
      //       );
      return {
        ...state,
        filteredProducts:
          action.payload.category === "all items"
            ? state.products
            : state.products.filter(
                (product) => product.category === action.payload.category
              ),
        filterOnCategory: action.payload.category,
      };
    case "APPLY_SORT":
      let sortedProducts = [...state.filteredProducts];
      sortedProducts = SortProducts(action.payload.sortType, sortedProducts);
      return {
        ...state,
        filteredProducts: sortedProducts,
      };
    case "ADJUST_GRID_TO_LIST":
      return {
        ...state,
        gridView: false,
      };
    case "ADJUST_LIST_TO_GRID":
      return {
        ...state,
        gridView: true,
      };

    default:
      return state;
  }
  return state;
};

export default productsReducer;
