import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from "react-redux";
import {createStore} from "redux";
import RootReducer from "./reducers/Root";

const reactStore = createStore(RootReducer);

ReactDOM.render(<Provider store={reactStore}>
    <App/>
</Provider>, document.getElementById('root'));
registerServiceWorker();
