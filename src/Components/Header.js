import React from 'react';

export default function Header() {
  return (
    <header className="border-b dark:border-black bg-darkGray text-white p-4">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex items-center">
                {/* Aquí pondremos el logo */}
                <img src="/images/2.png" className="w-20 h-20 mr-10" alt="Logo UDG" />
                <div>
                <h1 className="text-3xl font-bold sm:text-3xl gradient-text">
                    Luis Fernando Ramirez Rivas
                </h1>
                <p className="mt-1.5 text-sm text-gray-500 dark:text-gray-400">
                    Soy estudiante de Ingenieria en ciencias computacionales por parte de la Universidad de Guadalajara
              </p>
            </div>
          </div>
          <nav className="flex items-center justify-between w-full lg:w-auto mt-4 md:mt-0">
            <div className="flex items-center lg:hidden">
              <button
                className="text-black/50 dark:text-neutral-200"
                type="button"
                data-twe-collapse-init
                data-twe-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div className="hidden w-full lg:flex lg:items-center lg:w-auto" id="navbarSupportedContent">
              <ul className="flex flex-col lg:flex-row lg:gap-4">
                <li>
                  <a
                    className="block py-2 text-black/60 dark:text-white/60 transition duration-200 hover:text-hover-purple lg:py-0"
                    aria-current="page"
                    href="./"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className="block py-2 text-black/60 dark:text-white/60 transition duration-200 hover:text-hover-purple lg:py-0"
                    href="./projects"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    className="block py-2 text-black/60 dark:text-white/60 transition duration-200 hover:text-hover-purple lg:py-0"
                    href="./explanation"
                  >
                    Leetcode Explanation
                  </a>
                </li>
                <li>
                  <a
                    className="block py-2 text-black/60 dark:text-white/60 transition duration-200 hover:text-hover-purple lg:py-0"
                    aria-current="page"
                    href="./experience"
                  >
                    Work Experience
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <nav className="flex items-center justify-between w-full lg:w-auto mt-4 md:mt-0">
            <div className="flex items-center">
              <a
                className="text-black/60 dark:text-white/60 transition duration-200 hover:text-black/80 dark:hover:text-white/80"
                href="#"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  {/* Puedes agregar cualquier contenido adicional aquí */}
                </svg>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
