import './App.css';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Productos from './Productos';
import Proveedores from './Proveedores'
import Clientes from './Clientes'
import Empleados from './Empleados'
import Usuarios from './Usuarios'
import Login from './Login'

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/productos" element={<Productos />}/>
        <Route path="/clientes" element={<Clientes/>}/>
        <Route path="/empleados" element={<Empleados/>}/>
        <Route path="/proveedores" element={<Proveedores />}/>
        <Route path="/usuarios" element={<Usuarios/>}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
