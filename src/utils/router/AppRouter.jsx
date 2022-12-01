import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../store/index.js';

import HomePage from '../../contrata-sv/pages/shared/home/HomePage.jsx';
import Error from '../../contrata-sv/pages/shared/404/notFound.jsx';
import Login from '../../contrata-sv/pages/public/login/login.jsx';
import RegisterMain from '../../contrata-sv/pages/public/register/registerMain.jsx';
import RegisterForm from '../../contrata-sv/pages/public/register/registerForm.jsx';
import ActP from '../../contrata-sv/pages/talentPage/actividades/actPA.jsx';
import OfferPage from '../../contrata-sv/pages/talentPage/actividades/Ofertas/offerPage.jsx';
import ContracsPageAct from '../../contrata-sv/pages/talentPage/actividades/Contratos/contracsPageAct.jsx';
import SolicitudesP from '../../contrata-sv/pages/talentPage/solicitudes/soliP.jsx';
import ContratosUser from '../../contrata-sv/pages/userPage/contratos/contratosUA.jsx';
import ServiciosUser from '../../contrata-sv/pages/userPage/servicios/serviciosU.jsx';
import SolicitudesUser from '../../contrata-sv/pages/userPage/solicitudes/solicitudesUP.jsx';
import ProfileUser from '../../contrata-sv/pages/userPage/profileUser.jsx';
import OffersPage from '../../contrata-sv/pages/contratist/offers/offers.jsx';

import Footer from '../../contrata-sv/components/footer/footer.jsx';
import Header from '../../contrata-sv/components/header/header.jsx';
import { PrivateRoute } from './PrivateRoute.jsx';
import { ROLES } from '../constants/index.js';
import { PublicRoute } from './PublicRoute.jsx';
import { ROUTES } from './routes.js';
import Offer from '../../contrata-sv/pages/contratist/offer/offer.jsx';

const publicRoutes = [
	{ path: '/', element: <HomePage /> },
	{ path: ROUTES.loginPage, element: <Login /> },
	{ path: ROUTES.registerPage, element: <RegisterMain /> },
	{ path: '/register/:type', element: <RegisterForm /> },
];

const privateRoutes = [
	{ path: ROUTES.contratistPage, element: <HomePage />, type: ROLES.contratist },
	{ path: ROUTES.contratistOfferPage, element: <Offer />, type: ROLES.contratist },
	{ path: ROUTES.contratistOffersPage, element: <OffersPage />, type: ROLES.contratist },
	{ path: ROUTES.contratistActivitiesPage, element: <ActP />, type: ROLES.contratist },
	{ path: '/contratist/activities/offers/:status', element: <OfferPage />, type: ROLES.contratist },
	{ path: '/contratist/activities/contracts/:status', element: <ContracsPageAct />, type: ROLES.contratist },
	{ path: '/contratist/requests/:status', element: <SolicitudesP />, type: ROLES.contratist },
	{ path: ROUTES.profilePage, element: <ProfileUser /> },
	{ path: ROUTES.clientPage, element: <HomePage />, type: ROLES.client },
	{ path: '/client/contracts/:status', element: <ContratosUser />, type: ROLES.client },
	{ path: ROUTES.clientServicesPage, element: <ServiciosUser />, type: ROLES.client },
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