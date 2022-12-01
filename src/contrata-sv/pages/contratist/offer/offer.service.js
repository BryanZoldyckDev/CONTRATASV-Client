import { API } from '../../../../api/index.js';

export class OfferService {
	static addOffer = (offer) => {
		return API.post('/offers', offer)
	}
}