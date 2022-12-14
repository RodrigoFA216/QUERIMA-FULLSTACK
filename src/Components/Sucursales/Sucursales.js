import React from 'react'
import { Card, CardContent, ButtonGroup, Button } from '@mui/material';
import {useNavigate} from 'react-router-dom'

function Sucursales(){
    const navigate=useNavigate();
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
                        <h3>Sucursal dummy</h3>
                    </div>
                    <div>
                        <Button 
                                variant='contained' 
                                color='inherit' 
                                // onClick={()=>navigate(`/tasks/${task.id}/edit`)}
                                >
                            Editar
                        </Button>
                        <Button 
                                variant='contained' 
                                color='secondary' 
                                // onClick={()=>handleDelete(task.id)}
                                style={{margin:'.6rem'}}
                                >
                            Eliminar
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}

export{Sucursales};