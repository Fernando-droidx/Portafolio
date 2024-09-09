import React from "react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="relative flex flex-col items-center bg-gray-50 text-center dark:bg-violet-500 dark:border-gray-800">
            {/* Desvanecimiento en la parte superior del footer */}
            <div className="pointer-events-none absolute inset-x-0 -top-10 h-10 bg-gradient-to-b from-transparent to-violet-500"></div>

            <div className="container py-9">
                <div className="mb-6 flex justify-center space-x-4">
                    {/* Email link */}
                    <Link
                        href="mailto:luisramirezrivas121@gmail.com"
                        className="text-surface rounded-full p-3 transition-all duration-150 ease-in-out hover:bg-neutral-100 dark:text-white dark:hover:bg-secondary-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-400"
                        aria-label="Email"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            className="bi bi-envelope"
                            viewBox="0 0 16 16"
                        >
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                        </svg>
                    </Link>

                    {/* GitHub link */}
                    <Link
                        href="https://github.com/Fernando-droidx"
                        className="text-surface rounded-full p-3 transition-all duration-150 ease-in-out hover:bg-neutral-100 dark:text-white dark:hover:bg-secondary-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-400"
                        aria-label="GitHub"
                    >
                        <svg
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            width="24"
                            height="24"
                        >
                            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                        </svg>
                    </Link>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="w-full py-4 bg-violet-500 text-white text-sm dark:bg-violet-700">
                <p>&copy; 2024 Fernando. All Rights Reserved.</p>
            </div>
        </footer>
    );
}
