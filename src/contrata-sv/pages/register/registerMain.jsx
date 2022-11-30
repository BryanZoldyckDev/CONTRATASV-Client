import React from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterMain = () => {
    const navigate = useNavigate();
    const ClientHandler = () => {
        navigate("/register/client");
    }
    const TalentHandler = () => {
        navigate("/register/contratist");
    }

    return(
    <main className="pt-20">
        <div className="w-full flex justify-center pl-16 pr-16">
            <div className="flex flex-wrap">
                <div className="flex justify-center mb-5 sm:mt-8">
                    <h2 className=" text-green-500 sm:text-4xl font-bold"> Selecciona el tipo de cuenta que deseas crear</h2>
                </div>
            
                <div className="grid xl:grid-cols-2 p-10 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-10 bg-green-800">
                    <div className="md:w-full lg:w-full w-full sm:w-full xl:w-fit flex flex-col sm:flex-row px-6 py-6 sm:py-10 sm:space-x-10 sm:border-r-0 bg-green-500 hover:bg-green-900 cursor-pointer" onClick={ClientHandler}>
                        <div id="clientBox">
                            <h1 className="sm:text-4xl font-bold text-white text-center pb-10">CLIENTE</h1>
                            <p className="sm:text-2xl font-bold text-white text-justify">Estás en busca de contactar expertos en su área que puedan cumplir con determinado trabajo</p>
                        </div>
                    </div>
                    <div className="md:w-full lg:w-full w-full sm:w-full xl:w-fit flex flex-col sm:flex-row px-6 py-6 sm:py-10 sm:space-x-10 sm:border-r-0 bg-green-500 hover:bg-green-900 cursor-pointer" onClick={TalentHandler}>
                        <div id="talentBox">
                        <h1 className="sm:text-4xl font-bold text-white text-center pb-10">TALENTO</h1>
                        <p className="sm:text-2xl font-bold text-white text-justify">Eres un experto en determinada área y buscas ofrecer tus servicios a clientes que valoren tu trabajo</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    );
}

export default RegisterMain;