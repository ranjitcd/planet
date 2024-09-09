import { categoryConstansts } from "./constants";
import axios from "../../Helpers/axios";

const getAllCategory = () => {
  return async (dispatch) => {
    dispatch({
      type: categoryConstansts.GET_ALL_CATEGORIES_REQUEST,
      payload: {
        categories: null,
        loading: true,
        dataSubcribe: false,
      },
    });
    const res = await axios.post(`homepagenavFull`);
    if (res.status === 200) {
      dispatch({
        type: categoryConstansts.GET_ALL_CATEGORIES_SUCCESS,

        payload: {
          categories: res.data,
          loading: false,
          dataSubcribe: false,
        },
      });
    } else {
      dispatch({
        type: categoryConstansts.GET_ALL_CATEGORIES_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

export { getAllCategory };
