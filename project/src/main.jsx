import React from 'react';
import { createRoot } from 'react-dom/client';
import AppRouter from './router.jsx';
import './styles/global.css';
import './styles/utils.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
);
