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
            <div className="px-10">
                <h5 className="mb-2 text-2xl font-bold dark:text-white">Certificados</h5>
            </div>

            <div className="flex justify-between"> {/* Flexbox para alinear a la izquierda y derecha */}
                {/* Contenedor de los certificados */}
                <div className="flex flex-wrap gap-4 w-2/3"> {/* flex-wrap para que los elementos se envuelvan */}
                    {experienceCers.map((experienceCer, index) => (
                        <div key={index} className="w-1/3 p-4"> {/* Cada certificado ocupa 1/3 del ancho */}
                            <div className="bg-black rounded-lg shadow-lg">
                                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    <a href="#">
                                        <Image className="rounded-t-lg" src={experienceCer.image} alt="" width={150} height={150} />
                                    </a>
                                    <div className="p-5">
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

                {/* Elemento a la derecha */}
                <div className="w-1/4 px-10"> {/* Ajustamos el ancho del contenido derecho */}
                <div>
                    <h5 className="mb-2 text-2xl font-bold dark:text-white">Experiencia</h5>
                </div>
                    <a href="#" className="group relative block h-64 sm:h-80 lg:h-96">
                        <span className="absolute inset-0 border-2 border-dashed border-black"></span>

                        <div className="relative flex h-full transform items-end  bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2 rounded-lg">
                            <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-10 sm:size-12"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>

                                <h2 className="mt-4 text-xl font-medium sm:text-2xl dark:text-white">Test technician</h2>
                            </div>

                            <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
                                <h3 className="mt-4 text-xl font-medium sm:text-2xl dark:text-white">Test technician en ibm</h3>

                                <p className="mt-4 text-sm sm:text-base dark:text-white">
                                    Trabaje en ibm por 2 meses durante agosto del 2023 a octubre del 2023, fue un trabajo temporal 
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </Layout>
    );
};

export default ExperienceCer;


