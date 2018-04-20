import React, { Component } from 'react';
import { Router, Scene } from "react-native-router-flux";
import { connect } from "react-redux";
import { AsyncStorage, Text } from "react-native";

import Login from './../scenes/Login';
import Main from '../scenes/Main';

const RouterWithRedux = connect()(Router);

class Root extends Component{
    constructor(props){
        super(props);

        this.state = {
            token: null
        }
    }

    componentDidMount() {
        AsyncStorage.getItem('token').then((token) => {
            // this.setState({ token: token !== null})
        });
    }

    render(){
        let { isLogged } = this.props.login;
        let { token } = this.state;
        return(
            <RouterWithRedux>
                <Scene key='root'>
                    <Scene
                        component={Login}
                        initial={!isLogged}
                        hideNavBar={true}
                        key='Login'
                        title='Login'
                    />
                    <Scene
                        component={Main}
                        hideNavBar={true}
                        key='Main'
                        title='Main'
                    />
                </Scene>
            </RouterWithRedux>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        login: state.login
    }
};

export default connect(mapStateToProps)(Root)
