/**
 * Created by junhyungkwon on 2017. 7. 12..
 */

import React, {Component } from 'react'
import {connect} from 'react-redux'
import Button from 'react-native-button'
import {Text, TextInput, View} from 'react-native'
import {fetchLogin, login} from './actions'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            route: 'Login',
            email: '',
            password: ''
        };
    }

    userLogin (e) {
        this.props.onLogin(this.state.email, this.state.password);
        e.preventDefault();
    }

    toggleRoute (e) {
        let alt = (this.state.route === 'Login') ? 'SignUp' : 'Login';
        this.setState({ route: alt });
        e.preventDefault();
    }

    render() {
        let alt = (this.state.route === 'Login') ? 'SignUp' : 'Login';
        return (
            <View>
                <Text>user email</Text>
                <TextInput placeholder='email'
                           autoCapitalize='none'
                           autoFocus={true}
                           keyboardType='email-address'
                           value={this.state.email}
                           onChangeText={(text) => this.setState({ email: text })}/>
                <Text>password</Text>
                <TextInput placeholder='password'
                           autoCapitalize='none'
                           autoCorrect={false}
                           secureTextEntry={true}
                           value={this.state.password}
                           onChangeText={(text) => this.setState({ password: text })}/>
                <View style={{ margin: 7 }}/>
                <Button onPress={(e) => this.userLogin(e)}>
                    {this.state.route}
                </Button>
            </View>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isLoggedIn: state.userlogin.isLoggedIn
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (email, password) => { dispatch(fetchLogin(email, password)); }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);