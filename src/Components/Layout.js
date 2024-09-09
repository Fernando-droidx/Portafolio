
import React from "react"
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function Layout({ children }) {
    return (
    <div className="flex flex-col min-h-screen">
        <Header />
            <main className="flex-grow fade-out">
                {children}

            </main>
        <Footer />
    </div>
    );
}