import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import {createStore,  applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import 'bootstrap/dist/css/bootstrap.min.css';
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import allReducers from './reducers'
import {Provider} from 'react-redux'

const store = createStore(allReducers, composeWithDevTools(
    applyMiddleware(logger, thunk)))



ReactDOM.render(<Provider store={store}><App /></Provider>
, document.getElementById("root"));




