import React from 'react'
import {Grid, Card, Typography, CardContent, TextField, Button, CircularProgress} from '@mui/material'
import {useState, useEffect} from 'react'
import {useNavigate, useParams} from 'react-router-dom'

function CrearPedidos(){
    const navigate=useNavigate();
    const params=useParams();
    const [loading, setLoading]=useState(false)
    const [editing, setEditing] = useState(false)
    const [pedidos, setPedidos]=useState({
        id: '',
        numeropedido: '',
        FechaPedido: '',
        FechaEntrega: '',
        TipoPago: '',
        Cliente: '',
        Empleado: '',
        PersonaRecibe: '',
        CantidadPan: '',
        Precio: '',
        Tamaño: '',
        TipoHarina: '',
        Nombre: '',
    })
    const handleSubmit=async(e)=>{
        e.preventDefault();
        setLoading(true);
        console.log(pedidos);
        if(editing){
            await fetch(`http://localhost:4000/updatecliente/${pedidos.numero}`,{
                method: 'PUT',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(pedidos),
            })
            setEditing(false)
        }else{
            const res =await fetch('http://localhost:4000/createdetallepedido',{
                method: 'POST',
                body: JSON.stringify(pedidos),
                headers: { 'Content-Type': 'application/json'},
            })
            const data = await res.json()
            console.log(data);
        }
        setLoading(false)
        navigate('/pedidos');
    }
    const handleChange = e =>{
        setPedidos({...pedidos, [e.target.name]: e.target.value})
        // console.log(e.target.name, e.target.value);
    }
    
    const loadClient = async(numeropedido)=>{
        const res=await fetch(`https://localhost:4000/readcliente/${numeropedido}`)
        const data = await res.json()
        console.log(data);
        setPedidos({id:data.id, numero:data.numero, FechaPedido:data.FechaPedido, FechaEntrega:data.FechaEntrega, TipoPago:data.TipoPago, Cliente:data.Cliente, Empleado:data.Empleado, PersonaRecibe:data.PersonaRecibe, CantidadPan:data.CantidadPan, Precio:data.Precio, Tamaño:dataTamaño, TipoHarina:data.TipoHarina, Nombre:data.Nombre});
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
                                    value={pedidos.id}
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
                                    label='numero'
                                    name='numero'
                                    value={pedidos.numero}
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
                                    label='FechaPedido'FechaEntrega
                                    name='FechaPedido'
                                    value={pedidos.FechaPedido}
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
                                    label='FechaEntrega'
                                    name='FechaEntrega'
                                    value={pedidos.FechaEntrega}
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
                                    label='TipoPago' 
                                    name='TipoPago'
                                    value={pedidos.TipoPago}
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
                                    label='Cliente' 
                                    name='Cliente'
                                    value={pedidos.Cliente}
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
                                    label='Empleado' 
                                    name='Empleado'
                                    value={pedidos.Empleado}
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
                                    label='PersonaRecibe' 
                                    name='PersonaRecibe'
                                    value={pedidos.PersonaRecibe}
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
                                    label='CantidadPan' 
                                    name='CantidadPan'
                                    value={pedidos.CantidadPan}
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
                                    label='Precio' 
                                    name='Precio'
                                    value={pedidos.Precio}
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
                                    label='Tamaño' 
                                    name='Tamaño'
                                    value={pedidos.Tamaño}
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
                                    label='TipoHarina' 
                                    name='TipoHarina'
                                    value={pedidos.TipoHarina}
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
                                    label='Nombre' 
                                    name='Nombre'
                                    value={pedidos.Nombre}
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

export {CrearPedidos};