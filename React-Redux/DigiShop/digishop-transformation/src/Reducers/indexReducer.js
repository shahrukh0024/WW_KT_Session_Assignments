import { combineReducers } from "redux";
import productsReducer from "./productsReducer";

const rootReducer = combineReducers({
  products: productsReducer
});
export default rootReducer;
