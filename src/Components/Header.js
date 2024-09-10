import React from 'react';
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav className="shadow-dark-mild relative flex w-full flex-nowrap items-center justify-between">
        <div className="flex w-full flex-wrap items-center justify-between px-9 py-10">
        <h1 className="text-3xl font-bold sm:text-3xl">
                <span className="text-purple-500">Luis Fernando</span> <span className="text-white">Ramirez Rivas</span>
        </h1>          
          <div
            className="!visible mt-2 hidden grow basis-full items-center lg:mt-0 lg:!flex lg:basis-auto"
            id="navbarSupportedContent2"
            data-twe-collapse-item>
            <ul
              className="list-style-none me-auto flex flex-col ps-0 lg:mt-1 lg:flex-row"
              data-twe-navbar-nav-ref>
              <li
                className="my-4 ps-2 lg:my-0 lg:pe-1 lg:ps-2"
                data-twe-nav-item-ref>
                <Link
                  className="text-black lg:px-2 dark:text-white"
                  aria-current="page"
                  href="/"
                  data-twe-nav-link-ref
                  >Home</Link
                >
              </li>
              <li
                className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0"
                >
                <Link
                  className="text-black lg:px-2 dark:text-white"
                  href="/experience"
                  
                  >work experecience</Link
                >
              </li>

              <li
                className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0"
                >
                <Link
                  className="text-black lg:px-2 dark:text-white"
                  href="/projects"
                  >projects</Link
                >
              </li> 
            </ul>
          </div>
        </div>
      </nav>
  </header>
  );
}
