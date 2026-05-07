import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import Componente1 from './components/Componente1.jsx';
import Componente2 from './components/Componente2.jsx';
import Componente3 from './components/Componente3.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Componente1 />
    <Componente2 />
    <Componente3 />
  </StrictMode>,
)
