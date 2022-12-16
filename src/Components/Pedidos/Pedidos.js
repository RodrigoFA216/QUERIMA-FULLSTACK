import React from 'react'
import { useEffect, useState } from 'react';
import { Card, CardContent, ButtonGroup, Button, Typography } from '@mui/material';
import {useNavigate} from 'react-router-dom'

function Pedidos(){
    const [pedidos, setPedidos]= useState([]);
    const navigate=useNavigate();

    const loadClient=async()=>{
        try {
            const response= await fetch('http://localhost:4000/readpedido');
            const data=await response.json();
            setPedidos(data);
        } catch (error) {
            console.log(error);
        }
    }
    const handleDelete=async(numero)=>{
        try {
            await fetch(`http://localhost:4000/deletedetallepedido/${numero}`,{
                method: 'DELETE'
            });
            setPedidos(pedidos.filter((pedido)=>pedido.numero !== numero))
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
                    <h2>Pedidos</h2>
                    <ButtonGroup color='secondary' variant="contained" aria-label="outlined button group" style={{justifyContent: 'center', marginBottom: '.8rem'}}>
                        <Button onClick={()=>navigate(`/pedidos/crear`)}>
                            Crear Pedido</Button>
                        <Button onClick={()=>navigate(`/pedidos/buscar`)}>
                            Buscar Pedido</Button>
                    </ButtonGroup>
                </Card>
            </div>
            {
                pedidos.map(pedido=>(
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
                                        {pedido.numero}
                                    </h3>
                                </Typography>
                                <Typography>
                                    <h4>
                                        {pedido.FechaPedido}
                                    </h4>
                                    <h4>
                                        {pedido.FechaEntrega}
                                    </h4>
                                    <h4>
                                        {pedido.TipoPago}
                                    </h4>
                                    <h4>
                                        {pedido.Cliente}
                                    </h4>
                                    <h4>
                                        {pedido.Empleado}
                                    </h4>
                                    <h4>
                                        {pedido.PersonaRecibe}
                                    </h4>
                                    <h4>
                                        {pedido.CantidadPan}
                                    </h4>
                                    <h4>
                                        {pedido.Precio}
                                    </h4>
                                    <h4>
                                        {pedido.Tamaño}
                                    </h4>
                                    <h4>
                                        {pedido.TipoHarina}
                                    </h4>
                                    <h4>
                                        {pedido.Nombre}
                                    </h4>
                                </Typography>
                            </div>
                            <div>
                                <Button variant='contained' 
                                color='inherit' 
                                onClick={()=>navigate(`/pedidos/${pedido.numero}/editar`)}>
                                    Editar
                                </Button>
                                <Button 
                                variant='contained' 
                                color='secondary' 
                                onClick={()=>handleDelete(pedido.numero)}
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

export{Pedidos};