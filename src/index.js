import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import store from "./redux/store";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const renderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>, 
        document.getElementById('root')
    );
}

renderEntireTree(store.getState());
store.subscribe(renderEntireTree);
serviceWorker.unregister();
