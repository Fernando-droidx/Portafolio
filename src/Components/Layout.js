
import React from "react"
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
    return (
    <div className="flex min-h-screen flex-col">
        <Header />
            <main className="fade-out grow">
                {children}

            </main>
        <Footer />
    </div>
    );
}