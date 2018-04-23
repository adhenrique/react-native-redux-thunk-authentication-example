import * as ActionTypes from '../constants/ActionTypes';
import { Actions } from 'react-native-router-flux';
import { AsyncStorage } from 'react-native';

const isLogged = (bool) => {
    return {
        type: ActionTypes.IS_LOGGED,
        isLogged: bool
    }
};

const loginHasError = (bool) => {
    return {
        type: ActionTypes.LOGIN_HAS_ERROR,
        hasError: bool
    }
};

const loginIsLoading = (bool) => {
    return {
        type: ActionTypes.LOGIN_IS_LOADING,
        isLoading: bool
    }
};

const setAsyncStorage = () => {

};

const login = (username, password) => {
    // console.log('user', username);
    // console.log('pass', password);
    return (dispatch) => {
        // seta que está sendo executada uma call
        dispatch(loginIsLoading(true));

        // se os campos estiverem vazios...
        if(!username || !password){
            // seta que há erros
            dispatch(loginHasError(true));
            // cancela execução de call
            dispatch(loginIsLoading(false));

            return;
        }

        fetch('http://192.168.0.115:8080/api/user', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username: username, password: password})
        })
            .then((res) => res.json())
            .then(res => {
                // cancela execução de call
                dispatch(loginIsLoading(false));

                // console.log(res);
                if(res.connected){
                    dispatch(loginHasError(false));
                    dispatch(isLogged(true));
                    AsyncStorage.setItem('token', 'asdasdasd123'); // example
                    Actions.Main();
                }
            })
            .catch((e) => {
                // console.warn(e);
                dispatch(loginHasError(true));
            });
    }
};

const logout = () => {
    AsyncStorage.removeItem('token');
    Actions.Login();
    return {
        type: ActionTypes.LOGOUT
    }
};

export default {
    isLogged,
    loginHasError,
    loginIsLoading,
    login,
    logout
}
