import React from "react";
import fs from 'fs';
import path from 'path';
import Layout from "../Components/Layout";
import Image from "next/image";

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), 'public', 'projects.json');
    const jsonData = fs.readFileSync(filePath, 'utf-8');
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
          <div className="flex justify-between flex-col ">
            <Layout>
              <div className="flex justify-between  flex-col px-32 py-8">
                <h1 className="text-3xl font-bold">Proyectos</h1>
                <p className="mt-4">Aquí tengo mis proyectos en los que he trabajado tanto propios como en equipo.</p>
                <ul>
                  {projects.map((project, index) => (
                    <li key={index} className="p-6 bg-black rounded-lg shadow-lg">
                          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                              <a href="#">
                                  <Image class="rounded-t-lg" src={project.image} alt="" width={150} height={150} /> {/* Imagen */}
                              </a>
                              <div class="p-5 ">
                                  <a href="#">
                                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.title}</h5>
                                  </a>
                                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{project.description}</p>
                                  <a 
                                    href={project.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-violet-700 rounded-lg  focus:outline-none dark:focus:ring-blue-800 "
                                  >
                                    
                                    Ver Proyecto
                                  </a>
                                  <kbd class="px-6 py-1.5 text-xs font-semibold text-Black-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">{project.Tech}</kbd>
                              </div> 
                        </div>
                    </li>
                  ))}
                </ul>
                 
              </div>
            </Layout>
          </div>
        );
    };
      
export default Projects;
