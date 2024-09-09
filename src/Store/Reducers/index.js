import { combineReducers } from "redux";
import category from "./category.reducer";
import allproducts from "./product.reducer";

import cart from "./cart.reducer";
import brands from "./brand.reducer";
import brandsproducts from "./brandproduct.reducer";



const rootReducer = combineReducers({
  category: category,
  allproducts: allproducts,
  cart: cart,
  brands:brands,
  brandproducts: brandsproducts,
  
});

export default rootReducer;
