import React from 'react'
import {Grid, Card, Typography, CardContent, TextField, Button, CircularProgress} from '@mui/material'
import {useState, useEffect} from 'react'
import {useNavigate, useParams} from 'react-router-dom'

function CrearProveedores(){
    const navigate=useNavigate();
    const params=useParams();
    const [loading, setLoading]=useState(false)
    const [editing, setEditing] = useState(false)
    const [proveedores, setProveedores]=useState({
        id: '',
        nombre: '',
        apellidoP: '',
        apellidoM: '',
        telefono: '',
        lada: '',
        email: '',
        NombreEmpresa:'',
        Direccion: '',
    })
    const handleSubmit=async(e)=>{
        e.preventDefault();
        setLoading(true);
        console.log(proveedores);
        if(editing){
            await fetch(`http://localhost:4000/updateproveedor/${proveedores.telefono}`,{
                method: 'PUT',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(proveedores),
            })
            setEditing(false)
        }else{
            const res =await fetch('http://localhost:4000/createproveedor',{
                method: 'POST',
                body: JSON.stringify(proveedores),
                headers: { 'Content-Type': 'application/json'},
            })
            const data = await res.json()
            console.log(data);
        }
        setLoading(false)
        navigate('/proveedores');
    }
    const handleChange = e =>{
        setProveedores({...proveedores, [e.target.name]: e.target.value})
        // console.log(e.target.name, e.target.value);
    }
    
    const loadClient = async(telefono)=>{
        const res=await fetch(`https://localhost:4000/readcliente/${telefono}`)
        const data = await res.json()
        console.log(data);
        setProveedores({id:data.id, nombre:data.nombre, apellidoP:data.apellidoP, apellidoM:data.apellidoM, telefono:data.telefono, lada:data.lada, email:data.email, NombreEmpresa:data.NombreEmpresa, Direccion:data.Direccion});
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
                                    value={proveedores.id}
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
                                    value={proveedores.nombre}
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
                                    value={proveedores.apellidoP}
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
                                    value={proveedores.apellidoM}
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
                                    value={proveedores.telefono}
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
                                    value={proveedores.lada}
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
                                    value={proveedores.email}
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
                                    label='NombreEmpresa' 
                                    name='NombreEmpresa'
                                    value={proveedores.NombreEmpresa}
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
                                    value={proveedores.Direccion}
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

export {CrearProveedores};