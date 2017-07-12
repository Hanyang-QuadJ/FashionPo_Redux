/**
 * Created by junhyungkwon on 2017. 7. 12..
 */

import fetchival from 'fetchival'

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const RECEIVE_TOKEN = 'RECEIVE_TOKEN';
export const REGISTER = 'REGISTER';

import {AsyncStorage} from 'react-native'

export const login = (email, password) => {
    return {
        type: LOGIN,
        email,
        password
    }
};

function receiveToken(token) {
    return {
        type: RECEIVE_TOKEN,
        token,
        receivedAt: Date.now()
    }
}

export const fetchLogin = (email, password) => {
    return function (dispatch) {
        dispatch(login(email, password));
        return fetch('http://54.162.160.91/api/auth/login', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        .then(response => response.json())
        .then(json => {
            dispatch(receiveToken(json.token));
        })
    }
};
