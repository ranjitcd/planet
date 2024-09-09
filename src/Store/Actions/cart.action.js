import { cartConstants } from "./constants";
import axios from "../../Helpers/axios";
import store from "../index";
const addToCart = (product, newQty, type,ptype , eachtabprice) => {
  console.log(
    "%cMyProject%cline:4%ctype",
    "color:#fff;background:#ee6f57;padding:3px;border-radius:2px",
    "color:#fff;background:#1f3c88;padding:3px;border-radius:2px",
    "color:#fff;background:rgb(3, 38, 58);padding:3px;border-radius:2px",
    type
    

  );
 





  return async (dispatch) => {
    const { cartProducts } = store.getState().cart;
   // console.log(cartProducts[product.product_id]);
    let qty = "";
    
    if (newQty && type !=="increment") {
      if (newQty>0)
      qty = newQty;
           
    } else {
      //alert('else'+newQty);
      
      if (type === "decrement") {
        
        if (parseInt(cartProducts[product.product_id].qty)>1) { qty = parseInt(cartProducts[product.product_id].qty - 1);
        } 
        
        else {
          qty = parseInt(cartProducts[product.product_id].qty);
        }
      } 
      
      else {

        qty = cartProducts[product.product_id] ? parseInt(cartProducts[product.product_id].qty + 1) : 1;
      }
      
    }
      cartProducts[product.product_id] = {
        ...product,
        qty, ptype ,eachtabprice
      };

      localStorage.setItem("cart", JSON.stringify(cartProducts));
    


    dispatch({
      type: cartConstants.ADD_TO_CART_REQUEST,
      payload: {
        cartProducts,ptype ,eachtabprice
      },
    });
        
  //  localStorage.setItem("cart", localStorage.getItem("cart"));

    // if (product.product_qty >= parseInt(cartProducts[product.product_id].qty)) {
    //   console.log("Ziyada hy", product.product_qty);

    // } else {
    //   console.log("Kum hy", product.product_qty);
    // }

    // const res = await axios.post(`homepagenavFull`);
    // if (res.status === 200) {
    //   dispatch({
    //     type: cartConstants.ADD_TO_CART_SUCCESS,

    //     payload: {
    //       categories: res.data,
    //       loading: false,
    //       dataSubcribe: false,
    //     },
    //   });
    // } else {
    //   dispatch({
    //     type: cartConstants.ADD_TO_CART_REQUEST,
    //     payload: { error: res.data.error },
    //   });
    // }
  };
};

export const removeCartItem = (product) => {
  const { cartProducts } = store.getState().cart;

  return async (dispatch) => {
    try {
      dispatch({ type: cartConstants.REMOVE_TO_CART_REQUEST });
      const qty = cartProducts[product.product_id]
        ? parseInt(cartProducts[product.product_id].qty + 1)
        : 1;
        // alert(qty)

      const isDeleted = delete cartProducts[product.product_id];
      if (isDeleted) {
        localStorage.setItem("cart", JSON.stringify(cartProducts));
        dispatch({
          type: cartConstants.ADD_TO_CART_REQUEST,
          payload: {
            cartProducts,
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const openCart = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: cartConstants.OPEN_CART_SUCCESS,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export { addToCart };
