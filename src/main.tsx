import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ColorModeProvider } from './context/ColorModeContext';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <BrowserRouter basename="/Portifolio2025/"> // UTIL PARA GITHUB PAGES
  <BrowserRouter basename="/">
    <ColorModeProvider>
      <App />
    </ColorModeProvider>
  </BrowserRouter>
);
