import axios from "../../Helpers/axios";
import { productConstants } from "./constants";

export const getallReviews = (
  record,
  page
) => {
  return async (dispatch) => {
    dispatch({
      type: productConstants.GET_ALL_PRODUCTS_REQUEST,
      payload: { loading: true },
    });
    const res = await axios.get(
      `reviewsList?product_id=694&page=${page}`
      //`catProducts?limit=${record}&page=${page}&sort=${sort}&sortby=${sortby}&maincat=${mainSlug}&subcat=${childSlug}`
    );

    if (res.status === 200) {
      dispatch({
        type: productConstants.GET_ALL_PRODUCTS_SUCCESS,
        payload: {
          products: res.data.review_list,
          loading: false,
          totalRecords: res.data.review_count,
        },
      });
    } else {
      dispatch({
        type: productConstants.GET_ALL_PRODUCTS_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

