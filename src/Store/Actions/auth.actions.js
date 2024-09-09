import { authConstants, cartConstants } from "../Actions/constants";
import axios from "../../Helpers/axios";



// new update signup action
export const signup = (user) => {
    return async (dispatch) => {

        let res;
        var bodyFormData = new FormData();
        bodyFormData.append('first_name', user.fname);
        bodyFormData.append('last_name', user.lname);
        bodyFormData.append('email', user.email);
        bodyFormData.append('password', user.password);
        bodyFormData.append('repassword', user.password_repeat);
        bodyFormData.append('tag', 'create_account');

        try {
            dispatch({ type: authConstants.SIGNUP_REQUEST });
            res = await axios.post(`/register.php`, bodyFormData)

            if (res.status === 200) {
                dispatch({
                    type: authConstants.SIGNUP_SUCCESS, payload: {
                        verification: true,
                        error: res.data.error
                    },
                });

            } else {
                const { error } = res.data;
                dispatch({ type: authConstants.SIGNUP_FAILURE, payload: { error } });
            }
        } catch (error) {
            const { data } = error.response;
            dispatch({
                type: authConstants.SIGNUP_FAILURE,
                payload: { error: data.error },
            });
        }
    };
};

export const verify = (user) => {
    return async (dispatch) => {
        let res;
        var bodyFormData = new FormData();
        bodyFormData.append('code', user.verification);
        bodyFormData.append('tag', 'verify_account');

        try {
            dispatch({ type: authConstants.VERIFY_REQUEST });
            res = await axios.post(`/verify.php`, bodyFormData)

            if (res.status === 200) {
                dispatch({
                    type: authConstants.VERIFY_SUCCESS, payload: {
                        verification: false,
                        verified: true,
                        error: res.data.error
                    },
                });

            } else {
                const { error } = res.data;
                dispatch({ type: authConstants.VERIFY_FAILURE, payload: { error, verified: false, } });
            }
        } catch (error) {
            const { data } = error.response;
            dispatch({
                type: authConstants.VERIFY_FAILURE,
                payload: { error: data.error },
            });
        }
    };
};

export const login = (user) => {
    return async (dispatch) => {
        var bodyFormData = new FormData();
        bodyFormData.append('password', user.userPassword);
        bodyFormData.append('email', user.userEmail);
        bodyFormData.append('tag', 'login');


        dispatch({ type: authConstants.LOGIN_REQUEST });
        const res = await axios.post(`/login.php`, bodyFormData);

        if (res.status === 200) {
            const { token } = res.data;

            if (res.data.stat) {

                let user = { email: res.data.userEmail, id: res.data.id, name: res.data.name }
                localStorage.setItem("token", token);
                localStorage.setItem("user", JSON.stringify(user));
                dispatch({
                    type: authConstants.LOGIN_SUCCESS,
                    payload: {
                        token,
                        user,
                    },
                })

            } else {

                dispatch({
                    type: authConstants.LOGIN_FAILURE,
                    payload: {
                        message: res.data.error,
                    },
                })
            }

        } else {
            if (res.status === 400) {
                dispatch({
                    type: authConstants.LOGIN_FAILURE,
                    payload: { message: res.data.error },
                });
            }
        }
    };
};

export const isUserLoggedIn = () => {
    return async (dispatch) => {
        const token = localStorage.getItem("token");
        if (token) {
            const user = JSON.parse(localStorage.getItem("user"));
            dispatch({
                type: authConstants.LOGIN_SUCCESS,
                payload: {
                    token,
                    user,
                },
            });
        } else {
            dispatch({
                type: authConstants.LOGIN_FAILURE,
                payload: { error: "Failed to login" },
            });
        }
    };
};

export const signout = () => {
    return async (dispatch) => {
        dispatch({ type: authConstants.LOGOUT_REQUEST });
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        localStorage.clear();
        dispatch({ type: authConstants.LOGOUT_SUCCESS });
        dispatch({ type: cartConstants.RESET_CART });
        const res = await axios.post(`/admin/signout`);
        if (res.status === 200) {

        } else {
            dispatch({
                type: authConstants.LOGOUT_FAILURE,
                payload: { error: res.data.error }
            });
        }
    };
};