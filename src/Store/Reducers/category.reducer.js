import { categoryConstansts } from "../Actions/constants";

const initState = {
  categories: [],
  
  loading: false,
  subscribe: false,
  error: null,
};

export default (state = initState, action) => {
  switch (action.type) {
    case categoryConstansts.GET_ALL_CATEGORIES_REQUEST:
      state = {
        ...state,
        loading: action.payload.loading,
        categories: action.payload.categories,
      };
      break;
    case categoryConstansts.GET_ALL_CATEGORIES_SUCCESS:
      state = {
        ...state,
        loading: action.payload.loading,
        categories: action.payload.categories,
      };
      break;
  }

  return state;
};


