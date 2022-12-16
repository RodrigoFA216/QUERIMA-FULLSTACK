import { Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material';
import React from 'react'

function CrearClientes(){
    return(
        <>
            <h2>CrearClientes</h2>
            <Grid 
                container
                direction='column'
                alignItems='center'
                justifyContent='center'
            >
                <Grid item xs={3}>
                    <Card
                        sx={{mt:5}}
                        style={{
                            padding: '1rem',
                            backgroundColor: '#1976d2'
                        }}
                    >
                        <Typography variant='5' textAlaign='center' color='white'>
                            Crear/editar Clientes
                        </Typography>
                        <CardContent>
                            <form>
                                <TextField
                                    variant='outlined'
                                    label='Nombre'
                                    sx={{
                                        display: 'block',
                                        margin: '0.5rem 0'
                                    }}
                                    name='name1'
                                    inputProps={{style: {color: 'white'}}}
                                    InputLabelProps={{style: {color:'white'}}}
                                />
                                <TextField
                                    variant='outlined'
                                    label='Apellido Paterno'
                                    sx={{
                                        display: 'block',
                                        margin: '0.5rem 0'
                                    }}
                                    name='name2'
                                    inputProps={{style: {color: 'white'}}}
                                    InputLabelProps={{style: {color:'white'}}}
                                />
                                <TextField
                                    variant='outlined'
                                    label='Apellido Materno'
                                    sx={{
                                        display: 'block',
                                        margin: '0.5rem 0'
                                    }}
                                    name='name2'
                                    inputProps={{style: {color: 'white'}}}
                                    InputLabelProps={{style: {color:'white'}}}
                                />
                                <TextField
                                    variant='outlined'
                                    label='Telefono'
                                    sx={{
                                        display: 'block',
                                        margin: '0.5rem 0'
                                    }}
                                    name='name2'
                                    inputProps={{style: {color: 'white'}}}
                                    InputLabelProps={{style: {color:'white'}}}
                                />
                                <TextField
                                    variant='outlined'
                                    label='LADA'
                                    sx={{
                                        display: 'block',
                                        margin: '0.5rem 0'
                                    }}
                                    name='name2'
                                    inputProps={{style: {color: 'white'}}}
                                    InputLabelProps={{style: {color:'white'}}}
                                />
                                <TextField
                                    variant='outlined'
                                    label='apellidoPat'
                                    sx={{
                                        display: 'block',
                                        margin: '0.5rem 0'
                                    }}
                                    name='name2'
                                    inputProps={{style: {color: 'white'}}}
                                    InputLabelProps={{style: {color:'white'}}}
                                />
                                <Button
                                    variant='contained'
                                    color='secondary'
                                    type='submit'
                                >
                                    Guardar
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}

export {CrearClientes};