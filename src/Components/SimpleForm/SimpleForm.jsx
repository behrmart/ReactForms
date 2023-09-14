import React from 'react';
import { useState } from 'react';
import logo from '../../assets/react.svg'

const SimpleForm = () => {
    // Paso 2 : crear los estados donde se guarda info tecleada
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // Paso 4 : Crear funcion que se ejecuto al hacer click en boton de submit del formulario

    const handleSubmit = (event) => {
            event.preventDefault()
            console.log ('email: ', email, ' Password: ',  password)
    }

     return (  
        <div className='login'>
            <div className='login-container'>
                <img src={logo} alt='logo' /> 
                
                <form onSubmit={handleSubmit}>
                    {/* Paso #3: Guardo la información en el estado de */}
                <label htmlFor='email'>Email</label>
                <input
                    type='text'
                    name='email'
                    placeholder='correo@mail.com'
                    id='simple-email'
                    onChange={(event) => setEmail(event.target.value)}
                    value={email}
                />

                <label htmlFor='password'>Password</label>
                <input
                    type='password'
                    name='password'
                    id='simple-password'
                    onChange={(event) => setPassword(event.target.value)}
                    value={password}
                />
                
                <button type='submit'>
                    Iniciar Sesion
                </button>
                
                </form>
            </div>
    </div>

    );
}
 
export default SimpleForm;