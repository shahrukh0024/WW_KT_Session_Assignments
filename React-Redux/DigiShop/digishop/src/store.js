import { createStore } from "redux";
import rootReducer from "./Reducers/indexReducer";
import { composeWithDevTools } from '@redux-devtools/extension';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
