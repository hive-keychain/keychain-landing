import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { installLegacyUrlNormalizer } from './normalizeLegacyUrl';
import './index.css';

installLegacyUrlNormalizer();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
