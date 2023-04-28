import * as React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { topnavbar } from 'moodi_bot/types/types';
import styles from "./top-nav-bar.module.css";
import DropDownMenu from '../drop-down-menu/drop-down-menu';


const TopNavBar: React.FC<topnavbar> = ({ id }) => {


    return (
        <nav className={`bg-white shadow-sm top-0 left-0  w-full fixed dark:bg-white ${styles.navbr}` }>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div className="flex  items-center">
                    <DropDownMenu color={'white'} ></DropDownMenu>
                </div>
                <div className="self-center m-0 text-l  flex-col font-semibold bg-white dark:text-black">
                    <div className=" items-center justify-center mb-0">
                        <text className="mb-0">Moodi Bot</text>
                    </div>
                    <div className={` items-center flex-row justify-center p-0 mb-0 mt-0 px-5 ${styles.center}`}>
                        <div>
                            <div className={` center ${styles.onlineindicator} `}>
                                <span className={`center  ${styles.blink} `}></span>
                            </div>
                            <text className="text-xs mt-0 mb-0 font-regular"> Online</text>

                        </div>
                    </div>

                </div>

                <div className={`w-50 h-50 ${styles.circulardiv}`}>
                    <div>
                    <svg width="20" 
                        height="20" 
                        viewBox="0 0 260 206" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg">
                        <rect width="260" height="162.442" rx="25" fill="black" />
                        <ellipse cx="64.5695" cy="81.2208" rx="19.8013" ry="33.842" fill="white" />
                        <ellipse cx="198.874" cy="81.2208" rx="19.8013" ry="33.842" fill="white" />
                        <ellipse cx="130.861" cy="81.2208" rx="20.6623" ry="20.3052" fill="white" />
                        <path d="M201.744 161.932L160.604 194.29L173.911 117.962L201.744 161.932Z" fill="black" />
                    </svg>
                    </div>
                </div>
            </div>

        </nav>
    )
}

export default TopNavBar