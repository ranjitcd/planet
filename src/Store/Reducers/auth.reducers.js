import { authConstants } from "../Actions/constants";

const initState = {
    token: null,
    user: {
        email: '',
        id: '',
        name: '',
    },
    authenticate: false,
    authenticating: false,
    loading: false,
    verification: false,
    verified: false,
    error: null,
    message: ''
};

export default (state = initState, action) => {

    switch (action.type) {
        case authConstants.LOGIN_REQUEST:
            state = {
                ...state,
                authenticating: true
            }
            break;
        case authConstants.LOGIN_SUCCESS:
            state = {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                authenticate: true,
                authenticating: false,
                verification: action.payload.verification,
                error: action.payload.error,
                message: ''
            }
            break;
        case authConstants.LOGIN_FAILURE:
            state = {
                ...state,
                authenticate: false,
                token: null,
                error: null,
                message: action.payload.message

            }
            break;
        case authConstants.LOGOUT_REQUEST:
            state = {
                ...state,
                loading: true,

            }
            break;
        case authConstants.LOGOUT_SUCCESS:
            state = {
                ...initState
            }
            break;
        case authConstants.LOGOUT_FAILURE:
            state = {
                ...state,
                error: action.payload.error,
                loading: false
            }
            break;
        case authConstants.SIGNUP_REQUEST:
            break;
        case authConstants.SIGNUP_SUCCESS:
            state = {
                ...state,
                verification: action.payload.verification,
                error: action.payload.error,

            }
            break;
        case authConstants.SIGNUP_FAILURE:
            state = {
                ...state,
                error: action.payload.error,
            };
            break;

        case authConstants.VERIFY_REQUEST:
            break;
        case authConstants.VERIFY_SUCCESS:
            state = {
                ...state,
                verification: action.payload.verification,
                error: action.payload.error,

            }
            break;
        case authConstants.VERIFY_FAILURE:
            state = {
                ...state,
                error: action.payload.error,
            };
            break;
    }


    return state;
}