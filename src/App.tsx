
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import CalendarioDocente from './pages/calendarioDocente'
function App() {


  return (
    <BrowserRouter basename="/Portifolio2025">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calendario-docente" element={<CalendarioDocente />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
);
}
export default App;