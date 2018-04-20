import React, { Component } from 'react';
import { Provider } from 'react-redux'

import cfgStore from './store/configureStore';

import Root from './containers'

const store = cfgStore();

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Root/>
            </Provider>
        )
    }
}