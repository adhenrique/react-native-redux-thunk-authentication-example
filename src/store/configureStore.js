import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import reducers from './../reducers';

const persistConfig = {
    key: 'root',
    storage,
};

// const cfgStore = () => {
//     return createStore(
//         reducers,
//         applyMiddleware(thunk)
//     )
// };
//
// export default cfgStore;

// const persistedReducer = persistReducer(persistConfig, rootReducer);
//
// export default () => {
//     let store = createStore(persistedReducer);
//     let persistor = persistStore(store);
//     return { store, persistor }
// }

const cfgStore = () => {
    const middlewares = [thunk];
    const enhancer = applyMiddleware(...middlewares);
    const persistedReducer = persistReducer(persistConfig, reducers);

    // create store
    return createStore(persistedReducer, enhancer);
};

export const persistor = persistStore(cfgStore());

export default cfgStore;