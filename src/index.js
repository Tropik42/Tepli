import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {Footer} from './portials/footer'
import {Header} from './portials/header';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Header/>
    <App />
    <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
