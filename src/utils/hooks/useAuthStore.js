import { useEffect } from 'react';
import { API } from '../../api/index.js';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrorMessage, onChecking, onLogin, onLogout, onRenewLogin } from '../store/index.js';

export const useAuthStore = () => {
    
    useEffect(() => {
        let localStorageUser = JSON.parse(localStorage.getItem('user'));
        if(localStorageUser) {
            dispatch( onRenewLogin(JSON.parse(localStorage.getItem('user'))) );
        }
    }, [localStorage.getItem('user')]);
    
    const { status, user, errorMessage } = useSelector( state => state.auth );
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const startLogin = async({ email, password }) => {
        dispatch( onChecking() );
        try {
            const { data } = await API.post('/auth/login',{ email, password });
            localStorage.setItem('token', data.token );
            localStorage.setItem('token-init-date', new Date().getTime() );
            localStorage.setItem('user', JSON.stringify(data.user) );
            dispatch( onLogin(data.user) );
            setTimeout(() => {
                dispatch( clearErrorMessage() );
            }, 10);
        } catch (error) {
            dispatch( onLogout('Credenciales incorrectas') );
            setTimeout(() => {
                dispatch( clearErrorMessage() );
            }, 10);
        }
    }

    const startRegister = async({name, lastname, email, password, role, dui, phone, birthdate, residence, description}) => {
        dispatch( onChecking() );
        try {
            const { data } = await API.post('/users',{name, lastname, email, password, role, dui, phone, birthdate, residence, description});
            localStorage.setItem('token', data.token );
            localStorage.setItem('token-init-date', new Date().getTime() );
            dispatch( onLogin(data.user) );
            setTimeout(() => {
                dispatch( clearErrorMessage() );
            }, 10);
        } catch (error) {
            dispatch( onLogout( error.response?.data?.msg || '--' ) );
            setTimeout(() => {
                dispatch( clearErrorMessage() );
            }, 10);
        }
    }
    

    const startLogout = () => {
        localStorage.clear();
        dispatch( onLogout() );
        navigate('/');
    }

    return {
        //* Propiedades
        errorMessage,
        status,
        user, 

        //* Métodos
        startLogin,
        startLogout,
        startRegister,
    }

}