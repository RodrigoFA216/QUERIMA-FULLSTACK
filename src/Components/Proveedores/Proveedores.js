import React from 'react'
import { useEffect, useState } from 'react';
import { Card, CardContent, ButtonGroup, Button, Typography } from '@mui/material';
import {useNavigate} from 'react-router-dom'

function Proveedores(){
    const [proveedores, setPedidos]= useState([]);
    const navigate=useNavigate();

    const loadClient=async()=>{
        try {
            const response= await fetch('http://localhost:4000/readproveedor');
            const data=await response.json();
            setPedidos(data);
        } catch (error) {
            console.log(error);
        }
    }
    const handleDelete=async(telefono)=>{
        try {
            await fetch(`http://localhost:4000/deleteproveedor/${telefono}`,{
                method: 'DELETE'
            });
            setPedidos(proveedores.filter((proveedor)=>proveedor.numero !== telefono))
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
                    <h2>Proveedores</h2>
                    <ButtonGroup color='secondary' variant="contained" aria-label="outlined button group" style={{justifyContent: 'center', marginBottom: '.8rem'}}>
                        <Button onClick={()=>navigate(`/proveedores/crear`)}>
                            Crear Proveedor</Button>
                        <Button onClick={()=>navigate(`/proveedores/buscar`)}>
                            Buscar Proveedor</Button>
                    </ButtonGroup>
                </Card>
            </div>
            {
                proveedores.map(proveedor=>(
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
                                        {proveedor.nombre}
                                    </h3>
                                </Typography>
                                <Typography>
                                    <h4>
                                        {proveedor.apellidoP}
                                    </h4>
                                    <h4>
                                        {proveedor.apellidoM}
                                    </h4>
                                    <h4>
                                        {proveedor.telefono}
                                    </h4>
                                    <h4>
                                        {proveedor.lada}
                                    </h4>
                                    <h4>
                                        {proveedor.email}
                                    </h4>
                                    <h4>
                                        {proveedor.NombreEmpresa}
                                    </h4>
                                    <h4>
                                        {proveedor.Direccion}
                                    </h4>
                                </Typography>
                            </div>
                            <div>
                                <Button variant='contained' 
                                color='inherit' 
                                onClick={()=>navigate(`/proveedores/${proveedor.telefono}/editar`)}>
                                    Editar
                                </Button>
                                <Button 
                                variant='contained' 
                                color='secondary' 
                                onClick={()=>handleDelete(proveedor.numero)}
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

export{Proveedores};