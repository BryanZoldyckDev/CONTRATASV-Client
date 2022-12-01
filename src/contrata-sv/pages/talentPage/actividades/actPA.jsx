import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faFileSignature } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../../utils/router/routes.js';

const ActP = () => {
    return (
        <main>
          <section className="w-full pb-24 pt-28">
            <div className="flex justify-center items-center ">
              <div>
                <div className="grid xl:grid-cols-1 p-20 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-10 bg-green-800 rounded shadow-inner">
                  <Link to={ROUTES.contratistActivitiesOffersActivePage} className="md:w-full lg:w-full w-full sm:w-full xl:w-fit flex flex-col sm:flex-row sm:px-6 py-6 sm:py-12 sm:space-x-10 sm:border-r-0 bg-green-500 hover:bg-green-900 cursor-pointer rounded">
                    <div className="flex flex-row">
                    <FontAwesomeIcon icon={faBriefcase} className="text-5xl text-white mr-1 pt-2"/>
                      <h1 className="text-2xl text-white pl-5">Ofertas para clientes</h1>
                    </div>
                  </Link>
                  <Link to={ROUTES.contratistActivitiesContractsActivePage} className="md:w-full lg:w-full w-full sm:w-full xl:w-fit flex flex-col sm:flex-row sm:px-6 py-6 sm:py-12 sm:space-x-10 sm:border-r-0 bg-green-500 hover:bg-green-900 cursor-pointer rounded" >
                    <div className="flex flex-row">
                    <FontAwesomeIcon icon={faFileSignature} className="text-5xl text-white mr-1 pt-2"/>
                    <h1 className="text-2xl text-white pl-5">Tus contratos activos</h1>
                  </div>
                  </Link>
                </div>
              </div>
            </div>
          </section>  
        </main>
    );
}

export default ActP;