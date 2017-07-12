/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import {Provider} from 'react-redux'
import Application from './app/application'
import store from './app/store'


export default class ReduxLogin extends Component {
    render() {
        return (
            <Provider store={store}>
                <Application/>
            </Provider>
        );
    }
}

AppRegistry.registerComponent('ReduxLogin', () => ReduxLogin);
