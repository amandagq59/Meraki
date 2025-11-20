import { use, useContext, useState } from 'react';
import {Boton} from '../boton/Boton';
import './formregister.css';
import { MerakiContext } from '../../context/ContextMeraki';

const userObject = {
  nombre:"",
  apellidos:"",
  correo:"",
  password:"",
  repitePassword:"",
  politica_privacidad:false,
  promocion:false
}

export const FormRegister = () => {
  const [text, setText] = useState(userObject);
  const {user, setUser} = useContext(MerakiContext);

  const handleChange = (e) => {
    
    if(e.target.type === "checkbox"){
      const {name, checked} = e.target;
      setText({...text,[name]:checked})
    }else {
      const {name, value} = e.target;
      setText({...text, [name]:value}) 
    }


  }

  const cancelarRegistro = (e) => {
    e.preventDefault();
    setText(userObject)
  }
  
  const register = (e) => {
    e.preventDefault();

    const verifyEmail = /^[\w.-]+@[a-z\d.-]+\.[a-z]{2,}$/i;
    const verifyPassUpperCase = /[A-Z]/;
    const verifyPassLowerCase = /[a-z]/;
    const verifyPassNumber = /\d/;
    const verifyPassSimbol = /[^A-Za-z0-9]/;

    // Comprobar si todos los campor están rellenos (Nombre, Apellidos, Correo, Password, RepetePassword)
    if (text.nombre === "" && 
        text.apellidos === "" &&
        text.correo === "" &&
        text.password === "" &&
        text.repitePassword === ""
    ) {
      console.log("Debe rellenar todos los campos")
    } else {
      
      if (text.nombre.length < 3) { // Comprobar que el nombre tiene más de 3 caracteres
        console.log('El nombre es corto o esta vacio')
      } else if (text.apellidos.length < 3){ // Comprobar que los apellidos tienen más de 3 caracteres
        console.log('El apellido es corto o esta vacio')
      } else if (!verifyEmail.test(text.correo)){ // Comprobar que el correo cumple
        console.log("Correo no cumple o esta vacio")
      } else {

        if (!verifyPassUpperCase.test(text.password)) { // Comprobar password Mayusculas
          console.log("No tiene Mayúsculas")
        } else if (!verifyPassLowerCase.test(text.password)){ // Comprobar password Minusculas
          console.log("No tiene Minusculas")
        } else if (!verifyPassNumber.test(text.password)){ // Comprobar password Numeros
          console.log("No tiene Números")
        } else if (!verifyPassSimbol.test(text.password)){ // Comprobar password Simbolos
          console.log("No tiene Simbolos")
        } else if (text.password.length < 8){ // Comprobar password longitud
          console.log("El password tiene menos de 8 caraccteres")
        } else if (text.password !== text.repitePassword) { // Comprobar que los dos password que sean iguales
          console.log("Los passwords no coinciden")
        } else {
          if (!text.politica_privacidad) {
            console.log("Debes aceptar la politica de privacidad")
          } else {
            console.log('Registrar')
          }
        }
      }
    }
  }



  return (
    
    <div className='d-flex flex-column align-items-center div-form'>
      <h2>Registrate para reservar tu próximo viaje</h2>
      <form className='formulario-registro'>
        <div className='div-input'>
          <label htmlFor="name">Nombre</label>
          <input 
            value={text.nombre}
            onChange={handleChange}
            name='nombre'
            placeholder='Nombre'
            id="name" 
            type="text" />
        </div>
        <div className='div-input'>
          <label htmlFor="last_name">Apellidos</label>
          <input 
            value={text.apellidos}
            onChange={handleChange}
            name='apellidos'
            placeholder='Apellidos'
            id="last_name" 
            type="text" />
        </div>
        <div className='div-input'>
          <label htmlFor="email">Correo</label>
          <input 
            value={text.correo}
            onChange={handleChange}
            name='correo'
            placeholder='Introduce tu email'
            id="email" 
            type="email" />
        </div>
        <div className='div-input'>
          <label htmlFor="password">Contraseña</label>
          <input 
            value={text.password}
            onChange={handleChange}
            name='password'
            placeholder='Contraseña'
            id="password" 
            type="password" />
        </div>
        <div className='div-input'>
          <label htmlFor="password-2">Repetir Contraseña</label>
          <input 
            value={text.repitePassword} 
            onChange={handleChange}
            name='repitePassword'
            placeholder='Confirma la contraseña'
            id="password-2" 
            type="password" />
        </div>
        <div className='div-check'>
          <input 
            onChange={handleChange}
            name='politica_privacidad'
            id="politica" 
            type="checkbox" />
          <label htmlFor="politica">Acepto la política de privacidad <span className='text-span'>(oblegatorio)</span></label>
        </div>
        <div className='div-check'>
          <input 
            onChange={handleChange}
            name='promocion'
            id="ofertas" 
            type="checkbox" />
          <label htmlFor="ofertas">Recibir promociones personalizadas <span className='text-span'>(opcional)</span></label>
        </div>
        <div className='div-btn'>
          <Boton onClick={register} aspecto="normal" nombre="Registrar"/>
          <Boton onClick={cancelarRegistro} aspecto="normal alerta" nombre="Cancelar"/>
        </div>
      </form>
    </div>
  )
}