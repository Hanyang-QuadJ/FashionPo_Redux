/**
 * Created by junhyungkwon on 2017. 7. 12..
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import Button from 'react-native-button';
import { logout } from './actions';

class Secured extends Component {
    userLogout(e) {
        this.props.onLogout();
        e.preventDefault();
    }

    render() {
        return (
            <View>
                <Text>
                    {`Welcome ${this.props.email}`}
                </Text>
                <Text>
                    received token: {this.props.token}
                </Text>
                <View style={{margin: 20}}/>
                <Button onPress={(e) => this.userLogout(e)}>
                    logout
                </Button>
            </View>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        email: state.userlogin.email,
        token: state.userlogin.token
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLogout: () => {dispatch(logout());}
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Secured);