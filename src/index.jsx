import React from 'react';
import ReactDOM from 'react-dom/client';
import { Menu } from './components/Menu';
import './styles.css';

import { Home } from './templates/Home';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Menu/>
    <Home />
  </React.StrictMode>
);


