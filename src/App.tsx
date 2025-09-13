
import { Route, Routes, Navigate, BrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import CalendarioDocente from './pages/calendarioDocente'
function App() {


  return (
    <BrowserRouter basename="/Portifolio2025">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calendario-docente" element={<CalendarioDocente />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
