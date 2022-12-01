import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxArchive, faPen } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const OfferCard = ({title, payment, payday, profession, area, description}) => {
	return(
		<div className="flex flex-wrap rounded-lg shadow-lg p-8 m-4 lg:w-3/12 md:w-4/12 sm:w-5/12">
			<h1 className="text-2xl font-bold green-color w-full">{title}</h1>
			{/* <div> */}
			{/* 	Área: {area} */}
			{/* </div> */}
			<div className="flex flex-row flex-wrap items-center justify-between mt-2 mb-1 w-full">
				<div>
					<h2 className="font-bold">Salario Esperado</h2>
					<div className="flex justify-center">{payment}</div>
				</div>
				<div>
					<h2 className="font-bold">Categoría</h2>
					<div className="flex justify-center">{profession}</div>
				</div>
			</div>
			<p className="text-slate-500 text-justify text-clip w-full mt-2">{description}</p>
			<div className="flex justify-between items-center mt-4 w-full">
				<button className="py-1 px-2 rounded bg-red-700 hover:bg-red-900 text-1xl text-white font-bold">
					<FontAwesomeIcon icon={faBoxArchive} className="text-1xl pr-4 cursor-pointer"/>
					Archivar
				</button>
				<button className="py-1 px-2 rounded bg-green-700 hover:bg-green-900 text-1xl text-white font-bold">
					<FontAwesomeIcon icon={faPen} className="text-1xl pr-4 cursor-pointer"/>
					Editar
				</button>
			</div>
		</div>
	);
};

export default OfferCard;
