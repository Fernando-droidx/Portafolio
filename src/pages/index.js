import React from "react";
import Layout from "../Components/Layout";

export default function Index(){
    return(
            <Layout>
                <div className="flex justify-center space-x-4">

                <div className="w-64 flex justify-center items-center">
                        <div className="mx-auto px-10 py-8">
                        <div className="container mx-auto py-2">
                            <img src="https://tecdn.b-cdn.net/img/new/avatars/5.webp" className="mb-4 w-32 rounded-lg" alt="Avatar" />
                            <h5 className="mb-2 text-xl font-medium leading-tight">Luis Fernando Ramirez Rivas</h5>
                            <p className="text-neutral-500 dark:text-neutral-400">Computer Science Engineer</p>
                        </div>
                        </div>
                    </div>
                    <div className="w-90">
                        <div className="mx-auto px-10 py-8">
                        <h1 className="mb-2 text-3xl font-bold">Bienvenido!</h1>
                        <p className="mb-2 text-xl font-medium leading-tight">¿Quién soy?</p>
                        <p className="text-neutral-500 dark:text-neutral-400">
                            Soy un estudiante de 8vo semestre de la carrera de Ingeniería en Ciencias Computacionales<br />
                            por parte de la Universidad de Guadalajara<br />
                        </p>
                        <br/>
                        <h1 className="mb-2 text-3xl font-bold">Por que hice este sitio?</h1>
                        <p className="text-neutral-500 dark:text-neutral-400">
                            Si bien no soy un desarrollador Web, pienso que no se me da mal, Yo me considero mas versatil<br />
                            Ya que se varios paradigmas de programacion, aparte mi resilencia a aprender es muy grande <br />
                            puedo aprender cualquier lenguaje muy rapido, Soy de los que piensa que no es lenguaje<br /> 
                            sino como pienses que uses el lenguaje.
                        </p>
                        
                        </div>
                        
                    </div>
                    <div className="w-64">
                        <div className="mx-auto px-9 py-8">
                        <p className="mb-2 text-xl font-medium leading-tight">¿A qué me dedico?</p>
                        <p className="text-neutral-500 dark:text-neutral-400">
                            Soy el mejor fokin programador que vas a fokin conocer<br />
                        </p>
                        </div>
                        <div className="mx-auto px-9 py-8">
                        <p className="mb-2 text-xl font-medium leading-tight">¿Donde Fokin estudie??</p>
                        <p className="text-neutral-500 dark:text-neutral-400">
                            En el fokin CUTonala alaberga<br />
                        </p>
                        </div>
                    </div>
                    
            </div>
        </Layout>
    );
}