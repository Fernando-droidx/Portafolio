import React from "react";

export default function Footer() {
    return (
        <footer className="relative flex flex-col items-center bg-zinc-50 text-center text-surface bg-gray-50 dark:border-gray-800 dark:bg-violet-500">
            {/* Desvanecimiento en la parte superior del footer */}
            <div className="absolute inset-x-0 -top-10 h-10 bg-gradient-to-b from-transparent to-violet-500 pointer-events-none"></div>

            {/* Cambia el color con estas clases
                bg-gray-50 dark:border-gray-800 dark:bg-gray-900
            */}
            <div className="container pt-9">
                <div className="mb-6 flex justify-center space-x-2">
                <a
                    href="#!"
                    type="button"
                    className="rounded-full bg-transparent p-3 font-medium uppercase leading-normal text-surface transition duration-150 ease-in-out hover:bg-neutral-100 focus:outline-none focus:ring-0 dark:text-white dark:hover:bg-secondary-900"
                    data-twe-ripple-init
                >
                    <span className="[&>svg]:h-5 [&>svg]:w-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 320 512">
                        <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                    </svg>
                    </span>
                </a>
                <a
                    href="#!"
                    type="button"
                    className="rounded-full bg-transparent p-3 font-medium uppercase leading-normal text-surface transition duration-150 ease-in-out hover:bg-neutral-100 focus:outline-none focus:ring-0 dark:text-white dark:hover:bg-secondary-900"
                    data-twe-ripple-init
                >
                    <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
                        <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                    </svg>
                    </span>
                </a>
                <a
                    href="!#"
                    type="button"
                    className="rounded-full bg-transparent p-3 font-medium uppercase leading-normal text-surface transition duration-150 ease-in-out hover:bg-neutral-100 focus:outline-none focus:ring-0 dark:text-white dark:hover:bg-secondary-900"
                    data-twe-ripple-init
                >
                    <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 488 512">
                        <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                    </svg>
                    </span>
                </a>
                <a
                    href="#!"
                    type="button"
                    className="rounded-full bg-transparent p-3 font-medium uppercase leading-normal text-surface transition duration-150 ease-in-out hover:bg-neutral-100 focus:outline-none focus:ring-0 dark:text-white dark:hover:bg-secondary-900"
                    data-twe-ripple-init
                >
                    <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                    </svg>
                    </span>
                </a>
                <a
                    href="https://github.com/Fernando-droidx"
                    type="button"
                    className="rounded-full bg-transparent p-3 font-medium uppercase leading-normal text-surface transition duration-150 ease-in-out hover:bg-neutral-100 focus:outline-none focus:ring-0 dark:text-white dark:hover:bg-secondary-900"
                    data-twe-ripple-init
                >
                    <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 496 512">
                        <path d="M165.9 397.4c0 2-2.3 2.8-4.5 1.5-3.2-1.7-5.7-3.3-8-5.2-11.7-9.9-23.4-20.9-33.5-33.1-9.6-11.4-17.8-24.7-20.7-39.9-2.7-14.4-3-28.2-.8-42.5 1.8-11.6 7.1-22 14.4-31.4 1.5-2 2.7-3.7 2.7-6.5-.3-12.2-.1-24.5-.1-36.8 0-4.4.5-8.8.7-13.2 .3-6.2-1.5-8.4-7.6-7.1-12.1 2.6-23.3 7-33.3 13.6-3.3 2.1-6.3 4.7-9.5 6.8-8.6 5.7-16.2 12.7-23.6 19.9-7.9 7.6-14.8 16.2-22 24.5-1.7 2-3.3 2.3-5.3 1.2-13.5-7.4-26.9-14.8-40.4-22.1-2.7-1.5-3.5-3-2.4-6.1 7.7-20.6 17.6-40 33.1-56 16.6-17.3 36-30.7 57.4-41.4 10.3-5.3 21.1-9.8 32.5-12.9 8.7-2.3 17.6-4.3 26.7-5.2 8.1-.8 16.2-1.9 24.2-1.6 1.5 0 3.1-.3 4.6-.5h7.7c.9 .1 1.9 .3 2.8 .4 10.1 .5 20.2 1.3 30.3 2.5 17.1 2.1 33.6 6.7 49.8 12.3 12.6 4.2 24.6 9.8 36.2 16.4 14.8 8.1 28.4 17.7 41 28.7 4.7 4.2 9.4 8.5 13.5 13.3 2 2.4 4 4.8 6 7.3 1.2 1.5 1.1 2.8-.2 4.2-1.5 1.7-3.1 3.3-4.7 4.8-6.1 5.9-12.2 11.9-18.2 17.9-7.4 7.5-14.4 15.2-20.4 23.8-5.6 8-11.3 15.9-15.7 24.7-6.9 13.6-11.5 28-13.5 43.1-1.5 10.8-1.6 21.6-1.4 32.5 .1 7.1 .3 14.2 .4 21.3 .1 5.8 .5 11.5 .6 17.3 .2 6.3-.1 12.7 1.1 18.9 .3 1.6- .3 2.9-1.9 3.3-4.2 1.1-8.3 1.6-12.6 1.5-8.1-.2-15.8-2.2-22.9-6.3-8.8-5.1-16.1-12-22.9-19.5-1.4-1.5-2.8-3-4.4-4.3-2-1.7-2.5-3.7-.8-5.9 .9-1.1 1.7-2.2 2.5-3.4 4.4-6.2 9-12.3 13.4-18.5 2.2-3.2 4.3-6.5 6.2-9.9 .5-.9 .4-1.5-.5-2.2-2.9-2.4-5.7-4.9-8.7-7.1-9.4-7.1-19.4-13.3-30.6-17.8-5.4-2.2-10.9-4.1-16.6-5.5-2.6-.7-4.3-.1-5.5 2.3-3.6 7-7.1 14.1-10.4 21.2-4.6 9.8-8.5 19.9-11.8 30.2-2.3 7.1-4.5 14.2-6.7 21.4-1.8 5.8-4.2 11.2-9 15.4-2.4 2.1-2.2 4.8-1.4 7.6 .2 .8 .5 1.6 .8 2.4 1.6 4.7 3.7 9.2 6 13.5 3.3 6.1 7.1 12 11.5 17.4 6.8 8.4 14.7 16 22.8 23.4 8.3 7.5 17.5 14.4 28.1 19.5 8.7 4.1 17.6 7.6 27.2 9.2 7.1 1.2 14.2 1.7 21.4 1.6 8.1-.2 16.3-.6 24.4-1 6.8-.3 13.6-1.3 20.3-2.9 10.7-2.6 20.7-7.1 30.4-12.4 10-5.4 19.1-12.5 27.5-20.3 9.3-8.5 17.8-17.8 26.2-27.2 3-3.4 5.8-6.9 8.8-10.3 3.3-3.7 6.5-7.5 9.9-11 1.1-1.1 2.2-2.2 3.4-3.3 .6-.5 1.2-.9 1.7-1.4 1.1-1.1 1.2-2.1 .3-3.4-2.4-3.4-5.3-6.4-8.1-9.4-7.2-7.9-14.6-15.5-22.1-23.1-5.5-5.5-11.3-10.7-17.3-15.7-1.2-.8-2.6-1.5-3.9-2.2-1.1-.6-2.3-1.1-3.6-.7-4.6 1.3-9.2 2.5-13.8 3.7-4.7 1.1-9.4 2.3-14.1 3.3-8.5 1.9-16.9 4.1-25.4 6.1-12.3 2.8-24.8 5.4-37.4 7.2-4.7 .7-9.4 .7-14.1 .8-.9 0-1.8 .2-2.7 .2z" />
                    </svg>
                    </span>
                </a>
                </div>
            </div>
        </footer>
    );
}
