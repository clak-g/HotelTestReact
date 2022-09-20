import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

import { Rutas } from './Routes/Ruta';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    < BrowserRouter>
        <Rutas/>
    </ BrowserRouter>
  </React.StrictMode>
);

// or send to an analytics .  more: https://bit.ly/CRA-vitals

