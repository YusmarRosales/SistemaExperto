import React, { useState } from 'react'
import './style.scss'
import { TextField, Button } from '@mui/material'
import { Link, Navigate } from 'react-router-dom'
import axios from 'axios';

const Login = () => {

    const [values, setValues] = useState({
        Usuario: '',
        Contrasena: ''
    })

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (values.Usuario === '' || values.Contrasena === '') {
            alert('Por favor, complete todos los campos del formulario');
            return;
        }
        
        axios.post('http://localhost:8081/ingreso', values)
            .then(res => {
                console.log(res);
                if (res.data.Message === "Inicio de sesión exitoso") {
                    setIsAuthenticated(true);

                    // Guardar el nombre de usuario en el almacenamiento local
                    localStorage.setItem('usuario', values.Usuario);

                    // Opcional: Guardar el token JWT si lo vas a usar más adelante
                    localStorage.setItem('token', res.data.token);
                } else {
                    alert('Credenciales inválidas');
                }
            })
            .catch(err => console.log(err));
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    if (isAuthenticated) {
        return <Navigate to='/user/home' />
    }
    return (
        <>
            <div className="modalContainer" >
                <div className="modal" >
                    <header className="modal_header">
                        <h2 className="modal_header-title">
                            Ingresar
                        </h2>
                    </header>

                    <main className="modal_content">
                        <form onSubmit={handleSubmit}>
                            <TextField
                                fullWidth
                                autoFocus
                                type='text'
                                color='primary'
                                margin='normal'
                                variant='outlined'
                                label='Usuario'
                                placeholder='Usuario'
                                name='Usuario'
                                value={values.Usuario}
                                onChange={handleChange}
                            />
                            <TextField
                                fullWidth
                                type='password'
                                color='primary'
                                margin='normal'
                                variant='outlined'
                                label='Contraseña'
                                placeholder='Contraseña'
                                name='Contrasena'
                                value={values.Contrasena}
                                onChange={handleChange}
                            />
                        </form>
                    </main>

                    <footer className="modal_footer">
                        <Link to={isAuthenticated}>
                            <Button color='primary'
                                className='boton-esp'
                                variant='contained'
                                size='large'
                                onClick={handleSubmit}>
                                ACEPTAR
                            </Button>
                        </Link>
                    </footer>
                </div>
            </div>
        </>
    )
}
export default Login