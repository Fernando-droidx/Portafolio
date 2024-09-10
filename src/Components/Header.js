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
          
        </div>
      </nav>
  </header>
  );
}
