import { brandProductConstants } from "../Actions/constants";

const initialState = {
  brandproducts: {},
  details: "",
  loading: false,
  error: null,
  totalRecords: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case brandProductConstants.GET_ALL_BRANDPRODUCTS_REQUEST:
      state = {
        ...state,
        loading: action.payload.loading,
      };
      break;

    case brandProductConstants.GET_ALL_BRANDPRODUCTS_SUCCESS:
      state = {
        ...state,
        loading: action.payload.loading,
        products: action.payload.brandproducts,
        totalRecords: action.payload.totalRecords,
      };
      break;
    case brandProductConstants.GET_ALL_BRANDPRODUCTS_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;

    case brandProductConstants.GET_BRANDPRODUCT_DETAILS_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;

    case brandProductConstants.GET_BRANDPRODUCT_DETAILS_SUCCESS:
      state = {
        ...state,
        loading: false,
        details: action.payload.details,
      };

      break;

    case brandProductConstants.GET_BRANDPRODUCT_DETAILS_FAILURE:
      state = {
        ...state,
        loading: false,
        details: {},
      };
      break;
  }

  return state;
};
