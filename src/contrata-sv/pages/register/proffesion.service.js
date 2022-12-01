import { API } from '../../../api/index.js';

export class ProffesionService {
	static async getProffesions(callback) {
		const { data } = await API.get('/professions');

		if(!data) return [];
		
		callback(data?.professions.map((profession) => {
			return {
				value: profession?.name,
				label: profession?.name
			}
		}));
		
		return data?.professions.map((profession) => {
			return {
				value: profession?.name,
				label: profession?.name
			}
		});
	}
}