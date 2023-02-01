import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {BrowserRouter} from 'react-router-dom';

import store from './redux/store';
import StoreContext, {Provider} from './StoreContext';

 const rerenderEntireTree=()=>{
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App
                    // store={store} dispatch={store.dispatch.bind(store)}
                />
            </Provider>

        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree();

store.subscribe(rerenderEntireTree);