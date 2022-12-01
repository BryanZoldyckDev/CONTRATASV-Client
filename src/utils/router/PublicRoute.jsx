import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../hooks/index.js';
import { BACK_ROLES } from '../constants/index.js';

export function PublicRoute({ children}) {
	const { user } = useAuthStore();
	
	if(!user?.uid) return children;
	
	return <Navigate to={'/' + BACK_ROLES[user?.role?.name]} />
}