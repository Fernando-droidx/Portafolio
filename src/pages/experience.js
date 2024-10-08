import React from "react";
import fs from 'fs';
import path from 'path';
import Layout from "../Components/Layout";
import Image from "next/image";
import Link from "next/link";

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), 'public/json', 'experienceCers.json');
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
                        <ol className="relative border-s border-gray-200 dark:border-gray-700">       
                        <li className="ms-4">
                                <div className="absolute -start-1.5 mt-1.5 size-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
                                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Febrero 2023 - junio 2023</time>
                                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Asador de richard</h2>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Freelancer </h3>
                                <p className="text-base font-normal text-gray-500 dark:text-gray-400">Ecommerce de un restaurante</p>
                            </li>
                            <br/>           
                            <li className="mb-10 ms-4">
                                <div className="absolute -start-1.5 mt-1.5 size-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
                                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Agosto 2023 - Octubre 2023</time>
                                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">IBM</h2>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Test technician</h3>
                                
                                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Registro de las operaciones de entrada y salida de servidores utilizados para realizar pruebas de software y hardware.</p>
                                
                            </li>
                          
                            <li className="mb-10 ms-4">
                                <div className="absolute -start-1.5 mt-1.5 size-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
                                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Febrero 2024 - junio 2024 </time>
                                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">AnbarPaints</h2>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Freelancer</h3>
                                <p className="text-base font-normal text-gray-500 dark:text-gray-400">Desarrolle el front y el back-end de un punto de venta de una tienda de pinturas en php/laravel</p>
                            </li>
                        </ol>
                        <Link href="/Docs/FernandoCV.pdf" className="inline-flex items-center rounded-lg bg-violet-700 px-10 py-2 text-center text-sm font-medium text-white focus:outline-none dark:focus:ring-blue-800">Ver CV <svg className="ms-2 size-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"></svg>
                            </Link>
                        
                </div>

                {/* Elemento a la derecha */}
                <div className="custom-scrollbar mx-auto  flex min-h-[150px] w-2/4 gap-4 overflow-x-scroll rounded-lg px-10 pb-16 "> {/* flex-wrap para que los elementos se envuelvan */}
                
                    {experienceCers.map((experienceCer, index) => (
                        <div key={index} className="w-64 shrink-0 p-4"> {/* Cada certificado ocupa 1/3 del ancho */}
                        <h1  className="mb-4 text-2xl font-bold dark:text-white">Certificado</h1>
                            <div className="rounded-lg bg-black">

                                <div className="max-w-sm rounded-lg  bg-white  shadow-2xl transition duration-300  ease-in-out hover:shadow-purple-700 dark:bg-gray-800 "> {/* Card de cada certificado*/}
                                    <Link href="#">
                                        <Image className="rounded-t-lg" src={experienceCer.image} alt="" width={150} height={150} />
                                    </Link>
                                    <div className="p-2">
                                        <Link href="#">
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{experienceCer.title}</h5>
                                        </Link>
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{experienceCer.company}</p>
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{experienceCer.description}</p>
                                        <Link 
                                            href={experienceCer.link} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="inline-flex items-center rounded-lg bg-violet-700 px-3 py-2 text-center text-sm font-medium text-white focus:outline-none dark:focus:ring-blue-800"
                                        >
                                            Ver Certificado
                                        </Link>
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


