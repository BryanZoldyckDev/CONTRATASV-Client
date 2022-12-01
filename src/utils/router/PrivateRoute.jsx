import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../hooks/index.js';
import { BACK_ROLES } from '../constants/index.js';

export function PrivateRoute({ children, type }) {
	const { user } = useAuthStore();
	
	if(!user?.uid) return <Navigate to="/login" />
	
	if(type && user?.role?.name === type) return children;
	
	if(!type) return children;
	
	return <Navigate to={'/' + BACK_ROLES[user?.role?.name]} />
}