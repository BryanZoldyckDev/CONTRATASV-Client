import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxArchive, faCirclePlus, faPen } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const OfferPage = () => {

    return (
        <main>
          <div className="pt-8">
            <div className="flex flex-col justify-center items-center snap-y h-screen w-screen overflow-scroll">
                <div className="bg-white rounded-lg shadow-lg p-8 m-8">
                    <div className="flex justify-between items-center">
                        <Link to="/talentPage/actividades/ofertas/activas" className="py-2 px-4 rounded bg-green-700 hover:bg-green-900 text-white font-bold">
                            Activas
                        </Link>
                        <Link to="/talentPage/actividades/ofertas/archivadas" className="py-2 px-4 rounded bg-white hover:bg-gray-500 text-black font-bold">
                            Archivadas
                        </Link>
                        
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-10 m-7 overflow-y-auto ">
                <div className="flex flex-col items-center ml-40 mr-40  ">
                        <div className="flex flex-col rounded-lg shadow-lg p-8 m-4">
                            <h1 className="text-2xl font-bold">Titulo de la oferta</h1>
                            <div className="flex flex-row justify-between items-center pl-24 pr-24">
                                <div className="flex flex-row items-center">
                                    <h3 className="text-xl font-bold px-2 py-2 shadow-lg p-4 m-2 ">Salario Esperado: </h3>
                                    <h3 className="text-xl font-bold px-2 py-2 shadow-lg p-4 m-2">Categoria</h3>
                                </div>
                            </div>
                            <p className="text-slate-500 text-clip">Ofrezco mi servicio de plomería especializado en reparación de lavados, tuberías, instalación de fregaderos, instalación de lavadoras, reparación de duchas, cambio de regadera para ducha, reparación de excusados, instalación de excusados, en cuanto a los materiales si serían cobrados al cliente, pero se cuenta con el equipo de herramientas necesarios pa..</p>
                            <div className="flex justify-between items-center pt-8">
                                <button className="py-1 px-2 rounded bg-red-700 hover:bg-red-900 text-1xl text-white font-bold">
                                    <FontAwesomeIcon icon={faBoxArchive} className="text-1xl pr-4 cursor-pointer"/>
                                    Archivar
                                </button>
                                <button className="py-1 px-2 rounded bg-green-700 hover:bg-green-900 text-1xl text-white font-bold">
                                    <FontAwesomeIcon icon={faPen} className="text-1xl pr-4 cursor-pointer"/>
                                    Editar Contrato
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col rounded-lg shadow-lg p-8 m-4">
                            <h1 className="text-2xl font-bold">Titulo de la oferta</h1>
                            <div className="flex flex-row justify-between items-center pl-24 pr-24">
                                <div className="flex flex-row items-center">
                                    <h3 className="text-xl font-bold px-2 py-2 shadow-lg p-4 m-2 ">Salario Esperado: </h3>
                                    <h3 className="text-xl font-bold px-2 py-2 shadow-lg p-4 m-2">Categoria</h3>
                                </div>
                            </div>
                            <p className="text-slate-500 text-clip">Ofrezco mi servicio de plomería especializado en reparación de lavados, tuberías, instalación de fregaderos, instalación de lavadoras, reparación de duchas, cambio de regadera para ducha, reparación de excusados, instalación de excusados, en cuanto a los materiales si serían cobrados al cliente, pero se cuenta con el equipo de herramientas necesarios pa..</p>
                            <div className="flex justify-between items-center pt-8">
                                <button className="py-1 px-2 rounded bg-red-700 hover:bg-red-900 text-1xl text-white font-bold">
                                    <FontAwesomeIcon icon={faBoxArchive} className="text-1xl pr-4 cursor-pointer"/>
                                    Archivar
                                </button>
                                <button className="py-1 px-2 rounded bg-green-700 hover:bg-green-900 text-1xl text-white font-bold">
                                    <FontAwesomeIcon icon={faPen} className="text-1xl pr-4 cursor-pointer"/>
                                    Editar Contrato
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col rounded-lg shadow-lg p-8 m-4">
                            <h1 className="text-2xl font-bold">Titulo de la oferta</h1>
                            <div className="flex flex-row justify-between items-center pl-24 pr-24">
                                <div className="flex flex-row items-center">
                                    <h3 className="text-xl font-bold px-2 py-2 shadow-lg p-4 m-2 ">Salario Esperado: </h3>
                                    <h3 className="text-xl font-bold px-2 py-2 shadow-lg p-4 m-2">Categoria</h3>
                                </div>
                            </div>
                            <p className="text-slate-500">Ofrezco mi servicio de plomería especializado en reparación de lavados, tuberías, instalación de fregaderos, instalación de lavadoras, reparación de duchas, cambio de regadera para ducha, reparación de excusados, instalación de excusados, en cuanto a los materiales si serían cobrados al cliente, pero se cuenta con el equipo de herramientas necesarios pa..</p>
                            <div className="flex justify-between items-center pt-8">
                                <button className="py-1 px-2 rounded bg-red-700 hover:bg-red-900 text-1xl text-white font-bold">
                                    <FontAwesomeIcon icon={faBoxArchive} className="text-1xl pr-4 cursor-pointer"/>
                                    Archivar
                                </button>
                                <button className="py-1 px-2 rounded bg-green-700 hover:bg-green-900 text-1xl text-white font-bold">
                                    <FontAwesomeIcon icon={faPen} className="text-1xl pr-4 cursor-pointer"/>
                                    Editar Contrato
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-end">
                            <button className="py-2 px-4 rounded bg-green-700 hover:bg-green-900 text-white font-bold text-1xl">
                            <FontAwesomeIcon icon={faCirclePlus} className="text-2xl pr-4 cursor-pointer"/>
                                Agregar Oferta
                            </button>
                    </div>
                </div>
            </div>
            
          </div>  
          

        </main>
    );
}

export default OfferPage;