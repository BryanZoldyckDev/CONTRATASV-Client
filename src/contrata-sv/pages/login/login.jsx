import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import { useAuthStore, useForm } from '../../../utils/hooks/index.js';
import { useNavigate } from 'react-router-dom';
import { BACK_ROLES } from '../../../utils/constants/index.js';

const loginFormFields = {
  username: '',
  password: '',
}

const Login = () => {
  const navigate = useNavigate();
  
  const { startLogin, errorMessage } = useAuthStore();
  const { username, password, onInputChange:onLoginInputChange } = useForm( loginFormFields );
  
  const loginSubmit = ( event ) => {
    event.preventDefault();
    startLogin({ email: username, password });
  }

  useEffect(() => {
    if ( errorMessage !== undefined && errorMessage !== 'SUCCESS' ) {
      Swal.fire('Error en la autenticación', errorMessage, 'error');
    }
    if( errorMessage === 'SUCCESS' ){
      const user = JSON.parse(localStorage.getItem('user'));
      Swal.fire('¡Bienvenido a ContrataSV!', '', 'success').then(()=>{
        navigate(`/${BACK_ROLES[user?.role?.name]}-page`);
      });
    }
  }, [errorMessage])

  let LinksT = [
      {
          name: "Iniciar Sesión",
          url: "/login"
      }
  ];
  
  return (
    <main className="flex items-center justify-center h-full">
      <section className="flex items-center justify-center">
        <form className="light-green-bg w-100 p-6 rounded shadow-sm" onSubmit={ loginSubmit }>
          <div className="flex items-center justify-center mb-10 mr-2 ml-2">
              <p className="text-6xl font-bold">CONTRATA</p><p className="text-green-500 text-6xl font-bold">SV</p>
          </div>
          
          <div className="mr-10 ml-10 flex flex-wrap items-center justify-center">
            <label className="w-full text-gray-700">Usuario</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded border-gray-300 focus:outline-none focus:border-green-500 mb-3"
              name="username"
              value={ username }
              onChange={ onLoginInputChange }
            />
          </div>

          <div className="mr-10 ml-10 flex flex-wrap items-center justify-center">
            <label className="w-full text-gray-700">Contraseña</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded border-gray-300 focus:outline-none focus:border-green-500 mb-3"
              name="password"
              value={ password }
              onChange={ onLoginInputChange }
            />
          </div>
          
          <div className="flex flex-wrap items-center justify-center">
            <button type="submit" className="bg-green-500 mr-10 ml-10 text-gray-100 mt-5 py-2 px-5 rounded hover:bg-green-900 transition-colors">Iniciar Sesión</button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default Login;