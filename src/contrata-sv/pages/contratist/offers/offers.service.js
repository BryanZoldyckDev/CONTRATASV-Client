import { API } from '../../../../api/index.js';

export class OffersService  {
	static async getOffersByUser(callback, from, limit) {
		// const { data } = await API.get(`/offers?from=${from}&limit=${limit}`);
		const { data } = await API.get(`/offers/profile?from=${from}&limit=${limit}`);
		
		if(!data) return [];

		callback(data?.offers);
	}
}