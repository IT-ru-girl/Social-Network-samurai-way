import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {BrowserRouter} from 'react-router-dom';

import {

} from './redux/store';
import {Provider} from 'react-redux';
import store from './redux/redux-store';
// import StoreContext, {Provider} from './StoreContext';

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

store.subscribe(()=>{
    console.log(store.getState())
});
// c 47 выпуска нам эта подписка не нужна, мы хотим чтобы перерисовывалась та часть только которая изменяется а не все дерево