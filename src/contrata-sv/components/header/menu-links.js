import { ROUTES } from '../../../utils/router/routes.js';

export const notSignedInLinks = [
	{
		name: "Iniciar Sesión",
		url: ROUTES.loginPage
	}
];

export const clientLinks = [
	{
		name: "Contratos",
		url: ROUTES.clientContractsActivePage
	},
	{
		name: "Perfil",
		url: ROUTES.profilePage
	},
	{
		name: "Servicios",
		url: ROUTES.clientServicesPage
	},
	// {
	// 	name: "Solicitudes",
	// 	url: ROUTES.clientRequestsPendingPage
	// },
];

export const contratistLinks = [
	{
		name: "Ofertas",
		url: ROUTES.contratistOffersPage
	},
	{
		name: "Perfil",
		url: ROUTES.profilePage
	},
	// {
	// 	name: "Solicitudes",
	// 	url: ROUTES.contratistRequestsPendingPage
	// },
];
