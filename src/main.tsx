import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import './index.css';
import { setupCSP } from './utils/csp.ts';

// Setup dynamic CSP based on environment
setupCSP();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
    <App />
    </HelmetProvider>
  </StrictMode>
);
