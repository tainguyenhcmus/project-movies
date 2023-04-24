import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Layout } from './Layout.tsx';

const history = createBrowserHistory();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Layout>
      <App />
    </Layout>
  </BrowserRouter>
  ,
)
