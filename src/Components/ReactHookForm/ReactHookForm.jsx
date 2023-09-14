import React from 'react';
import logo from '../../assets/react.svg'
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver}  from '@hookform/resolvers/yup'

const ReactHookform = () => {
    // * Logica va aqui para que funcione el form Creacion del esquema de formulario con Yup para validar campos
    const useFormSchema = yup.object({
        firstName: yup.string().required('Escribe tu nombre'),
        lastName: yup.string().required('Escribe tu apellido') ,
        age: yup.number().positive('edad debe ser positiva').integer('edad'),
        password: yup.string().required('no ingresaste password').min(5, 'contraseña muy corta 5 char min').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%.^&*])/, "5char, un numero, unamayus, minus, un char esp"),
        genre: yup
        .mixed().
        oneOf(['M', 'F', 'O', 'Selecciona un GeolocationPositionError, Hombre Mujer u Otro'])
        .defined()
        ,
    }).required()

    const {register,handleSubmit, formState: {errors}} = useForm({
        //resolver siver para establecer el schema de validacion  usa funcion yupResolver userFormSchema nuestro schema
        resolver: yupResolver(useFormSchema)
    })
    const onSubmit = data => console.log(data)

    return (  
        //? Paso #1: Crear el formulario base en JSX
            <div className='login'>
                <div className='login-container'>
                    <img src={logo} alt='logo' />
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    style={{ display: 'flex', flexDirection: 'column' }}
                >
            
                <label htmlFor='firstName'>Nombre</label>
                <input
                    type='text'
                    name='firstName'
                    placeholder='Tu Nombre'
                    id='firstName'
                    {...register('firstName', {required: true, maxLength: 20})}
                />
                <p>{errors.firstName?.message}</p>

                <label htmlFor='lastName'>Apellido</label>
                <input
                    type='text'
                    name='lastName'
                    placeholder='Tu Apellido'
                    id='lastName'
                    {...register('lastName', {pattern: /^[A-Aa-z]+$/i})}
                />
                <p>{errors.lastName?.message}</p>

                <label htmlFor='age'>Edad</label>
                <input
                    type='number'
                    name='age'
                    placeholder='Tu Edad'
                    id='age'
                />
                <p>{errors.age?.message}</p>

                <label htmlFor='gender'>Genero</label>
                <select name='gender' id='gender'>
                <option value=''>Elige un genero</option>
                <option value='M'>Masculino</option>
                <option value='F'>Femenino</option>
                <option value='O'>Otro</option>
                </select>

                <label htmlFor='email'>Email</label>
                <input
                    type='text'
                    name='email'
                    placeholder='correo@mail.com'
                    id='email'
                />
                <p>{errors.email?.message}</p>

                <label htmlFor='password'>Password</label>
                <input
                    type='password'
                    name='password'
                    id='password'
                />
                <p>{errors.password?.message}</p>

                <button type='submit'>
                Iniciar Sesion
                </button>
            </form>
            </div>
        </div>
    );
}
 
export default ReactHookform;