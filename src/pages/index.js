import React from "react";
import Layout from "../Components/Layout";
import Image from "next/image";

export default function Index(){
    return(
            <Layout>
                <div className="flex justify-center space-x-4">
                    <div className="w-64 flex justify-center items-center">
                            <div className="mx-auto px-10 py-8">
                            <div className="container mx-auto py-2">
                                <img src="images/foto.jpeg" className="mb-4 w-32 rounded-lg" alt="Fernando" />
                                <h5 className="mb-2 text-xl font-medium leading-tight">Luis Fernando Ramirez Rivas</h5>
                                <p className="text-neutral-500 dark:text-neutral-400">Computer Science Engineer</p>
                            </div>
                            </div>
                        </div>
                        <div className="w-90">
                            <div className="mx-auto px-10 py-8">
                                <h1 className="mb-2 text-3xl font-bold">Bienvenido!</h1>
                                <p className="mb-2 text-xl font-medium leading-tight">¿Quién soy?</p>
                                <p className="text-justifytext-neutral-500 dark:text-neutral-400">
                                    Soy un estudiante de 8vo semestre de la carrera de Ingeniería en Ciencias Computacionales<br />
                                    por parte de la Universidad de Guadalajara.<br />
                                </p>
                                <br/>
                                <h1 className="mb-2 text-3xl font-bold">Por que hice este sitio?</h1>
                                <p className="text-neutral-500 dark:text-neutral-400">
                                Me dedico mas que a nada a ser programador en cuanto a AI, pero tambien me gusta mucho el tema de ciberseguridad.<br />
                                    Si bien no soy un desarrollador Web de tiempo completo, pienso que no se me da mal, Yo me considero mas versatil<br />
                                    Me Gusta mucho todo lo que tiene que ver con la IA, Redes Neuronales Profundas y Machine Learning<br /> 
                                    Ya que se varios paradigmas de programacion, aparte mi resilencia a aprender es muy buena.
                                </p>
                            </div>
                        </div>
                        <div className="w-64">
                            <div className="mx-auto px-9 py-8">
                            <p className="mb-2 text-xl font-medium leading-tight">Mis lenguajes Favoritos?</p>
                            <p className="text-neutral-500 dark:text-neutral-400">
                                C# y Python son de mis favoritos.<br />
                            </p>
                            </div>
                            <div className="mx-auto px-9 py-8">
                        <p className="mb-2 text-xl font-medium leading-tight">Que idiomas se?</p>
                            <p className="text-neutral-500 dark:text-neutral-400">
                                Hasta el momento hablo solo 2 idiomas, Español e Ingles.<br />
                            </p>
                            </div>
                        </div>
            </div>
           
           
            <div className="h-32"></div>
        </Layout>
    );
}