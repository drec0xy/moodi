import * as React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { topnavbar } from 'moodi_bot/types/types';
import styles from "./top-nav-bar.module.css";


const TopNavBar: React.FC<topnavbar> = ({ id }) => {


    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div className="flex border items-center">
                    <i className="fi fi-sr-angle-small-left text-xl"></i>
                </div>
                <div className="self-center m-0 text-l  flex-col font-semibold whitespace-nowrap dark:text-white">
                    <div className=" items-center justify-center mb-0">
                        <text className="mb-0">Moodi Bot</text>
                    </div>
                    <div className={`border items-center flex-row justify-center p-0 mb-0 mt-0 px-5 ${styles.center}`}>
                        <div>
                            <div className={` center ${styles.onlineindicator} `}>
                                <span className={`center  ${styles.blink} `}></span>
                            </div>
                            <text className="text-xs mt-0 mb-0 font-regular"> Online</text>

                        </div>
                    </div>

                </div>

                <button type="button" className="inline-flex border border-blue-700 flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                    <svg className="w-12 h-12 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path clip-rule="evenodd" fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"></path>
                    </svg>
                </button>
            </div>

        </nav>
    )
}

export default TopNavBar