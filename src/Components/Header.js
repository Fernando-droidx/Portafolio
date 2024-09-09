import React from 'react';
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-darkGray border-b p-4 text-white dark:border-black">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex items-center">
              <Link href="/">{/* Aquí pondremos el logo */}
                  <Image src="/images/2.png" className="mr-10 size-20" width={100} height={100} alt="Logo UDG" />
              </Link>
                <div>
                <h1 className="gradient-text text-3xl font-bold sm:text-3xl">
                    Luis Fernando Ramirez Rivas
                </h1>

            </div>
          </div>
          <nav className="mt-4 flex w-full justify-between md:mt-0 lg:w-auto">
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
                  className="size-7"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div className="hidden w-full lg:flex lg:w-auto lg:items-center" id="navbarSupportedContent">
              <ul className="flex flex-col lg:flex-row lg:gap-4">
                <li>
                  <Link
                    className="hover:text-hover-purple block py-2 text-black/60 transition duration-200 lg:py-0 dark:text-white/60"
                    href="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-hover-purple block py-2 text-black/60 transition duration-200 lg:py-0 dark:text-white/60"
                    href="/projects"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-hover-purple block py-2 text-black/60 transition duration-200 lg:py-0 dark:text-white/60"
                    href="/experience"
                  >
                    Work Experience
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
