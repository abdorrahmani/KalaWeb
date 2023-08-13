import React from "react";
import Dropdown from "../dropdown";
import { FiAlignJustify } from "react-icons/fi";
import { Link } from '@inertiajs/react';
import navbarimage from "../../../assets/img/layout/Navbar.png";
import { FiSearch } from "react-icons/fi";
import { RiMoonFill, RiSunFill } from "react-icons/ri";
import {
  IoMdNotificationsOutline,
} from "react-icons/io";
import avatar from "../../../assets/img/avatars/avatar4.png";

const Navbar = (props) => {
  const { onOpenSidenav, brandText } = props;
  const [darkmode, setDarkmode] = React.useState(false);

  return (
   <>
       <nav
           className="sticky top-4 z-40 flex flex-row flex-wrap items-center justify-between rounded-xl bg-white/10 p-2 backdrop-blur-xl dark:bg-[#0b14374d]">
           <div className="ml-[6px]">
               <div className="h-6 w-[224px] pt-1"><a
                   className="text-sm font-normal text-navy-700 hover:underline dark:text-white dark:hover:text-white"
                   href=" ">صفحه<span
                   className="mx-1 text-sm text-navy-700 hover:text-navy-700 dark:text-white"> / </span></a><a
                   className="text-sm font-normal capitalize text-navy-700 hover:underline dark:text-white dark:hover:text-white"
                   href="/admin/default">داشبورد</a></div>
               <p className="shrink text-[33px] capitalize text-navy-700 dark:text-white"><a
                   className="font-bold capitalize hover:text-navy-700 dark:hover:text-white" href="/admin/default">کالاوب</a></p></div>
           <div
               className="relative mt-[3px] flex h-[61px] w-[355px] flex-grow items-center justify-around gap-2 rounded-full bg-white px-2 py-2 shadow-xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none md:w-[365px] md:flex-grow-0 md:gap-1 xl:w-[365px] xl:gap-2">
               <div
                   className="flex h-full items-center rounded-full bg-lightPrimary text-navy-700 dark:bg-navy-900 dark:text-white xl:w-[225px]">
                   <p className="pl-3 pr-2 text-xl">
                       <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                            stroke-linecap="round" stroke-linejoin="round"
                            className="h-4 w-4 text-gray-400 dark:text-white" height="1em" width="1em"
                            xmlns="http://www.w3.org/2000/svg">
                           <circle cx="11" cy="11" r="8"></circle>
                           <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                       </svg>
                   </p>
                   <input type="text" placeholder="Search..."
                          className="block h-full w-full rounded-full bg-lightPrimary text-sm font-medium text-navy-700 outline-none placeholder:!text-gray-400 dark:bg-navy-900 dark:text-white dark:placeholder:!text-white sm:w-fit"/>
               </div>
               <span className="flex cursor-pointer text-xl text-gray-600 dark:text-white xl:hidden"><svg
                   stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                   stroke-linejoin="round" className="h-5 w-5" height="1em" width="1em"
                   xmlns="http://www.w3.org/2000/svg"><line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6"
                                                                                                        x2="3"
                                                                                                        y2="6"></line><line
                   x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line></svg></span>
               <div className="relative flex">
                   <div className="flex">
                       <p className="cursor-pointer">
                           <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512"
                                className="h-4 w-4 text-gray-600 dark:text-white" height="1em" width="1em"
                                xmlns="http://www.w3.org/2000/svg">
                               <path
                                   d="M257 120.471c7.083 0 23.911 4.479 23.911 4.479 45.589 10.447 77.678 52.439 77.678 99.85V352.412l9.321 9.364 7.788 7.823H136.302l7.788-7.823 9.321-9.364V224.8c0-47.41 32.089-89.403 77.678-99.85 0 0 18.043-4.479 23.911-4.479M256 48c-17.602 0-31.059 13.518-31.059 31.2v14.559c-59.015 13.523-103.53 67.601-103.53 131.041v114.4L80 380.8v20.8h352v-20.8l-41.411-41.6V224.8c0-63.44-44.516-117.518-103.53-131.041V79.2c0-17.682-13.457-31.2-31.059-31.2zm41.411 374.4h-82.823c0 22.881 18.633 41.6 41.412 41.6s41.411-18.719 41.411-41.6z"></path>
                           </svg>
                       </p>
                   </div>
                   <div
                       className="py-2 top-4 -left-[230px] md:-left-[440px] w-max absolute z-10 origin-[65%_0%] md:origin-top-right transition-all duration-300 ease-in-out scale-0">
                       <div
                           className="flex w-[360px] flex-col gap-3 rounded-[20px] bg-white p-4 shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none sm:w-[460px]">
                           <div className="flex items-center justify-between"><p
                               className="text-base font-bold text-navy-700 dark:text-white">Notification</p><p
                               className="text-sm font-bold text-navy-700 dark:text-white">Mark all read</p></div>
                           <button className="flex w-full items-center">
                               <div
                                   className="flex h-full w-[85px] items-center justify-center rounded-xl bg-gradient-to-b from-brandLinear to-brand-500 py-4 text-2xl text-white">
                                   <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16"
                                        height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                       <path fill-rule="evenodd"
                                             d="M8 10a.5.5 0 0 0 .5-.5V3.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 3.707V9.5a.5.5 0 0 0 .5.5zm-7 2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5z"></path>
                                   </svg>
                               </div>
                               <div className="ml-2 flex h-full w-full flex-col justify-center rounded-lg px-1 text-sm">
                                   <p className="mb-1 text-left text-base font-bold text-gray-900 dark:text-white">New
                                       Update: Horizon UI Dashboard PRO</p><p
                                   className="font-base text-left text-xs text-gray-900 dark:text-white">A new update
                                   for your downloaded item is available!</p></div>
                           </button>
                           <button className="flex w-full items-center">
                               <div
                                   className="flex h-full w-[85px] items-center justify-center rounded-xl bg-gradient-to-b from-brandLinear to-brand-500 py-4 text-2xl text-white">
                                   <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16"
                                        height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                       <path fill-rule="evenodd"
                                             d="M8 10a.5.5 0 0 0 .5-.5V3.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 3.707V9.5a.5.5 0 0 0 .5.5zm-7 2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5z"></path>
                                   </svg>
                               </div>
                               <div className="ml-2 flex h-full w-full flex-col justify-center rounded-lg px-1 text-sm">
                                   <p className="mb-1 text-left text-base font-bold text-gray-900 dark:text-white">New
                                       Update: Horizon UI Dashboard PRO</p><p
                                   className="font-base text-left text-xs text-gray-900 dark:text-white">A new update
                                   for your downloaded item is available!</p></div>
                           </button>
                       </div>
                   </div>
               </div>
               <div className="relative flex">
                   <div className="flex">
                       <p className="cursor-pointer">
                           <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512"
                                className="h-4 w-4 text-gray-600 dark:text-white" height="1em" width="1em"
                                xmlns="http://www.w3.org/2000/svg">
                               <path
                                   d="M256 90c44.3 0 86 17.3 117.4 48.6C404.7 170 422 211.7 422 256s-17.3 86-48.6 117.4C342 404.7 300.3 422 256 422s-86-17.3-117.4-48.6C107.3 342 90 300.3 90 256s17.3-86 48.6-117.4C170 107.3 211.7 90 256 90m0-42C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z"></path>
                               <path d="M277 360h-42V235h42v125zm0-166h-42v-42h42v42z"></path>
                           </svg>
                       </p>
                   </div>
                   <div
                       className="py-2 top-6 -left-[250px] md:-left-[330px] w-max absolute z-10 origin-[75%_0%] md:origin-top-right transition-all duration-300 ease-in-out scale-0">
                       <div
                           className="flex w-[350px] flex-col gap-2 rounded-[20px] bg-white p-4 shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none">
                           <div className="mb-2 aspect-video w-full rounded-lg"
                               ></div>
                           <a target="blank" href="https://horizon-ui.com/pro?ref=live-free-tailwind-react"
                              className="px-full linear flex cursor-pointer items-center justify-center rounded-xl bg-brand-500 py-[11px] font-bold text-white transition duration-200 hover:bg-brand-600 hover:text-white active:bg-brand-700 dark:bg-brand-400 dark:hover:bg-brand-300 dark:active:bg-brand-200">Buy
                               Horizon UI PRO</a><a target="blank"
                                                    href="https://horizon-ui.com/docs-tailwind/docs/react/installation?ref=live-free-tailwind-react"
                                                    className="px-full linear flex cursor-pointer items-center justify-center rounded-xl border py-[11px] font-bold text-navy-700 transition duration-200 hover:bg-gray-200 hover:text-navy-700 dark:!border-white/10 dark:text-white dark:hover:bg-white/20 dark:hover:text-white dark:active:bg-white/10">See
                           Documentation</a><a target="blank"
                                               href="https://horizon-ui.com/?ref=live-free-tailwind-react"
                                               className="hover:bg-black px-full linear flex cursor-pointer items-center justify-center rounded-xl py-[11px] font-bold text-navy-700 transition duration-200 hover:text-navy-700 dark:text-white dark:hover:text-white">Try
                           Horizon Free</a></div>
                   </div>
               </div>
               <div
                   className="cursor-pointer text-gray-600"
                   onClick={() => {
                       if (darkmode) {
                           document.body.classList.remove("dark");
                           setDarkmode(false);
                       } else {
                           document.body.classList.add("dark");
                           setDarkmode(true);
                       }
                   }}
               >
                   {darkmode ? (
                       <RiSunFill className="h-4 w-4 text-gray-600 dark:text-white" />
                   ) : (
                       <RiMoonFill className="h-4 w-4 text-gray-600 dark:text-white" />
                   )}
               </div>

               {/* Profile & Dropdown */}
               <Dropdown
                   button={
                       <img
                           className="h-10 w-10 rounded-full"
                           src={avatar}
                           alt="Elon Musk"
                       />
                   }
                   children={
                       <div className="flex w-56 flex-col justify-start rounded-[20px] bg-white bg-cover bg-no-repeat shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none">
                           <div className="p-4">
                               <div className="flex items-center gap-2">
                                   <p className="text-sm font-bold text-navy-700 dark:text-white">
                                       👋 Hey, Adela
                                   </p>{" "}
                               </div>
                           </div>
                           <div className="h-px w-full bg-gray-200 dark:bg-white/20 " />

                           <div className="flex flex-col p-4">
                               <a
                                   href=" "
                                   className="text-sm text-gray-800 dark:text-white hover:dark:text-white"
                               >
                                   Profile Settings
                               </a>
                               <a
                                   href=" "
                                   className="mt-3 text-sm text-gray-800 dark:text-white hover:dark:text-white"
                               >
                                   Newsletter Settings
                               </a>
                               <a
                                   href=" "
                                   className="mt-3 text-sm font-medium text-red-500 hover:text-red-500"
                               >
                                   Log Out
                               </a>
                           </div>
                       </div>
                   }
                   classNames={"py-2 top-8 -left-[180px] w-max"}
               />
           </div>
       </nav>
   </>
  );
};

export default Navbar;
