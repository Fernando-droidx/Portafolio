import React from "react";
import Layout from "../Components/Layout";

export default function Explanation(){
    return(
        <div className= "flex flex-col min-h-screen">
            <Layout>
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-3xl font-bold">Presento las explicaciones de los ejercicios de programacion</h1>
                   
                    <p className="mt-4"> de los cuales hago los mas populares, de leetcode o de cualquier ambito</p>
                </div>
            </Layout>
        </div>
    );
}