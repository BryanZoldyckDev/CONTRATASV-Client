import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { RegisterFormFields } from './registerForm.js';
import { ROUTES } from '../../../utils/router/routes.js';
import { BACK_ROLES, ROLES } from '../../../utils/constants/index.js';
import { useAuthStore, useForm } from '../../../utils/hooks/index.js';
import { ProffesionService } from './proffesion.service.js';
import Select from 'react-select';

const RegisterForm = () => {
  const navigate = useNavigate();
  const location = useLocation().pathname.split('/')[2];
  const { startRegister, errorMessage } = useAuthStore();
  
  const {
    registerName,
    registerLastName,
    registerEmail,
    registerPassword,
    confirmPassword,
    registerDui,
    registerPhone,
    registerBirthDate,
    registerResidence,
    registerDescription,
    registerProfessions,
    onInputChange:onRegisterInputChange
  } = useForm( RegisterFormFields.formFields );
  
  const registerSubmit = ( event ) => {
    event.preventDefault();
    
    let errorMsg = '';
    
    if(!RegisterFormFields.birthDateValidation(registerBirthDate)) {
      errorMsg += 'La fecha de nacimiento debe estar entre 1950-01-01 y 2002-11-25.';
    }
  
    if(RegisterFormFields.phoneValidation(registerPhone)) {
      errorMsg += '<br>El número de teléfono debe tener 8 dígitos.';
    }
  
    if(RegisterFormFields.duiValidation(registerDui)) {
      errorMsg += '<br>El DUI debe tener 9 dígitos.';
    }
    
    if(RegisterFormFields.passwordValidation(registerPassword, confirmPassword)) {
      errorMsg += '<br>Las contraseñas deben coincidir.';
    }
    
    if(
      RegisterFormFields.birthDateValidation(registerBirthDate) ||
      RegisterFormFields.phoneValidation(registerPhone) ||
      RegisterFormFields.duiValidation(registerDui) ||
      RegisterFormFields.passwordValidation(registerPassword, confirmPassword)
    ) {
      Swal.fire('Error en registro', errorMsg, 'error');
      return;
    }
    
    startRegister({
      name: registerName,
      lastname: registerLastName,
      email: registerEmail,
      password: registerPassword,
      role: ROLES[location],
      dui: registerDui,
      phone: registerPhone,
      birthdate: registerBirthDate,
      residence: registerResidence,
      description: registerResidence,
      profession: registerProfessions.map((profession)=>profession.value)
    });
  }

  useEffect(() => {
    if ( errorMessage !== undefined && errorMessage !== 'SUCCESS') {
      Swal.fire('Error en la autenticación', errorMessage, 'error');
    }
    if( errorMessage === 'SUCCESS' ){
      const user = JSON.parse(localStorage.getItem('user'));
      Swal.fire('¡Bienvenido a ContrataSV!', '', 'success').then(()=>{
        navigate(`/${BACK_ROLES[user?.role?.name]}`);
      });
    }
  }, [errorMessage]);
  
  const [options, setOptions] = useState([""]);
  
  useEffect(() => {
    const getData = async () => {
      await ProffesionService.getProffesions((options) => {
        setOptions(options)
      });
    };
    getData();
  }, []);
  
  return(
    <main className="flex justify-center items-center bg-slate-200">
      <div id="form" className="block bg-slate-50 p-6 rounded-xl shodow-md shadow-slate-300 w-90">
        <form onSubmit={ registerSubmit }>
          <h2 className="text-green-700 text-4xl font-semibold my-4">Cuéntanos sobre ti</h2>
          <div className="flex flex-row">
            <div id="firstName" className="w-1/2 mr-1">
                <label className="text-sm">Primer nombre</label><br/>
                <input
                  name="registerName"
                  value={ registerName }
                  onChange={ onRegisterInputChange }
                  type="text"
                  id="name"
                  required="required"
                  className="h-10 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-green-600 shadow-sm"/>
            </div>
            <div id="lastName" className="w-1/2 mr-1">
                <label className="text-sm">Segundo nombre</label><br/>
                <input
                  name="registerLastName"
                  value={ registerLastName }
                  onChange={ onRegisterInputChange }
                  type="text"
                  id="lastName"
                  required="required"
                  className="h-10 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-green-600 shadow-sm"/>
            </div>
          </div>
          <div className="flex flex-row flex-wrap mt-2">
            <div className="sm:w-1/3 w-full sm:pr-2 pr-0">
              <label className="text-sm">Fecha de Nacimiento</label><br/>
              <input
                name="registerBirthDate"
                value={ registerBirthDate }
                onChange={ onRegisterInputChange }
                onKeyDown={ RegisterFormFields.calendarKeyDown }
                type="date"
                id="birthDate"
                required="required"
                className="h-10 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-green-600 shadow-sm"/>
            </div>
            <div className="sm:w-1/3 w-1/2 sm:mt-0 mt-2 pr-2">
              <label className="mt-2 text-sm">Número de DUI</label><br/>
              <input
                name="registerDui"
                value={ registerDui }
                onChange={ onRegisterInputChange }
                onKeyDown={ (e) => RegisterFormFields.duiKeyDown(registerDui, e) }
                type="text"
                id="documentNumber"
                placeholder="#########"
                required="required"
                className="h-10 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-green-600 shadow-sm"/>
            </div>
            <div id="lastName" className="sm:w-1/3 w-1/2 sm:mt-0 mt-2">
              <label className="mt-2 text-sm">Número de teléfono</label><br/>
              <input
                name="registerPhone"
                value={ registerPhone }
                onChange={ onRegisterInputChange }
                onKeyDown={ (e) => RegisterFormFields.phoneKeyDown(registerPhone, e) }
                type="text"
                id="phoneNumber"
                placeholder="########"
                required="required"
                className="h-10 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-green-600 shadow-sm"/>
            </div>
          </div>

          <div className="mt-2">
            <label className="mt-2 text-sm">Dirección</label><br/>
            <input
              name="registerResidence"
              value={ registerResidence }
              onChange={ onRegisterInputChange }
              type="text"
              id="residence"
              required="required"
              className="h-10 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-green-600 shadow-sm"/>
          </div>
  
          {
            location === BACK_ROLES.CONTRATIST_ROLE ?
              <div className="mt-2">
                <label className="mt-2 text-sm">Profesiones</label><br/>
                <Select
                  isMulti
                  options={ options }
                  name="registerProfessions"
                  value={ registerProfessions }
                  onChange={ (value, event) => {
                    if(event.action === 'select-option')
                    onRegisterInputChange({target: { name: 'registerProfessions', value }})
                  } }
                  placeholder= "Selecciona una profesión"
                  noOptionsMessage={() => "La profesión no existe"}
                />
              </div>
              : ''
          }
  
          <div className="mt-2">
            <label className="mt-2 text-sm">Descripción</label><br/>
            <textarea
              name="registerDescription"
              value={ registerDescription }
              onChange={ onRegisterInputChange }
              id="description"
              required="required"
              className="h-10 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-green-600 shadow-sm"/>
          </div>
  
          <div className="mt-2">
            <label className="mt-2 text-sm">Correo electrónico</label><br/>
            <input
              name="registerEmail"
              value={ registerEmail }
              onChange={ onRegisterInputChange }
              type="email"
              id="email"
              required="required"
              className="h-10 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-green-600 shadow-sm"/>
          </div>
  
          <div className="flex flex-row mt-2">
            <div id="firstName" className="w-1/2 mr-1">
              <label className="mt-2 text-sm">Contraseña</label><br/>
              <input
                name="registerPassword"
                value={ registerPassword }
                onChange={ onRegisterInputChange }
                type="password"
                id="password"
                required="required"
                className="h-10 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-green-600 shadow-sm"/>
            </div>
            <div id="lastName" className="w-1/2 mr-1">
              <label className="mt-2 text-sm">Confirmar contraseña</label><br/>
              <input
                name="confirmPassword"
                value={ confirmPassword }
                onChange={ onRegisterInputChange }
                type="password"
                id="confirmPassword"
                className="h-10 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-green-600 shadow-sm"/>
            </div>
          </div>

          <button
            type="submit"
            className="mt-5 bg-green-700 w-full h-10 cursor-pointer text-white rounded-md hover:bg-green-600 hover:outline outline-2 outline-green-600 outline-offset-2 text-sm"
          > Registrarse </button><br/>
          <p className="text-lg my-2">¿Ya posees una cuenta? <a href={ROUTES.loginPage} className="text-green-600">Iniciar sesión</a></p>
        </form>
      </div>
    </main>
  )
}

export default RegisterForm