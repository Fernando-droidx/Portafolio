import React from "react";
import fs from 'fs';
import path from 'path';
import Layout from "../Components/Layout";
import Image from "next/image";

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), 'public', 'experienceCers.json');
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    const experienceCers = JSON.parse(jsonData);

    return {
        props: {
            experienceCers : experienceCers ||[]
        }
    };
}

const ExperienceCer = ({ experienceCers }) => {
    return (
        <Layout> 
            <div className="flex justify-between"> {/* Flexbox para alinear a la izquierda y derecha */} {/* Contenedor de los certificados */} 
                <div className="w-1/3 px-10"> {/* Ajustamos el ancho del contenido derecho */} 
                    <div > 
                        <h5 className="mb-4 text-2xl font-bold dark:text-white">Experiencia</h5> 
                    </div> 
                        <ol class="relative border-s border-gray-200 dark:border-gray-700">                  
                            <li class="mb-10 ms-4">
                                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Agosto 2023 - Octubre 2023</time>
                                <h2 class="text-lg font-semibold text-gray-900 dark:text-white">IBM</h2>
                                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Test technician</h3>
                                
                                <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Registro de las operaciones de entrada y salida de servidores utilizados para realizar pruebas de software y hardware.</p>
                                
                            </li>
                            <li class="mb-10 ms-4">
                                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Febrero 2024 - junio 2024 </time>
                                <h2 class="text-lg font-semibold text-gray-900 dark:text-white">AnbarPaints</h2>
                                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Freelancer</h3>
                                <p class="text-base font-normal text-gray-500 dark:text-gray-400">Desarrolle el front y el back-end de un punto de venta de una tienda de pinturas en php/laravel</p>
                            </li>
                            <li class="ms-4">
                                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Mayo 2024 - Actualidad</time>
                                <h2 class="text-lg font-semibold text-gray-900 dark:text-white">UDG</h2>
                                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Desarrollador sin paga xd</h3>
                                <p class="text-base font-normal text-gray-500 dark:text-gray-400">Website para saber tipo de cobros en las horas de las personas para UDG desde el costo por hora y saber que impuestos cobrar XD</p>
                            </li>
                            <br/>
                        </ol>
                        <a href="/Docs/FernandoCV.pdf" class="inline-flex items-center px-8 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Ver CV <svg class="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"></svg>
                            </a>
                        
                </div>

                {/* Elemento a la derecha */}
                <div className="flex overflow-x-scroll gap-4 px-10 pb-16 min-h-[150px] custom-scrollbar mx-auto w-2/4 rounded-lg"> {/* flex-wrap para que los elementos se envuelvan */}
                
                    {experienceCers.map((experienceCer, index) => (
                        <div key={index} className="flex-shrink-0 w-64 p-4"> {/* Cada certificado ocupa 1/3 del ancho */}
                        <h1  className="mb-4 text-2xl font-bold dark:text-white">Certificado</h1>
                            <div className="bg-black rounded-lg shadow-lg">
                                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    <a href="#">
                                        <Image className="rounded-t-lg" src={experienceCer.image} alt="" width={150} height={150} />
                                    </a>
                                    <div className="p-2">
                                        <a href="#">
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{experienceCer.title}</h5>
                                        </a>
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{experienceCer.company}</p>
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{experienceCer.description}</p>
                                        <a 
                                            href={experienceCer.link} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-violet-700 rounded-lg focus:outline-none dark:focus:ring-blue-800"
                                        >
                                            Ver Certificado
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="h-32"></div>
        </Layout>
    );
};

export default ExperienceCer;


