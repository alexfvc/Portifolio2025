import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import App from './App';
import './index.css';

const theme = createTheme();

ReactDOM.createRoot(document.getElementById('root')!).render(
<BrowserRouter basename="/Portifolio2025/">
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
</BrowserRouter>
);

