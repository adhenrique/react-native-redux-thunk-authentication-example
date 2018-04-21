import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';

import cfgStore, { persistor } from './store/configureStore';

import Root from './containers'

const store = cfgStore();

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Root/>
                </PersistGate>
            </Provider>
        )
    }
}
