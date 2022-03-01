import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {Provider} from "react-redux";
import {store} from "./redux/store";
import { ImportantDataProvider } from './components/important-data-provider/important-data-provider';
import {BrowserRouter} from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <BrowserRouter>
            <ImportantDataProvider>
                  <App />
            </ImportantDataProvider>
          </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
