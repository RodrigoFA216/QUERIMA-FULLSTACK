import React from 'react'
import {Grid, Card, Typography, CardContent, TextField, Button, CircularProgress} from '@mui/material'
import {useState, useEffect} from 'react'
import {useNavigate, useParams} from 'react-router-dom'

function CrearClientes(){ 
    const [cliente, setCliente] = useState({
        nombre: '',
        apellidoP: '',
        apellidoM: '',
        refdir: '',
        telefono: '',
        lada: '',
        email: '',
        direccion: '',
    })
    const [loading, setLoading] = useState(false);
    const [editing, setEditing] = useState(false);
    const navigate= useNavigate();
    const params=useParams();
    const handleChange = (e) =>{
        setCliente({...cliente, [e.target.name]: e.target.value});
    }
    const handleSubmit = async(e) =>{
        e.preventDefault();
        setLoading(true);
        if(editing){
            await fetch(`http://localhost:4000/modelement/${params.id}`, {//---------------------------------------------falta esta ruta
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(cliente)
            });
        } else{
            await fetch('http://localhost:4000/createcliente', {
                method: 'POST',
                body: JSON.stringify(cliente),
                headers: {'Content-Type': 'application/json'}
            });
        }
        setLoading(false);
        navigate('/');
    }
    const loadTask= async(id)=>{
        const res=await fetch(`http://localhost:4000/readelement/${id}`)
        const data = await res.json()
        setCliente({title:data.title, descripcion:data.descripcion})
        setEditing(true);
    }
    useEffect(()=>{
        if(params.id){
            loadTask(params.id)
        }// eslint-disable-next-line
    }, [])
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
                            {editing ? "Editar cliente": "Crear nuevo cliente"}
                        </Typography>
                        <CardContent>
                            <form onSubmit={handleSubmit}>
                                <TextField
                                    variant='outlined'
                                    label='Nombre'
                                    sx={{
                                        display: 'block',
                                        margin: '0.5rem 0'
                                    }}
                                    name='prop1'
                                    value={cliente.nombre}
                                    onChange={handleChange}
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
                                    name='prop2'
                                    value={cliente.apellidoP}
                                    onChange={handleChange}
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
                                    name='prop3'
                                    value={cliente.apellidoM}
                                    onChange={handleChange}
                                    inputProps={{style: {color: 'white'}}}
                                    InputLabelProps={{style: {color:'white'}}}
                                />
                                <TextField
                                    variant='outlined'
                                    label='Refdir'
                                    sx={{
                                        display: 'block',
                                        margin: '0.5rem 0'
                                    }}
                                    name='prop4'
                                    value={cliente.refdir}
                                    onChange={handleChange}
                                    inputProps={{style: {color: 'white'}}}
                                    InputLabelProps={{style: {color:'white'}}}
                                />
                                <TextField
                                    variant='outlined'
                                    label='Teléfono'
                                    sx={{
                                        display: 'block',
                                        margin: '0.5rem 0'
                                    }}
                                    name='prop5'
                                    value={cliente.telefono}
                                    onChange={handleChange}
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
                                    name='prop6'
                                    value={cliente.lada}
                                    onChange={handleChange}
                                    inputProps={{style: {color: 'white'}}}
                                    InputLabelProps={{style: {color:'white'}}}
                                />
                                <TextField
                                    variant='outlined'
                                    label='Email'
                                    sx={{
                                        display: 'block',
                                        margin: '0.5rem 0'
                                    }}
                                    name='prop6'
                                    value={cliente.email}
                                    onChange={handleChange}
                                    inputProps={{style: {color: 'white'}}}
                                    InputLabelProps={{style: {color:'white'}}}
                                />
                                <TextField
                                    variant='outlined'
                                    label='Dirección'
                                    sx={{
                                        display: 'block',
                                        margin: '0.5rem 0'
                                    }}
                                    name='prop6'
                                    value={cliente.direccion}
                                    onChange={handleChange}
                                    inputProps={{style: {color: 'white'}}}
                                    InputLabelProps={{style: {color:'white'}}}
                                />
                                <Button
                                    variant='contained'
                                    color='secondary'
                                    type='submit'
                                    disabled={!cliente.nombre || !cliente.apellidoP || !cliente.apellidoM || !cliente.refdir || !cliente.telefono || !cliente.lada || !cliente.email || !cliente.direccion}>
                                    {loading ? <CircularProgress
                                        color='inherit'
                                        size={24}
                                    />: 'Save'}
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