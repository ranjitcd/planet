import { brandConstansts } from "../Actions/constants";

const initState = {
  brands: [],
  loading: false,
  subscribe: false,
  error: null,
};

export default (state = initState, action) => {
  switch (action.type) {
    case brandConstansts.GET_ALL_BRANDS_REQUEST:
      state = {
        ...state,
        loading: action.payload.loading,
        brands: action.payload.brands,
      };
      break;
    case brandConstansts.GET_ALL_BRANDS_SUCCESS:
      state = {
        ...state,
        loading: action.payload.loading,
        brands: action.payload.brands,
      };
      break;
  }

  return state;
};
