import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import CalendarioDocente from './pages/calendarioDocente'
import { useState } from 'react';

function App() {
  const [filters, setFilters] = useState({ days: [] as string[], bimesters: [] as string[] });

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route 
        path="/calendario-docente" 
        element={<CalendarioDocente filters={filters} setFilters={setFilters} />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
