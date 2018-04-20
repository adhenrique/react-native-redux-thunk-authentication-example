import * as ActionTypes from '../constants/ActionTypes'

const initialState = {
    isLogged: false,
    hasError : false,
    isLoading: false,
    name: '',
    username: '',
    password: ''
};

export default (state = initialState, action) => {
    const { type, payload } = action;

    switch (type){
        case ActionTypes.IS_LOGGED:
            return action.isLogged;
        case ActionTypes.LOGIN_HAS_ERROR:
            return action.loginHasError;
        case ActionTypes.LOGIN_IS_LOADING:
            return action.loginIsLoading;

            // return Object.assign({}, state, {
            //     isLoading: true,
            // });
        case ActionTypes.LOGIN:
            return Object.assign({}, state, {
                isLogged: false,
                name: payload.name,
                username: payload.username,
                password: payload.password
            });
        case ActionTypes.LOGOUT:
            return Object.assign({}, state, {
                isLogged: false,
                name: '',
                username: '',
                password: ''
            });
        default:
            return state
    }
}