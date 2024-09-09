import { cartConstants } from "../Actions/constants";

const initState = {
  cartProducts: {},
  isCartOpen: false,
  loading: true,
};

export default (state = initState, action) => {
  switch (action.type) {
    case cartConstants.ADD_TO_CART_REQUEST:
      state = {
        ...state,
        cartProducts: action.payload.cartProducts,
        loading: true,
      };
      break;
    case cartConstants.ADD_TO_CART_SUCCESS:
      state = {
        ...state,
        cartProducts: action.payload.cartProducts,
        loading: true,
      };
      break;
    case cartConstants.ADD_TO_CART_FAILURE:
      state = {
        ...state,
        cartProducts: action.payload.cartProducts,
        loading: true,
      };
      break;

    case cartConstants.OPEN_CART_SUCCESS:
      state = {
        ...state,
        isCartOpen: !state.isCartOpen,
      };
      break;
  }
  return state;
};
