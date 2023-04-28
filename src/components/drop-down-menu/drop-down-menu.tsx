'use client';

import React, { useRef, useState } from 'react';
import styles from "./drop-down-menu.module.css";
import { childrenprops, colorprops } from 'moodi_bot/types/types';
import { createPopper } from "@popperjs/core";

interface DropDownMenuProps extends colorprops { }

const DropDownMenu: React.FC<DropDownMenuProps> = ({ color }) => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
  const btnDropdownRef = useRef<HTMLButtonElement>(null);
  const popoverDropdownRef = useRef<HTMLDivElement>(null);
  const openDropdownPopover = () => {
    if (btnDropdownRef.current && popoverDropdownRef.current) {
      createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
        placement: "bottom-start"
      });
      setDropdownPopoverShow(true);
    }
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  // bg colors
  let bgColor;
  color === "white"
    ? (bgColor = "bg-slate-700")
    : (bgColor = "bg-" + color + "-500");
  return (
    <>
      <div className="flex flex-wrap">
        <div className="">
          <div className="relative inline-flex align-middle ">
            <button
              className={
                " font-bold uppercase text-sm mr-5 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 "
               
              }

              type="button"
              ref={btnDropdownRef}
              onClick={() => {
                dropdownPopoverShow
                  ? closeDropdownPopover()
                  : openDropdownPopover();
              }}
            >
              <i className="fi fi-sr-backpack text-xl"></i>

            </button>
            <div
              ref={popoverDropdownRef}
              className={
                (dropdownPopoverShow ? "block " : "hidden ") +`${styles.menuWrapper}`+
                " z-50 float-right bg-black list-none text-left p-5"
              }
            >
              <a
                href="#pablo"
                className={
                  "text-sm gap-3 py-2 px-4 font-normal text-white block w-full whitespace-nowrap" 
                }
                onClick={e => e.preventDefault()}
              >
                <i className='fi mr-5 fi-sr-star text-white'></i>
                <text>Stared Messages</text>

              </a>
              <a
                href="#pablo"
                className={
                  "text-sm gap-3 py-2 px-4 font-normal text-white block w-full whitespace-nowrap bg-transparent "                }
                onClick={e => e.preventDefault()}
              >
                <i className='fi-sr-bell mr-5 text-white'></i>
                <text>Notification</text>

              </a>
              <a
                href="#pablo"
                className={
                  "text-sm gap-3 py-2 text-white px-4 font-normal block w-full whitespace-nowrap text-white bg-transparent "                }
                onClick={e => e.preventDefault()}
              >
                <i className='fi-sr-settings mr-5 text-white'></i>
                <text>Settings</text>

              </a>


              <div className="h-0 text-center my-2 border border-solid border-t-0 border-white opacity-25" />
              <a
                href="#pablo"
                className={
                  "text-sm text-white gap-3 py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                  (color === "white" ? " text-slate-700" : "text-white")
                }
                onClick={e => e.preventDefault()}
              >
                <i className='fi-sr-sign-out text-white'></i>
                <text>Log out</text>

              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DropDownMenu;