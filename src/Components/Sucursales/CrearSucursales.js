import React from 'react'
import {Grid, Card, Typography, CardContent, TextField, Button, CircularProgress} from '@mui/material'
import {useState, useEffect} from 'react'
import {useNavigate, useParams} from 'react-router-dom'

function CrearSucursales(){
    const navigate=useNavigate();
    const params=useParams();
    const [loading, setLoading]=useState(false)
    const [editing, setEditing] = useState(false)
    const [sucursales, setClientes]=useState({
        id: '',
        nombre: '',
        telefono: '',
        lada: '',
        Paginaweb:'',
        Direccion: '',
    })
    const handleSubmit=async(e)=>{
        e.preventDefault();
        setLoading(true);
        console.log(sucursales);
        if(editing){
            await fetch(`http://localhost:4000/updatesucursal/${sucursales.telefono}`,{
                method: 'PUT',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(sucursales),
            })
            setEditing(false)
        }else{
            const res =await fetch('http://localhost:4000/createsucursal',{
                method: 'POST',
                body: JSON.stringify(sucursales),
                headers: { 'Content-Type': 'application/json'},
            })
            const data = await res.json()
            console.log(data);
        }
        setLoading(false)
        navigate('/sucursales');
    }
    const handleChange = e =>{
        setClientes({...sucursales, [e.target.name]: e.target.value})
        // console.log(e.target.name, e.target.value);
    }
    
    const loadClient = async(telefono)=>{
        const res=await fetch(`https://localhost:4000/readcliente/${telefono}`)
        const data = await res.json()
        console.log(data);
        setClientes({id:data.id, nombre:data.nombre, telefono:data.telefono, lada:data.lada, PaginaWeb:data.PaginaWeb, Direccion:data.Direccion});
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
                                    value={sucursales.id}
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
                                    value={sucursales.nombre}
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
                                    value={sucursales.telefono}
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
                                    value={sucursales.lada}
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
                                    label='PaginaWeb' 
                                    name='PaginaWeb'
                                    value={sucursales.PaginaWeb}
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
                                    label='Direccion' 
                                    name='Direccion'
                                    value={sucursales.Direccion}
                                    sx={{
                                        display:'block',
                                        margin: '.5rem 0'
                                    }}
                                    onChange={handleChange}
                                    inputProps={{style: {color:"white"}}}
                                    InputLabelProps={{style: {color:"white"}}}
                                />
                                <Button variant='contained' color='primary' type='submit'
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

export {CrearSucursales};