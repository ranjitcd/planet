import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./Reducers";
import thunk from "redux-thunk";

const Store = createStore(
  rootReducer,
  //   persistedState,
  composeWithDevTools(applyMiddleware(thunk))
);
// Store.subscribe(() => {
//   saveState({
//     cart: Store.getState().cart,
//   });
// });

export default Store;
