import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../../utils/router/routes.js';

const SolicitudesUserR = () => {
    return (
        <main>
          <section className="w-screen h-screen pt-8">
            <article className="flex flex-col justify-center items-center snap-y h-screen w-screen overflow-scroll">
                <div className="bg-white rounded-lg shadow-lg p-4 m-4">
                    <div className="flex justify-between items-center">
                        <Link to={ROUTES.clientRequestsPendingPage}  className="py-2 px-4 rounded bg-white hover:bg-gray-500 text-black font-bold">
                            Pendientes
                        </Link>
                        <Link to={ROUTES.clientRequestsDeclinedPage} className="py-2 px-4 rounded bg-green-700 hover:bg-green-900 text-white font-bold ">
                            Rechazadas
                        </Link>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-8 m-4 overflow-y-auto">
                    <div className="flex flex-col items-center ml-auto mr-auto  ">
                        <div className="flex flex-col rounded-lg shadow-lg p-4">
                            <h2 className="text-2xl text-slate-800 font-bold">Has recibido una solicitud de servicio para la oferta: <h3 className="text-1xl text-green-500">“Ofrezco servicio de plomería en el área metropolitana de San Salvador”</h3></h2>
                            <div className="flex flex-row justify-center pl-24 pr-24">
                                <div className="flex flex-col items-start justify-start">
                                    <div>
                                        <h3 className="text-xl font-bold px-2 py-2 shadow-lg p-4 m-2 bg-green-400 rounded flex flex-row">Cliente: <h4 className="bg-white">HOLA</h4> </h3>
                                        <h3 className="text-xl font-bold px-2 py-2 shadow-lg p-4 m-2 bg-green-400 rounded flex flex-row">Salario acordado: <h4 className="bg-white">HOLA</h4> </h3>
                                        <h3 className="text-xl font-bold px-2 py-2 shadow-lg p-4 m-2 bg-green-400 rounded flex flex-row">Inicio de contrato: <h4 className="bg-white">HOLA</h4> </h3>
                                        <h3 className="text-xl font-bold px-2 py-2 shadow-lg p-4 m-2 bg-green-400 rounded flex flex-row">Finalizacion de contrato: <h4 className="bg-white">HOLA</h4> </h3>
                                        <h3 className="text-xl font-bold px-2 py-2 shadow-lg p-4 m-2 bg-green-400 rounded flex flex-row">Numero de contacto: <h4 className="bg-white">HOLA</h4> </h3>
                                        <h3 className="text-xl font-bold px-2 py-2 shadow-lg p-4 m-2 bg-green-400 rounded flex flex-row">Estado de contrato: <h4 className="bg-white">HOLA</h4> </h3>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="flex justify-end items-center pt-8">
                                <h2 className=" text-red-900 font-mono">
                                    rechazada
                                </h2>
                            </div>
                        </div>       
                    </div>
                </div>
            </article>
          </section>
           

        </main>
    );
}

export default SolicitudesUserR;