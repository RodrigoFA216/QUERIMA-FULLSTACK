import React from 'react'
import { useEffect, useState } from 'react';
import { Card, CardContent, ButtonGroup, Button, Typography } from '@mui/material';
import {useNavigate} from 'react-router-dom'

function Empleados(){
    const [empleados, setEmpleados]= useState([]);
    const navigate=useNavigate();

    const loadEmpleados=async()=>{
        try {
            const response= await fetch('http://localhost:4000/readempleado');
            const data=await response.json();
            setEmpleados(data);
        } catch (error) {
            console.log(error);
        }
    }
    const handleDelete=async(telefono)=>{
        try {
            await fetch(`http://localhost:4000/deleteempleado/${telefono}`,{
                method: 'DELETE'
            });
            setEmpleados(empleados.filter((empleado)=>empleado.telefono !== telefono))
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        loadEmpleados();
    },[])
    return(
        <>
            <div style={{margin: '1rem', alignItems: 'center', textAlign: 'center'}}>
                <Card>
                    <h2>Empleados</h2>
                    <ButtonGroup color='secondary' variant="contained" aria-label="outlined button group" style={{justifyContent: 'center', marginBottom: '.8rem'}}>
                        <Button onClick={()=>navigate(`/empleados/crear`)}>
                            Crear empleado</Button>
                        <Button onClick={()=>navigate(`/empleados/buscar`)}>
                            Buscar empleado</Button>
                    </ButtonGroup>
                </Card>
            </div>
            {
                empleados.map(empleado=>(
                    <Card style={{
                        marginBottom: '.9rem',
                        backgroundColor: '#689FF2',
                        color: '#white'
                    }}>
                        <CardContent style={{
                            display: "flex",
                            justifyContent: "space-between"
                        }}>
                            <div>
                                <Typography style={{color:'white'}}>
                                    <h3>
                                        {empleado.nombre}
                                    </h3>
                                </Typography>
                                <Typography>
                                    <h4>
                                        {empleado.apellidoP}
                                    </h4>
                                    <h4>
                                        {empleado.apellidoM}
                                    </h4>
                                    <h4>
                                        {empleado.telefono}
                                    </h4>
                                    <h4>
                                        {empleado.lada}
                                    </h4>
                                    <h4>
                                        {empleado.email}
                                    </h4>
                                    <h4>
                                        {empleado.direccion}
                                    </h4>
                                    <h4>
                                        {empleado.sucursal}
                                    </h4>
                                </Typography>
                            </div>
                            <div>
                                <Button variant='contained' 
                                color='inherit' 
                                onClick={()=>navigate(`/empleados/${empleado.id}/editar`)}>
                                    Editar
                                </Button>
                                <Button 
                                variant='contained' 
                                color='secondary' 
                                onClick={()=>handleDelete(empleado.telefono)}
                                style={{margin:'.6rem'}}
                                >
                                    Eliminar
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))
            }
        </>
    )
}

export{Empleados};