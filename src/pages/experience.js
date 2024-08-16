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

const ExperienceCer = ({experienceCers}) =>{
    
    return(
            <Layout>
                <div className="flex justify-end px-10" >
                    <ul className="space-y-2">
                    <div className="px-10">
                    <h1 className="text-3xl font-bold">Certificados</h1>
                    </div>
                        {experienceCers.map((experienceCer, index) => (
                            <li key={index} className="p-6 bg-black rounded-lg shadow-lg">
                                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    <a href="#">
                                        <Image class="rounded-t-lg" src={experienceCer.image} alt="" width={150} height={150} /> {/* Imagen */}
                                    </a>
                                    <div class="p-5 ">
                                        <a href="#">
                                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{experienceCer.title}</h5>
                                        </a>
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{experienceCer.company}</p>
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{experienceCer.description}</p>
                                        <a 
                                            href={experienceCer.link} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-violet-700 rounded-lg  focus:outline-none dark:focus:ring-blue-800 "
                                        >
                                            Ver Certificado
                                        </a>
                                    </div> 
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                
            </Layout>
    )
};
export default ExperienceCer;