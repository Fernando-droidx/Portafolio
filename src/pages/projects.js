import React from "react";
import fs from 'fs';
import path from 'path';
import Layout from "../Components/Layout";
import Image from "next/image";
import Link from "next/link";

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), 'public/json', 'projects.json');
    const jsonData = fs.readFileSync(filePath, 'utf-8')
    const projects = JSON.parse(jsonData);

    return {
          props: {
          projects : projects||[]
          }
    };
}


const Projects = ({ projects }) => {
    if (!projects || !Array.isArray(projects)) {
        return <div>No cargan los proyectos</div>;
    }

    return (
        <Layout>
            <div className="px-10">
                <h5 className="mb-4 text-2xl font-bold dark:text-white text-center  gradient-text">Proyectos</h5>
                
            </div>

            {/* Contenedor Flex con scroll horizontal, centrado y clase custom-scrollbar */}
            <div className="flex overflow-x-scroll gap-4 px-10 pb-16 min-h-[150px] custom-scrollbar mx-auto w-2/3">
                {projects.map((project, index) => (
                    <div key={index} className="flex-shrink-0 w-64 p-4">
                        <div className="bg-black rounded-lg shadow-2xl hover:shadow-purple-700 transition duration-300 ease-in-out">
                            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <Link href="#">
                                    <Image className="rounded-t-lg" src={project.image} alt={project.title} width={150} height={150} />
                                </Link>
                                <div className="p-5">
                                    <Link href="#">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.title}</h5>
                                    </Link>
                                    <p className="mb-3 text-gray-700 dark:text-gray-400">{project.description}</p>
                                    <Link
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-violet-700 rounded-lg focus:outline-none dark:focus:ring-blue-800"
                                    >
                                        Ver Proyecto
                                    </Link>
                                    <kbd className="px-6 py-1.5 text-xs font-semibold text-black-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">{project.Tech}</kbd>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="h-32"></div>
        </Layout>
    );
};

export default Projects;

