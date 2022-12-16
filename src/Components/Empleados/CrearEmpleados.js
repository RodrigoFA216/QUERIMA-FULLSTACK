import React from 'react'
import {Grid, Card, Typography, CardContent, TextField, Button, CircularProgress} from '@mui/material'
import {useState, useEffect} from 'react'
import {useNavigate, useParams} from 'react-router-dom'

function CrearEmpleados(){
    const navigate=useNavigate();
    const params=useParams();
    const [loading, setLoading]=useState(false)
    const [editing, setEditing] = useState(false)
    const [empleados, setEmpleados]=useState({
        id: '',
        nombre: '',
        apellidoP: '',
        apellidoM: '',
        telefono: '',
        lada: '',
        email: '',
        direccion: '',
        sucursal: '',
    })
    const handleSubmit=async(e)=>{
        e.preventDefault();
        setLoading(true);
        console.log(empleados);
        if(editing){
            await fetch(`http://localhost:4000/updateempleado/${empleados.telefono}`,{
                method: 'PUT',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(empleados),
            })
            setEditing(false)
        }else{
            const res =await fetch('http://localhost:4000/createempleado',{
                method: 'POST',
                body: JSON.stringify(empleados),
                headers: { 'Content-Type': 'application/json'},
            })
            const data = await res.json()
            console.log(data);
        }
        setLoading(false)
        navigate('/empleados');
    }
    const handleChange = e =>{
        setEmpleados({...empleados, [e.target.name]: e.target.value})
        // console.log(e.target.name, e.target.value);
    }
    
    const loadClient = async(telefono)=>{
        const res=await fetch(`https://localhost:4000/readcliente/${telefono}`)
        const data = await res.json()
        console.log(data);
        setEmpleados({id:data.id, nombre:data.nombre, apellidoP:data.apellidoP, apellidoM:data.apellidoM, telefono:data.telefono, lada:data.lada, email:data.email, direccion:data.direccion, sucursal:data.sucursal});
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
                                    value={empleados.id}
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
                                    value={empleados.nombre}
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
                                    value={empleados.apellidoP}
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
                                    value={empleados.apellidoM}
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
                                    label='sucursal' 
                                    name='sucursal'
                                    value={empleados.sucursal}
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
                                    value={empleados.telefono}
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
                                    value={empleados.lada}
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
                                    value={empleados.email}
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
                                    value={empleados.direccion}
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

export {CrearEmpleados};