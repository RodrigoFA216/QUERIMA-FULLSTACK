import React from 'react'
import { useEffect, useState } from 'react';
import { Card, CardContent, ButtonGroup, Button, Typography } from '@mui/material';
import {useNavigate} from 'react-router-dom'

function Sucursales(){
    const [sucursales, setSucursales]= useState([]);
    const navigate=useNavigate();
    const loadClient=async()=>{
        try {
            const response= await fetch('http://localhost:4000/readsucursales');
            const data=await response.json();
            setSucursales(data);
        } catch (error) {
            console.log(error);
        }
    }
    const handleDelete=async(telefono)=>{
        try {
            await fetch(`http://localhost:4000/deletesucursal/${telefono}`,{
                method: 'DELETE'
            });
            setSucursales(sucursales.filter((sucursal)=>sucursal.telefono !== telefono))
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        loadClient();
    },[])
    return(
        <>
            <div style={{margin: '1rem', alignItems: 'center', textAlign: 'center'}}>
                <Card>
                    <h2>Sucursales</h2>
                    <ButtonGroup color='secondary' variant="contained" aria-label="outlined button group" style={{justifyContent: 'center', marginBottom: '.8rem'}}>
                        <Button onClick={()=>navigate(`/sucursales/crear`)}>
                            Crear Sucursal</Button>
                        <Button onClick={()=>navigate(`/sucursales/buscar`)}>
                            Buscar Sucursal</Button>
                    </ButtonGroup>
                </Card>
            </div>
            {
                sucursales.map(sucursal=>(
                    <Card style={{
                        marginBottom: '.9rem',
                        backgroundColor: '#689FF2',
                        color: '#white'
                    }} key={sucursales.id}>
                        <CardContent style={{
                            display: "flex",
                            justifyContent: "space-between"
                        }}>
                            <div>
                                <Typography style={{color:'white'}}>
                                    <h3>
                                        {sucursal.nombre}
                                    </h3>
                                </Typography>
                                <Typography>
                                    <h4>
                                        {sucursal.telefono}
                                    </h4>
                                    <h4>
                                        {sucursal.lada}
                                    </h4>
                                    <h4>
                                        {sucursal.PaginaWeb}
                                    </h4>
                                    <h4>
                                        {sucursal.Direccion}
                                    </h4>
                                </Typography>
                            </div>
                            <div>
                                <Button variant='contained' 
                                color='inherit' 
                                onClick={()=>navigate(`/clientes/${sucursal.telefono}/editar`)}>
                                    Editar
                                </Button>
                                <Button 
                                variant='contained' 
                                color='secondary' 
                                onClick={()=>handleDelete(sucursal.telefono)}
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

export{Sucursales};