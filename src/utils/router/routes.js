export class ROUTES {
	static initPage = '/';
	static errrorPage = '*';
	
	static loginPage = '/login';
	static registerPage = '/register';
	static registerClientPage = '/register/client';
	static registerContratistPage = '/register/contratist';

	static contratistPage = '/contratist';
	static contratistActivitiesPage = '/contratist/activities';
	static contratistActivitiesOffersActivePage = '/contratist/activities/offers/active';
	static contratistActivitiesOffersArchivedPage = '/contratist/activities/offers/archived';
	static contratistActivitiesContractsActivePage = '/contratist/activities/contracts/active';
	static contratistActivitiesContractsArchivedPage = '/contratist/activities/contracts/history';
	static contratistRequestsPendingPage = '/contratist/requests/pending';
	static contratistRequestsDeclinedPage = '/contratist/requests/declined';
	
	static profilePage = '/profile';
	
	static clientPage = '/client';
	static clientContractsActivePage = '/client/contracts/active';
	static clientContractsHistoryPage = '/client/contracts/history';
	static clientServicesPage = '/client/services';
	static clientRequestsPendingPage = '/client/requests/pending';
	static clientRequestsDeclinedPage = '/client/requests/declined';
}