import { RegisterFormFields } from '../../public/register/registerFormFields.js';
import Select from 'react-select';
import React, { useState } from 'react';
import { useForm } from '../../../../utils/hooks/index.js';
import Swal from 'sweetalert2';
import { OfferFormFields } from './offerFormFields.js';
import { OfferService } from './offer.service.js';
import { BACK_PAYMENT, PAYMENT } from '../../../../utils/constants/payment.js';
import { useEffect } from 'react';
import { ProffesionService } from '../../public/register/proffesion.service.js';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../../utils/router/routes.js';

const Offer = () => {
	
	const {
		offerTitle,
		offerPayment,
		offerPayday,
		offerProfession,
		offerPrice,
		offerArea,
		offerDescription,
		onInputChange:onOfferInputChange
	} = useForm( OfferFormFields.formFields );
	
	const registerSubmit = ( event ) => {
		event.preventDefault();
		if(offerTitle && offerPayment && offerPayday && offerProfession && offerArea && offerDescription || offerTitle && offerPayment?.value === PAYMENT.fixed && offerPrice && offerPayday && offerProfession && offerArea && offerDescription)
		makeOffer();
	}
	
	const navigate = useNavigate();
	
	const makeOffer = async () => {
		const data = await OfferService.addOffer({
			title: offerTitle,
			payment: offerPayment?.value,
			payday: offerPayday?.value,
			cost: offerPrice,
			profession: offerProfession?.value,
			area: offerArea,
			description: offerDescription
		})
		
		if(data?.msg){
			Swal.fire('error', data?.msg, 'error');
		}
		
		else{
			Swal.fire('Oferta registrada', 'La oferta ha sido registrada exitosamente.', 'success').then(() => {
				navigate(ROUTES.contratistOffersPage);
			});
		}
	}
	
	const [professions, setProfessions] = useState([""]);
	const [options, setOptions] = useState([
		{value: PAYMENT.fixed, label: BACK_PAYMENT['FIXED']},
		{value: PAYMENT.toAgree, label: BACK_PAYMENT['TO AGREE']}
	]);
	const [paydayOptions, setPaydayOptions] = useState([
		{value: 'HOURLY', label: 'Por hora'},
		{value: 'DAYLY', label: 'Por día'},
		{value: 'WEEKLY', label: 'Por semana'},
		{value: 'BIWEEKLY', label: 'Por dos semana'},
		{value: 'MONTHLY', label: 'Por mes'},
	]);
	
	useEffect(() => {
		const getData = async () => {
			await ProffesionService.getProffesions((options) => {
				setProfessions(options)
			});
		};
		getData();
	}, []);
	
	return(
		<main className="flex justify-center items-center bg-slate-200">
			<div id="form" className="block bg-slate-50 p-6 rounded-xl shodow-md shadow-slate-300 w-90">
				<form onSubmit={ registerSubmit }>
					<h2 className="text-green-700 text-4xl font-semibold my-4">Crear una oferta</h2>
					
					<div className="mt-2">
						<label className="mt-2 text-sm">Título</label><br/>
						<input
							name="offerTitle"
							value={ offerTitle }
							onChange={ onOfferInputChange }
							type="text"
							id="residence"
							required="required"
							className="h-10 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-green-600 shadow-sm"/>
					</div>
					
					<div className="mt-2">
						<label className="mt-2 text-sm">Área</label><br/>
						<input
							name="offerArea"
							value={ offerArea }
							onChange={ onOfferInputChange }
							type="text"
							id="residence"
							required="required"
							className="h-10 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-green-600 shadow-sm"/>
					</div>
					
					<div className="mt-2">
						<label className="mt-2 text-sm">Profesión</label><br/>
						<Select
							options={ professions }
							name="offerProfession"
							value={ offerProfession }
							onChange={ (value, event) => {
								if(event.action === 'select-option')
									onOfferInputChange({target: { name: 'offerProfession', value }})
							} }
							placeholder= "Selecciona una profesión"
							noOptionsMessage={() => "La profesión no existe"}
						/>
					</div>
					
					<div className="mt-2">
						<label className="mt-2 text-sm">Pago por</label><br/>
						<Select
							options={ paydayOptions }
							name="offerPayday"
							value={ offerPayday }
							onChange={ (value, event) => {
								if(event.action === 'select-option')
									onOfferInputChange({target: { name: 'offerPayday', value }})
							} }
							placeholder= "Selecciona un pago por tiempo"
							noOptionsMessage={() => "El tipo de pago por tiempo no existe"}
						/>
					</div>
					
					<div className="mt-2">
						<label className="mt-2 text-sm">Tipo de pago</label><br/>
						<Select
							options={ options }
							name="offerPayment"
							value={ offerPayment }
							onChange={ (value, event) => {
								if(event.action === 'select-option')
									onOfferInputChange({target: { name: 'offerPayment', value }})
							} }
							placeholder= "Selecciona un tipo de pago"
							noOptionsMessage={() => "El tipo de pago no existe"}
						/>
					</div>
					
					{
						offerPayment?.value === PAYMENT.fixed ?
							<div className="mt-2">
								<label className="mt-2 text-sm">Costo <small>(El costo no puede ser mayor a 99999)</small></label><br/>
								<input
									type="text"
									name="offerPrice"
									value={ offerPrice }
									onChange={ onOfferInputChange }
									onKeyDown={ (e) => OfferFormFields.priceKeyDown(offerPrice, e)}
									id="description"
									required="required"
									className="h-10 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-green-600 shadow-sm"/>
							</div> : ''
					}
					
					<div className="mt-2">
						<label className="mt-2 text-sm">Descripción</label><br/>
						<textarea
							name="offerDescription"
							value={ offerDescription }
							onChange={ onOfferInputChange }
							id="description"
							required="required"
							className="h-10 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-green-600 shadow-sm"/>
					</div>
					
					<button
						type="submit"
						className="mt-5 bg-green-700 w-full h-10 cursor-pointer text-white rounded-md hover:bg-green-600 hover:outline outline-2 outline-green-600 outline-offset-2 text-sm"
					> Crear oferta </button><br/>
				</form>
			</div>
		</main>
	);
}

export default Offer;