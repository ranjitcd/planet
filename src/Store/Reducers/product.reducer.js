import { productConstants } from "../Actions/constants";

const initialState = {
  products: {},
  secats:{},
  details: "",
  loading: false,
  error: null,
  totalRecords: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case productConstants.GET_ALL_PRODUCTS_REQUEST:
      state = {
        ...state,
        loading: action.payload.loading,
      };
      break;

    case productConstants.GET_ALL_PRODUCTS_SUCCESS:
      state = {
        ...state,
        loading: action.payload.loading,
        products: action.payload.products,
        totalRecords: action.payload.totalRecords,
      };
      break;
    case productConstants.GET_ALL_CATPRODUCTS_SUCCESS:
    state = {
      ...state,
      loading: action.payload.loading,
      secats: action.payload.secats,
      sctotalRecords: action.payload.totalRecords,
    };
    break;
    case productConstants.GET_ALL_PRODUCTS_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;

    case productConstants.GET_PRODUCT_DETAILS_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;

    case productConstants.GET_PRODUCT_DETAILS_SUCCESS:
      state = {
        ...state,
        loading: false,
        details: action.payload.details,
      };

      break;

    case productConstants.GET_PRODUCT_DETAILS_FAILURE:
      state = {
        ...state,
        loading: false,
        details: {},
      };
      break;
  }

  return state;
};
