import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../store/index.js';

import InicialPage from '../../contrata-sv/pages/home/inicialPage.jsx';
import Error from '../../contrata-sv/pages/404/notFound.jsx';
import Login from '../../contrata-sv/pages/login/login.jsx';
import RegisterMain from '../../contrata-sv/pages/register/registerMain.jsx';
import RegisterForm from '../../contrata-sv/pages/register/registerForm.jsx';
import TalentP from '../../contrata-sv/pages/talentPage/talentP.jsx';
import ActP from '../../contrata-sv/pages/talentPage/actividades/actPA.jsx';
import OfferPage from '../../contrata-sv/pages/talentPage/actividades/Ofertas/offerPage.jsx';
import ContracsPageAct from '../../contrata-sv/pages/talentPage/actividades/Contratos/contracsPageAct.jsx';
import SolicitudesP from '../../contrata-sv/pages/talentPage/solicitudes/soliP.jsx';
import UserP from '../../contrata-sv/pages/userPage/userP.jsx';
import ContratosUser from '../../contrata-sv/pages/userPage/contratos/contratosUA.jsx';
import ServiciosUser from '../../contrata-sv/pages/userPage/servicios/serviciosU.jsx';
import SolicitudesUser from '../../contrata-sv/pages/userPage/solicitudes/solicitudesUP.jsx';
import ProfileUser from '../../contrata-sv/pages/userPage/profileUser.jsx';

import Footer from '../../contrata-sv/components/footer/footer.jsx';
import Header from '../../contrata-sv/components/header/header.jsx';
import { PrivateRoute } from './PrivateRoute.jsx';
import { ROLES } from '../constants/index.js';
import { PublicRoute } from './PublicRoute.jsx';

const publicRoutes = [
	{ path: '/', element: <InicialPage /> },
	{ path: '/login', element: <Login /> },
	{ path: '/register', element: <RegisterMain /> },
	{ path: '/register/:type', element: <RegisterForm /> },
];

const privateRoutes = [
	{ path: '/contratist', element: <TalentP />, type: ROLES.contratist },
	{ path: '/contratist/activities', element: <ActP />, type: ROLES.contratist },
	{ path: '/contratist/activities/offers/:status', element: <OfferPage />, type: ROLES.contratist },
	{ path: '/contratist/activities/contracts/:status', element: <ContracsPageAct />, type: ROLES.contratist },
	{ path: '/contratist/requests/:status', element: <SolicitudesP />, type: ROLES.contratist },
	{ path: 'profile', element: <ProfileUser /> },
	{ path: '/client', element: <UserP />, type: ROLES.client },
	{ path: '/client/contracts/:status', element: <ContratosUser />, type: ROLES.client },
	{ path: '/client/services', element: <ServiciosUser />, type: ROLES.client },
	{ path: '/client/requests/:status', element: <SolicitudesUser />, type: ROLES.client },
];

export const AppRouter = () => {
	
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Header/>
				<Routes>
					<Route
						path="*"
						element={ <Error/> }
					/>
					{
						/* Paginas Públicas */
						publicRoutes.map((route, index) => (
							<Route
								key={index}
								path={route.path}
								element={ <PublicRoute> {route.element} </PublicRoute> }
							/>
						))
					}
					{
						/* Páginas Privadas */
						privateRoutes.map((route, index) => (
							<Route
								key={index}
								path={route.path}
								element={ <PrivateRoute type={route.type}> {route.element} </PrivateRoute> }
							/>
						))
					}
				</Routes>
				<Footer />
			</BrowserRouter>
		</Provider>
	);
};