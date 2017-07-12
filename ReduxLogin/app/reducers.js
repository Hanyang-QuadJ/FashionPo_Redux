/**
 * Created by junhyungkwon on 2017. 7. 12..
 */

import {combineReducers} from 'redux'
import {
    LOGIN,
    RECEIVE_TOKEN
} from './actions'

const initialState = {
    isLoggedIn: false,
    email:'',
    password:'',
    token: ''
};

function userlogin(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            return Object.assign({}, state, {
                isLoggedIn: true,
                email: action.email,
                password: action.password,
                token: ''
            });
        case RECEIVE_TOKEN:
            return Object.assign({}, state, {
                isLoggedIn: true,
                email: action.email,
                password: action.password,
                token: action.token
            });
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    userlogin
});

export default rootReducer;