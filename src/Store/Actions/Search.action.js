import axios from "../../Helpers/axios";
import { productConstants } from "./constants";
export const getSearchProducts = (
  record,
  page,
  keyword,
  sort,
  sortby
) => {
  return async (dispatch) => {
    dispatch({
      type: productConstants.GET_ALL_PRODUCTS_REQUEST,
      payload: { loading: true },
    });
     const res = await axios.get(
      `searchProducts?search=${keyword}&limit=${record}&page=${page}&sort=${sort}&sortby=${sortby}`
    );
    if (res.status === 200) {
      dispatch({
        type: productConstants.GET_ALL_PRODUCTS_SUCCESS,
        payload: {
          products: res.data.products,
          loading: false,
          totalRecords: res.data.products_count,
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

export const getSearchCatProducts = (
  record,
  page,
  keyword,
  sort,
  sortby
) => {
  return async (dispatch) => {
    dispatch({
      type: productConstants.GET_ALL_PRODUCTS_REQUEST,
      payload: { loading: true },
    });
     const res = await axios.get(
      `searchCategory?search=${keyword}&limit=${record}&page=${page}&sort=${sort}&sortby=${sortby}`
    );
    if (res.status === 200) {
      dispatch({
        type: productConstants.GET_ALL_CATPRODUCTS_SUCCESS,
        payload: {
          secats: res.data.categories,
          loading: false,
          totalRecords: res.data.categories_count,
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

export const getsearchProductBySlug = (slug) => {
  return async (dispatch) => {
    dispatch({
      type: productConstants.GET_PRODUCT_BY_SLUG_REQUEST,
      payload: { loading: true },
    });
    const res = await axios.get(`products_api.php?id=${slug}&type=product`);

    if (res.status === 200) {
      const { loading } = res;

      dispatch({
        type: productConstants.GET_PRODUCT_BY_SLUG_SUCCESS,
        payload: { products: res.data, loading: false },
      });
    } else {
      dispatch({
        type: productConstants.GET_PRODUCT_BY_SLUG_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

export const getsearchProductDetailsBySlug = (slug) => {
  return async (dispatch) => {
    dispatch({
      type: productConstants.GET_PRODUCT_DETAILS_REQUEST,
      payload: { details: "", loading: true },
    });
    const res = await axios.get(`productDetails/${slug}`);
    let array = "";
    if (res.status === 200) {
      Object.keys(res.data).map((i, j) => {
        array = res.data[i];
      });

      dispatch({
        type: productConstants.GET_PRODUCT_DETAILS_SUCCESS,
        payload: { details: array, loading: false },
      });
    } else {
      dispatch({
        type: productConstants.GET_PRODUCT_DETAILS_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

// export const getProductByID = (id) => {
//   return async (dispatch) => {
//     dispatch({
//       type: productConstants.GET_PRODUCT_BY_ID_REQUEST,
//       payload: { loading: true },
//     });

//     const res = await axios.get(`products_api.php?id=${id}&type=product`);

//     if (res.status === 200) {
//       const { loading } = res;

//       dispatch({
//         type: productConstants.GET_PRODUCT_BY_ID_SUCCESS,
//         payload: { singleProduct: res.data.product, loading: false },
//       });
//     } else {
//       dispatch({
//         type: productConstants.GET_PRODUCT_BY_ID_FAILURE,
//         payload: { error: res.data.stat },
//       });
//     }
//   };
// };

// export const getProductsByPrice = (id, min, max) => {
//   return async (dispatch) => {
//     dispatch({
//       type: productConstants.GET_PRODUCT_BY_PRICE_REQUEST,
//       payload: { loading: true },
//     });

//     const res = await axios.get(
//       `products_api.php?category=${id}&type=n&min=${min}&max=${max}`
//     );

//     if (res.status === 200) {
//       dispatch({
//         type: productConstants.GET_PRODUCT_BY_PRICE_SUCCESS,
//         payload: { productsByPrice: res.data.product, loading: false },
//       });
//     } else {
//       dispatch({
//         type: productConstants.GET_PRODUCT_BY_PRICE_FAILURE,
//         payload: { error: res.data },
//       });
//     }
//   };
// };
