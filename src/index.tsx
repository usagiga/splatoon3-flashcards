import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Router from './Router';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import LocalWeaponSetRepository from './repositories/WeaponSetRepository/LocalWeaponSetRepository';
import WeaponSetRepository from './repositories/WeaponSetRepository';

// Define repositories
const weaponSetRepository: WeaponSetRepository = new LocalWeaponSetRepository();

// Define root
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Router weaponSetRepository={weaponSetRepository} />
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
