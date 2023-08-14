import React from "react";
import Dropdown from '@/Components/Dropdown';
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
                   className="font-bold capitalize hover:text-navy-700 dark:hover:text-white" href="/">کالاوب</a></p></div>
           <div
               className="relative mt-[3px] flex h-[61px] w-[355px] flex-grow items-center justify-around gap-2 rounded-full bg-white px-2 py-2 shadow-xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none md:w-[500px] md:flex-grow-0 md:gap-1 xl:w-[500px] xl:gap-2">
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
                   <input type="text" placeholder="جست و جو..." dir="rtl"
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
                   <Dropdown>
                       <Dropdown.Trigger>
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

                       </Dropdown.Trigger>

                       <Dropdown.Content>
                           <div
                               className="flex w-56 flex-col justify-start rounded-[20px] bg-white bg-cover bg-no-repeat shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none">

                               <div
                                   className="flex w-[350px] flex-col gap-2 rounded-[20px] bg-white p-4 shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none">
                                   <div
                                       className=" justify-between gap-3 rounded-[20px] bg-white p-4 shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none">
                                       <div className="flex items-center justify-between"><p
                                           className="text-base font-bold text-navy-700 dark:text-white">اعلانات</p><p
                                           className="text-sm font-bold text-navy-700 dark:text-white">خواندن همه</p></div>
                                   </div>

                                   <div className="mb-2 aspect-video w-full rounded-lg">
                                       <p className="text-center mt-20">هیچ اعلانی وجود ندارد</p>
                                   </div>

                               </div>
                           </div>
                       </Dropdown.Content>
                   </Dropdown>



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

               <div className="h-screen flex justify-center items-center cursor-pointer">
                   <div className="relative py-2">
                       <div className="-top-1 absolute left-3">
                           <p className="flex h-1 w-1 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">3</p>
                       </div>
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" className="h-4 w-4 text-gray-600 dark:text-white">
                           <path stroke-linecap="round" stroke-linejoin="round"
                                 d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"/>
                       </svg>
                   </div>
               </div>

               <div className="relative">
                   <Dropdown>
                       <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                           <img
                                               className="h-10 w-10 rounded-full"
                                               src="https://avatars.githubusercontent.com/u/53135000?v=4"
                                               alt="Elon Musk"
                                           />

                                        </span>
                       </Dropdown.Trigger>

                       <Dropdown.Content>
                           <div dir="rtl"
                               className="flex w-56 flex-col justify-start rounded-[20px] bg-white bg-cover bg-no-repeat shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none">
                               <div className="p-4">
                                   <div className="flex items-center gap-2"><p
                                       className="text-sm font-bold text-navy-700 dark:text-white">محمد عبدالرحمانی</p>
                                   </div>
                               </div>
                               <div className="h-px w-full bg-gray-200 dark:bg-white/20 "></div>
                               <div className="flex flex-col p-4"><a href=" "
                                                                     className="text-sm text-gray-800 dark:text-white hover:dark:text-white">پروفایل</a>
                                   <a href=" "
                                                  className="mt-3 text-sm text-gray-800 dark:text-white hover:dark:text-white">سفارش ها</a>
                                   <a href=" "
                                                  className="mt-3 text-sm font-medium text-red-500 hover:text-red-500">خروج از حساب کاربری</a></div>
                           </div>
                       </Dropdown.Content>
                   </Dropdown>
               </div>
           </div>
       </nav>
   </>
  );
};

export default Navbar;
