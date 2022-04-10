import React from 'react';
import {createRoot} from "react-dom/client";
import {BrowserRouter} from "react-router-dom"
import './index.css';
import App from './App';
import { Provider } from './Provider/provider';



const root = createRoot(document.getElementById('root')!);


root.render( 
<React.StrictMode>
  <BrowserRouter>
  <Provider>
  <App />
  </Provider>
  </BrowserRouter>
</React.StrictMode>,)
 
  


