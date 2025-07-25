
import { Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import Home from './pages/home'

function App() {


  return (
    <Routes>
      {/* tela inicial*/  }
      <Route path='/' element={<Home />}/>
      {/* qualquer URL desconhecida → redireciona para a tela inicial */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App
