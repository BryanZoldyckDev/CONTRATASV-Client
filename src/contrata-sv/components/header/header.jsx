import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BACK_ROLES, ROLES } from '../../../utils/constants/index.js';
import { useAuthStore } from '../../../utils/hooks/index.js';

const Header = () => {
	
	let links = [];
	
	const notSignedInLinks = [
		{
			name: "Iniciar Sesión",
			url: "/login"
		}
	];
	
	const clientLinks = [
		{
			name: "Contratos",
			url: "/client-page/contracts/active"
		},
		{
			name: "Perfil",
			url: "/client-page/profile"
		},
		{
			name: "Servicios",
			url: "/client-page/services"
		},
		{
			name: "Solictudes",
			url: "/client-page/requests/pending"
		},
	];
	
	const contratistLinks = [
		{
			name: "Actividad",
			url: "/contratist-page/activities"
		},
		{
			name: "Perfil",
			url: "/contratist-page/profile"
		},
		{
			name: "Solicitudes",
			url: "/contratist-page/requests/pending"
		},
	];
	
	const navigate = useNavigate();
	
	const EnterHandler = (route, e) => {
		navigate(route);
	}
	
	const changeMenu = () => {
		setShowMenu(!showMenu);
	};
	
	const [ showMenu, setShowMenu ] = useState(false);
	const [ user, setUser ] = useState({});
	const { startLogout } = useAuthStore();
	
	useEffect(() => {
		setUser(JSON.parse(localStorage.getItem('user')));
	}, [localStorage.getItem('user')]);
	
	if(user !== {} && user?.role?.name === ROLES.client){
		links = clientLinks;
	}
	
	else if(user !== {} && user?.role?.name === ROLES.contratist){
		links = contratistLinks;
	}
	
	else {
		links = notSignedInLinks
	}
	
	return (
		<nav className='sticky top-0 left-0 bg-green-800 w-full shadow'>
			<div className='container m-auto flex justify-between items-center text-white'>
				<Link to={ user !== {} && user?.role?.name === ROLES.client || user !== {} && user?.role?.name === ROLES.contratist ? BACK_ROLES[user?.role?.name] + '-page' : '/' } className="flex flex-row pl-8 py-4 text-xl font-bold">CONTRATA<h1 className="text-green-500">SV</h1></Link>
				<ul className="hidden md:flex items-center pr-10 text-base font-semibold cursor-pointer">
					{links.map((link, index) => (
						<li className="px-4 py-4 hover:bg-green-700" key={index} onClick={EnterHandler.bind(this, link.url)}>{link.name}</li>
					))}
					{
						user !== {} && user?.role?.name === ROLES.client || user !== {} && user?.role?.name === ROLES.contratist
							?
							<div className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded" onClick={startLogout}>
								<h2>Cerrar sesión</h2>
							</div>
							:
							<div className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded" onClick={EnterHandler.bind(this, 'register')}>
								<h2>Registrarse</h2>
							</div>
					}
				</ul>
				
				<button className="block md:hidden py-3 px-4 mx-2 rounded focus:outline-none hover:bg-gray-200 group" onClick={changeMenu}>
					<FontAwesomeIcon icon={faBars} className="md:hidden text-2xl cursor-pointer"/>
					<div className={(showMenu ? 'block' : 'hidden') + ' absolute top-0 -right-full h-screen w-6/12 bg-green-800 border right-0 transition-all duration-300'}>
						<ul className="flex flex-col items-center w-full text-base cursor-pointer pt-20">
							{links.map((link, index) => (
								<li className="px-4 py-4 hover:bg-green-700" key={index} onClick={EnterHandler.bind(this, link.url)}>{link.name}</li>
							))}
							{
								user !== {} && user?.role?.name === ROLES.client || user !== {} && user?.role?.name === ROLES.contratist
									?
									<div className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded" onClick={startLogout}>
										<h2>Cerrar sesión</h2>
									</div>
									:
									<div className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded" onClick={EnterHandler.bind(this, 'register')}>
										<h2>Registrarse</h2>
									</div>
							}
						</ul>
					</div>
				</button>
			</div>
		</nav>
	);
}

export default Header;