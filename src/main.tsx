import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { installLegacyUrlNormalizer } from './normalizeLegacyUrl';
import './index.css';

installLegacyUrlNormalizer();

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
