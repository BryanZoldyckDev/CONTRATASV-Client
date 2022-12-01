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
		url: ROUTES.clientProfilePage
	},
	{
		name: "Servicios",
		url: ROUTES.clientServicesPage
	},
	{
		name: "Solictudes",
		url: ROUTES.clientRequestsPendingPage
	},
];

export const contratistLinks = [
	{
		name: "Actividad",
		url: ROUTES.contratistActivitiesPage
	},
	{
		name: "Perfil",
		url: ROUTES.contratistProfilePage
	},
	{
		name: "Solicitudes",
		url: ROUTES.contratistRequestsPendingPage
	},
];
