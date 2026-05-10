import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import AppRouter from './app/AppRouter';
import './styles/index.css';

createRoot(document.getElementById('root')!).render(
  <HelmetProvider>
    <AppRouter />
  </HelmetProvider>,
);
