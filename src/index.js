import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {AuthContextProvider} from "./context/AuthContext/AuthContext"
import {CategoryContextProvider} from "./context/CategoryContext/CategoryContext"
import {ProductContextProvider} from "./context/ProductContext/ProductContext"
import {BrowserRouter as Router} from "react-router-dom"
import { AppProvider } from './pages/Cart/context';


ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <CategoryContextProvider>
        <ProductContextProvider>
          <AppProvider>

         
          <Router>
        <App />
        </Router >
        </AppProvider>
        </ProductContextProvider>
      </CategoryContextProvider>

      </AuthContextProvider>
   
  </React.StrictMode>,
  document.getElementById('root')
);


