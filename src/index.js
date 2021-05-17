import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'; //HTML5 History api를 사용해서 현재 주소와 관련된 정보를 props로 쉽게 조회하거나 사용하게 해줌(history, match, location)
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './redux(without_book)/modules';
import {composeWithDevTools} from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
