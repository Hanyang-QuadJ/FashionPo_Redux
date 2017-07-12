/**
 * Created by junhyungkwon on 2017. 7. 12..
 */

import React, {Component} from 'react'
import {connect} from 'react-redux'
import Login from './login'
import Secured from './secured'

class Application extends Component {
    render() {
        if (this.props.isLoggedIn) {
            return <Secured/>;
        } else {
            return <Login/>;
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isLoggedIn: state.userlogin.isLoggedIn
    }
};

export default connect(mapStateToProps)(Application);
