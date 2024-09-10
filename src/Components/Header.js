import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b bg-black p-4 text-white dark:border-black">
      <div className="mx-auto max-w-screen-xl p-4 sm:p-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/images/2.png"
                className="mr-4"
                width={60}
                height={60}
                alt="Logo UDG"
                priority
              />
            </Link>
            <div>
              <h1 className="text-3xl font-bold sm:text-3xl">
                <span className="text-purple-500">Luis Fernando</span> <span className="text-white">Ramirez Rivas</span>
              </h1>
            </div>
          </div>
          <nav className="mt-4 md:mt-0">
            <ul className="flex gap-8 text-sm">
              <li>
                <Link
                  className="text-gray-400 transition duration-200 hover:text-white"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 transition duration-200 hover:text-white"
                  href="/projects"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 transition duration-200 hover:text-white"
                  href="/experience"
                >
                  Work Experience
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
