import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import OfferCard from '../../../components/offer-card/offerCard.jsx';
import { useEffect, useState } from 'react';
import { OffersService } from './offers.service.js';
import { BACK_PAYMENT } from '../../../../utils/constants/payment.js';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../../utils/router/routes.js';

const OffersPage = () => {
	
	const [offers, setOffers] = useState([""]);
	const [from, setFrom] = useState(0);
	const [limit, setLimit] = useState(20);
	
	const navigate = useNavigate();
	
	const goToOffer = () => {
		navigate(ROUTES.contratistOfferPage)
	}
	
	
	useEffect(() => {
		const getData = async () => {
			await OffersService.getOffersByUser((options) => {
				setOffers(options)
			});
		};
		getData();
	}, []);
	
	return (
		<main>
			<div className="pt-8 pb-8">
				<div className="flex flex-wrap">
					<div className="flex flex-row justify-end items-center" style={{flex:1, height: '10px'}}>
						<button
							onClick={goToOffer}
							className="py-3 px-4 mr-5 rounded bg-green-700 hover:bg-green-900 text-white font-bold text-1xl"
							style={{ position: 'fixed' }}
						>
							<FontAwesomeIcon icon={faCirclePlus} className="text-2xl pr-4 cursor-pointer"/>
							Agregar Oferta
						</button>
					</div>
				</div>
				
				{/* <div className="flex justify-center items-center"> */}
				{/* 	<div className="bg-white rounded-lg shadow-lg p-8 m-8"> */}
				{/* 		<div className="flex justify-center items-center"> */}
				{/* 			<Link to={ROUTES.contratistActivitiesOffersActivePage} className="py-2 px-4 rounded bg-green-700 hover:bg-green-900 text-white font-bold"> */}
				{/* 				Activas */}
				{/* 			</Link> */}
				{/* 			<Link to={ROUTES.contratistActivitiesOffersArchivedPage} className="py-2 px-4 rounded bg-white hover:bg-gray-500 text-black font-bold"> */}
				{/* 				Archivadas */}
				{/* 			</Link> */}
				{/* 		</div> */}
				{/* 	</div> */}
				{/* </div> */}
			</div>
			
			<div className="flex flex-wrap items-center justify-center">
				{
					offers ? offers.map((offer, index) =>
						<OfferCard
							key={index}
							title={offer?.title}
							payment={BACK_PAYMENT[offer?.payment]}
							payday="1"
							profession={offer?.profession?.name}
							area={offer?.area}
							description={offer?.description}
						/>
					) : 'Aún no has hecho ofertas'
				}
			</div>
		</main>
	);
}

export default OffersPage;