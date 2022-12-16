import React from 'react'
import {Grid, Card, Typography, CardContent, TextField, Button, CircularProgress} from '@mui/material'
import {useState, useEffect} from 'react'
import {useNavigate, useParams} from 'react-router-dom'

function CrearClientes(){ 
    const navigate=useNavigate();
    const params=useParams();
    const [loading, setLoading]=useState(false)
    const [editing, setEditing] = useState(false)
    const [clientes, setClientes]=useState({
        id: '',
        nombre: '',
        apellidoP: '',
        apellidoM: '',
        refdir: '',
        telefono: '',
        lada: '',
        email: '',
        direccion: '',
    })
    const handleSubmit=async(e)=>{
        e.preventDefault();
        setLoading(true);
        console.log(clientes);
        if(editing){
            await fetch(`http://localhost:4000/updatecliente/${params.id}`,{
                method: 'PUT',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(clientes),
            })
            setEditing(false)
        }else{
            const res =await fetch('http://localhost:4000/createcliente',{
                method: 'POST',
                body: JSON.stringify(clientes),
                headers: { 'Content-Type': 'application/json'},
            })
            const data = await res.json()
            console.log(data);
        }
        setLoading(false)
        navigate('/clientes');
    }
    const handleChange = e =>{
        setClientes({...clientes, [e.target.name]: e.target.value})
        // console.log(e.target.name, e.target.value);
    }
    
    const loadClient = async(telefono)=>{
        const res=await fetch(`https://localhost:4000/readcliente/${telefono}`)
        const data = await res.json()
        console.log(data);
        setClientes({id:data.id, nombre:data.nombre, apellidoP:data.apellidoP, apellidoM:data.apellidoM, refdir:data.refdir, telefono:data.telefono, lada:data.lada, email:data.email, direccion:data.direccion});
        setEditing(true)
    }
    useEffect(()=>{
        if(params.telefono){
            console.log(params);
            setEditing(true);
            loadClient(params.telefono);
        }
    },[params.telefono])
    return(
        <>
            <Grid 
                container
                direction='column'
                alignItems='center'
                justifyContent='center'
            >
                <Grid item xs={4}>
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
                                    variant='filled'
                                    label='id'
                                    name='id'
                                    value={clientes.id}
                                    sx={{
                                        display:'block',
                                        margin: '.5rem 0'
                                    }}
                                    onChange={handleChange}
                                    inputProps={{style: {color:"white"}}}
                                    InputLabelProps={{style: {color:"white"}}}
                                />
                                <TextField
                                    variant='filled'
                                    label='nombre'
                                    name='nombre'
                                    value={clientes.nombre}
                                    sx={{
                                        display:'block',
                                        margin: '.5rem 0'
                                    }}
                                    onChange={handleChange}
                                    inputProps={{style: {color:"white"}}}
                                    InputLabelProps={{style: {color:"white"}}}
                                />
                                <TextField
                                    variant='filled'
                                    label='apellidoP'
                                    name='apellidoP'
                                    value={clientes.apellidoP}
                                    sx={{
                                        display:'block',
                                        margin: '.5rem 0'
                                    }}
                                    onChange={handleChange}
                                    inputProps={{style: {color:"white"}}}
                                    InputLabelProps={{style: {color:"white"}}}
                                />
                                <TextField
                                    variant='filled'
                                    label='apellidoM'
                                    name='apellidoM'
                                    value={clientes.apellidoM}
                                    sx={{
                                        display:'block',
                                        margin: '.5rem 0'
                                    }}
                                    onChange={handleChange}
                                    inputProps={{style: {color:"white"}}}
                                    InputLabelProps={{style: {color:"white"}}}
                                />
                                <TextField
                                    variant='filled'
                                    label='refdir' 
                                    name='refdir'
                                    value={clientes.refdir}
                                    sx={{
                                        display:'block',
                                        margin: '.5rem 0'
                                    }}
                                    onChange={handleChange}
                                    inputProps={{style: {color:"white"}}}
                                    InputLabelProps={{style: {color:"white"}}}
                                />
                                <TextField
                                    variant='filled'
                                    label='telefono' 
                                    name='telefono'
                                    value={clientes.telefono}
                                    sx={{
                                        display:'block',
                                        margin: '.5rem 0'
                                    }}
                                    onChange={handleChange}
                                    inputProps={{style: {color:"white"}}}
                                    InputLabelProps={{style: {color:"white"}}}
                                />
                                <TextField
                                    variant='filled'
                                    label='lada' 
                                    name='lada'
                                    value={clientes.lada}
                                    sx={{
                                        display:'block',
                                        margin: '.5rem 0'
                                    }}
                                    onChange={handleChange}
                                    inputProps={{style: {color:"white"}}}
                                    InputLabelProps={{style: {color:"white"}}}
                                />
                                <TextField
                                    variant='filled'
                                    label='email' 
                                    name='email'
                                    value={clientes.email}
                                    sx={{
                                        display:'block',
                                        margin: '.5rem 0'
                                    }}
                                    onChange={handleChange}
                                    inputProps={{style: {color:"white"}}}
                                    InputLabelProps={{style: {color:"white"}}}
                                />
                                <TextField
                                    variant='filled'
                                    label='direccion' 
                                    name='direccion'
                                    value={clientes.direccion}
                                    sx={{
                                        display:'block',
                                        margin: '.5rem 0'
                                    }}
                                    onChange={handleChange}
                                    inputProps={{style: {color:"white"}}}
                                    InputLabelProps={{style: {color:"white"}}}
                                />
                                <Button variant='contained' color='primary' type='submit'
                                    disabled={!clientes.id || !clientes.nombre || !clientes.apellidoP || !clientes.apellidoM || !clientes.refdir || !clientes.telefono || !clientes.lada || !clientes.email || !clientes.direccion }
                                >
                                    {loading ? (<CircularProgress color='inherit' size={24}/>): ("Save")}
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