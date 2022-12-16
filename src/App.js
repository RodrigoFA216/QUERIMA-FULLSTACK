import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Container } from '@mui/material';

import {Bienvenida} from './Components/Bienvenida/Bienvenida'
import {Navbar} from './Components/Nav/Navbar'

import {Clientes} from './Components/Clientes/Clientes'
import {BuscarClientes} from './Components/Clientes/BuscarClientes'
import {CrearClientes} from './Components/Clientes/CrearClientes'

import {Empleados} from './Components/Empleados/Empleados'
import {BuscarEmpleados} from './Components/Empleados/BuscarEmpleados'
import {CrearEmpleados} from './Components/Empleados/CrearEmpleados'

import {Pedidos} from './Components/Pedidos/Pedidos'
import {BuscarPedidos} from './Components/Pedidos/BuscarPedidos'
import {CrearPedidos} from './Components/Pedidos/CrearPedidos'

import {Proveedores} from './Components/Proveedores/Proveedores'
import {BuscarProveedores} from './Components/Proveedores/BuscarProveedores'
import {CrearProveedores} from './Components/Proveedores/CrearProveedores'

import {Sucursales} from './Components/Sucursales/Sucursales'
import {BuscarSucursales} from './Components/Sucursales/BuscarSucursales'
import {CrearSucursales} from './Components/Sucursales/CrearSucursales'


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Container>
        <Routes>
          <Route path='/' element={<Bienvenida/>}/>

          <Route path='/clientes' element={<Clientes/>}/>
          <Route path='/clientes/buscar' element={<BuscarClientes/>}/>
          <Route path='/clientes/crear' element={<CrearClientes/>}/>
          <Route path='/clientes/:id/editar' element={<CrearClientes/>}/>

          <Route path='/empleados' element={<Empleados/>}/>
          <Route path='/empleados/buscar' element={<BuscarEmpleados/>}/>
          <Route path='/empleados/crear' element={<CrearEmpleados/>}/>
          <Route path='/empleados/:id/editar' element={<CrearEmpleados/>}/>

          <Route path='/pedidos' element={<Pedidos/>}/>
          <Route path='/pedidos/buscar' element={<BuscarPedidos/>}/>
          <Route path='/pedidos/crear' element={<CrearPedidos/>}/>

          <Route path='/proveedores' element={<Proveedores/>}/>
          <Route path='/proveedores/buscar' element={<BuscarProveedores/>}/>
          <Route path='/proveedores/crear' element={<CrearProveedores/>}/>

          <Route path='/sucursales' element={<Sucursales/>}/>
          <Route path='/sucursales/buscar' element={<BuscarSucursales/>}/>
          <Route path='/sucursales/crear' element={<CrearSucursales/>}/>

        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
