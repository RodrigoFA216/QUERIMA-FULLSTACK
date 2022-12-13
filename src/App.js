import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Container } from '@mui/material';

import {Bienvenida} from './Components/Bienvenida/Bienvenida'
import {Clientes} from './Components/Clientes/Clientes'
import {Empleados} from './Components/Empleados/Empleados'
import {Navbar} from './Components/Nav/Navbar'
import {Pedidos} from './Components/Pedidos/Pedidos'
import {Proveedores} from './Components/Proveedores/Proveedores'
import {Sucursales} from './Components/Sucursales/Sucursales'


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Container>
        <Routes>
          <Route path='/' element={<Bienvenida/>}/>
          <Route path='/clientes' element={<Clientes/>}/>
          <Route path='/empleados' element={<Empleados/>}/>
          <Route path='/pedidos' element={<Pedidos/>}/>
          <Route path='/proveedores' element={<Proveedores/>}/>
          <Route path='/sucursales' element={<Sucursales/>}/>
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
