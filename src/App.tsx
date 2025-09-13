
import { Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import CalendarioDocente from './pages/calendarioDocente'
function App() {


  return (
    <Routes>
      <Route path='/' element={<Home />}/>  
      <Route path='/Portifolio2025/calendario-docente' element={<CalendarioDocente/>}/>
    </Routes>
  );
}

export default App
