import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';

import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
//import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { PersistGate } from 'redux-persist/lib/integration/react';

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist:['users']
    //stateReconciler: autoMergeLevel2
};

const pReducer = persistReducer(persistConfig, rootReducer);



const store = createStore(
    pReducer, //buraso rootReducerdu
    composeWithDevTools(applyMiddleware(thunk))
);

export const persistor = persistStore(store);

store.subscribe( () => {
});

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter>

                <App />

    </BrowserRouter>
        </PersistGate>
    </Provider>
    ,document.getElementById('root'));
registerServiceWorker();
