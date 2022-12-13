import { AppBar, Toolbar, Typography, Box, Container, ButtonGroup, Button } from '@mui/material'
import React from 'react'
import {Link, useNavigate} from 'react-router-dom'

function Navbar(){
    const navigate=useNavigate();
    return(
        <Box sx={{flexGrow: 1}}>
            <AppBar position='static'>
                <Container>
                    <Toolbar>
                        {/* Aqui va el logo */}
                        <Typography sx={{flexGrow: 1}}>
                            <Link to="/" style={{textDecoration: 'none', color: 'black', fontWeight: '30px'}}>
                                <h2>
                                    QUERIMA
                                </h2>
                            </Link>
                        </Typography>
                        <ButtonGroup variant="contained" color='secondary' aria-label="outlined button group">
                            <Button onClick={()=>navigate('/clientes')}>
                                Clientes
                            </Button>
                            <Button onClick={()=>navigate('/empleados')}>
                                Empleados
                            </Button>
                            <Button onClick={()=>navigate('/pedidos')}>
                                Pedidos
                            </Button>
                            <Button onClick={()=>navigate('/proveedores')}>
                                Proveedores
                            </Button>
                            <Button onClick={()=>navigate('/sucursales')}>
                                Sucursales
                            </Button>
                        </ButtonGroup>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    )
}

export {Navbar}