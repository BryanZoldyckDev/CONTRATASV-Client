import { Navigate } from 'react-router-dom';
import { BACK_ROLES } from '../constants/index.js';

export function PrivateRoute({ children, type }) {
	
	const user = JSON.parse(localStorage.getItem('user'));
	
	if(!user?.uid) return <Navigate to="/login" />
	
	if(type === undefined) return children;
	
	if(type && user?.role?.name === type) return children;
	
	return <Navigate to={'/' + BACK_ROLES[user?.role?.name]} />
}