import { brandConstansts,brandProductConstants } from "./constants";
import axios from "../../Helpers/axios";

const getAllBrand = () => {
  return async (dispatch) => {
    dispatch({
      type: brandConstansts.GET_ALL_BRANDS_REQUEST,
      payload: {
        brands: null,
        loading: true,
        dataSubcribe: false,
      },
    });
    const res = await axios.post(`getAllBrands`);
    if (res.status === 200) {
      dispatch({
        type: brandConstansts.GET_ALL_BRANDS_SUCCESS,

        payload: {
          brands: res.data,
          loading: false,
          dataSubcribe: false,
        },
      });
    } else {
      dispatch({
        type: brandConstansts.GET_ALL_BRANDS_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

export { getAllBrand };

const getAllBrandProducts = (
  record,
  page,
  sort,
  brandSlug,
  sortby
) => {
  return async (dispatch) => {
    dispatch({
      type: brandProductConstants.GET_ALL_BRANDPRODUCTS_REQUEST,
      payload: { loading: true },
    });
    console.log(`brandProducts?brand_slug=${brandSlug}&limit=${record}&page=${page}&sort=${sort}&sortby=${sortby}`);
    const res = await axios.get(
      `brandProducts?brand_slug=${brandSlug}&limit=${record}&page=${page}&sort=${sort}&sortby=${sortby}`
    );
    console.log(res);
    if (res.status === 200) {
      dispatch({
        type: brandProductConstants.GET_ALL_BRANDPRODUCTS_SUCCESS,
        payload: {
          brandproducts: res.data.products,
          loading: false,
          totalRecords: res.data.products_count,
        },
      });
    } else {
      dispatch({
        type: brandProductConstants.GET_ALL_BRANDPRODUCTS_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

export { getAllBrandProducts };



const getSeBrandProducts = (
  record,
  page2,
  keyword,
   sort,
  sortby
) => {
  return async (dispatch) => {
    dispatch({
      type: brandProductConstants.GET_ALL_BRANDPRODUCTS_REQUEST,
      payload: { loading: true },
    });
    
    const res = await axios.get(
      `searchBrand?search=${keyword}&limit=${record}&page=${page2}`
    );
    console.log(res);
    if (res.status === 200) {
      dispatch({
        type: brandProductConstants.GET_ALL_BRANDPRODUCTS_SUCCESS,
        payload: {
          brandproducts: res.data.brands,
          loading: false,
          totalRecords: res.data.brands_count,
        },
      });
    } else {
      dispatch({
        type: brandProductConstants.GET_ALL_BRANDPRODUCTS_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

export { getSeBrandProducts };
