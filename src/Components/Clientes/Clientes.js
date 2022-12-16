import React from 'react'
import { useEffect, useState } from 'react';
import { Card, CardContent, ButtonGroup, Button, Typography } from '@mui/material';
import {useNavigate} from 'react-router-dom'

function Clientes(){
    const [clients, setClients]= useState([]);
    const navigate=useNavigate();

    const loadClient=async()=>{
        try {
            const response= await fetch('http://localhost:4000/readcliente');
            const data=await response.json();
            setClients(data);
        } catch (error) {
            console.log(error);
        }
    }
    const handleDelete=async(telefono)=>{
        try {
            await fetch(`http://localhost:4000/deletecliente/${telefono}`,{
                method: 'DELETE'
            });
            setClients(clients.filter((client)=>client.telefono !== telefono))
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
                    <h2>Clientes</h2>
                    <ButtonGroup color='secondary' variant="contained" aria-label="outlined button group" style={{justifyContent: 'center', marginBottom: '.8rem'}}>
                        <Button onClick={()=>navigate(`/clientes/crear`)}>
                            Crear cliente</Button>
                        <Button onClick={()=>navigate(`/clientes/buscar`)}>
                            Buscar Cliente</Button>
                    </ButtonGroup>
                </Card>
            </div>
            {
                clients.map(client=>(
                    <Card style={{
                        marginBottom: '.9rem',
                        backgroundColor: '#689FF2',
                        color: '#white'
                    }} key={clients.id}>
                        <CardContent style={{
                            display: "flex",
                            justifyContent: "space-between"
                        }}>
                            <div>
                                <Typography style={{color:'white'}}>
                                    <h3>
                                        {client.nombre}
                                    </h3>
                                </Typography>
                                <Typography>
                                    <h4>
                                        {client.apellidoP}
                                    </h4>
                                    <h4>
                                        {client.apellidoM}
                                    </h4>
                                    <h4>
                                        {client.refdir}
                                    </h4>
                                    <h4>
                                        {client.telefono}
                                    </h4>
                                    <h4>
                                        {client.lada}
                                    </h4>
                                    <h4>
                                        {client.email}
                                    </h4>
                                    <h4>
                                        {client.direccion}
                                    </h4>
                                </Typography>
                            </div>
                            <div>
                                <Button variant='contained' 
                                color='inherit' 
                                onClick={()=>navigate(`/clientes/${client.telefono}/editar`)}>
                                    Editar
                                </Button>
                                <Button 
                                variant='contained' 
                                color='secondary' 
                                onClick={()=>handleDelete(client.telefono)}
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

export{Clientes};