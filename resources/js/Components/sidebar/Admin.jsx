/* eslint-disable */

import { HiX } from "react-icons/hi";

const AdminSidebar = ({ open, onClose }) => {
    return (
        <div
            className={`sm:none duration-175 linear fixed !z-50 flex min-h-full flex-col bg-white pb-10 shadow-2xl shadow-white/5 transition-all dark:!bg-navy-800 dark:text-white md:!z-50 lg:!z-50 xl:!z-0 ${
                open ? "translate-x-0" : ""
            }`}
        >
      <span
          className="absolute top-4 right-4 block cursor-pointer xl:hidden"
          onClick={onClose}
      >
        <HiX />
      </span>

            <div className={`mx-[56px] mt-[50px] flex items-center`}>
                <div className="mt-1 ml-1 h-2.5 font-poppins text-[26px] font-bold uppercase text-navy-700 dark:text-white">
                    Kala <span class="font-medium">Web</span>
                </div>
            </div>
            <div class="mt-[58px] mb-7 h-px bg-gray-300 dark:bg-white/30" />
            {/* Nav item */}

            <ul className="mb-auto pt-1" dir="rtl">
                <a href="/admin/default">
                    <div className="relative mb-3 flex hover:cursor-pointer">
                        <li className="my-[3px] flex cursor-pointer items-center px-8">
                    <span
                        className="font-bold text-brand-500 dark:text-white">
                        <svg stroke="currentColor" fill="currentColor"
                             stroke-width="0" viewBox="0 0 24 24"
                             className="h-6 w-6" height="1em"
                             width="1em"
                             xmlns="http://www.w3.org/2000/svg"><path
                            fill="none" d="M0 0h24v24H0z">

                        </path><path
                            d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path></svg>
                    </span><p
                            className="leading-1 ml-4 flex font-bold text-navy-700 dark:text-white">داشبورد</p>
                        </li>
                        <div className="absolute right top-px h-9 w-1 rounded-lg bg-brand-500 dark:bg-brand-400"></div>
                    </div>
                </a>
                <a href="/admin/nft-marketplace">
                    <div className="relative mb-3 flex hover:cursor-pointer">
                        <li className="my-[3px] flex cursor-pointer items-center px-8">
                    <span
                        className="font-medium text-gray-600">
                        <svg stroke="currentColor" fill="currentColor"
                             stroke-width="0" viewBox="0 0 24 24" className="h-6 w-6"
                             height="1em" width="1em"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fill="none"
                                  d="M0 0h24v24H0V0z"></path><path
                            d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0020.01 4H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path></svg> </span>
                            <p className="leading-1 ml-4 flex font-medium text-gray-600"></p>سفارش ها</li>
                    </div>
                </a>
                <a href="/admin/data-tables">
                    <div className="relative mb-3 flex hover:cursor-pointer">
                        <li className="my-[3px] flex cursor-pointer items-center px-8"><span
                            className="font-medium text-gray-600"><svg stroke="currentColor" fill="currentColor"
                                                                       stroke-width="0" viewBox="0 0 24 24" className="h-6 w-6"
                                                                       height="1em" width="1em"
                                                                       xmlns="http://www.w3.org/2000/svg"><path fill="none"
                                                                                                                d="M0 0h24v24H0z"></path><path
                            d="M5 9.2h3V19H5zM10.6 5h2.8v14h-2.8zm5.6 8H19v6h-2.8z"></path></svg> </span><p
                            className="leading-1 ml-4 flex font-medium text-gray-600">فروشگاه ها</p></li>
                    </div>
                </a>
                <a href="/admin/profile">
                    <div className="relative mb-3 flex hover:cursor-pointer">
                        <li className="my-[3px] flex cursor-pointer items-center px-8"><span
                            className="font-medium text-gray-600"><svg stroke="currentColor" fill="currentColor"
                                                                       stroke-width="0" viewBox="0 0 24 24" className="h-6 w-6"
                                                                       height="1em" width="1em"
                                                                       xmlns="http://www.w3.org/2000/svg"><path fill="none"
                                                                                                                d="M0 0h24v24H0z"></path><path
                            d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path></svg> </span>
                            <p className="leading-1 ml-4 flex font-medium text-gray-600">محصولات</p></li>
                    </div>
                </a>

                <a href="/admin/data-tables">
                    <div className="relative mb-3 flex hover:cursor-pointer">
                        <li className="my-[3px] flex cursor-pointer items-center px-8"><span
                            className="font-medium text-gray-600"><svg stroke="currentColor" fill="currentColor"
                                                                       stroke-width="0" viewBox="0 0 24 24" className="h-6 w-6"
                                                                       height="1em" width="1em"
                                                                       xmlns="http://www.w3.org/2000/svg"><path fill="none"
                                                                                                                d="M0 0h24v24H0z"></path><path
                            d="M5 9.2h3V19H5zM10.6 5h2.8v14h-2.8zm5.6 8H19v6h-2.8z"></path></svg> </span><p
                            className="leading-1 ml-4 flex font-medium text-gray-600">دیدگاه ها</p></li>
                    </div>
                </a>

                <a href="/admin/data-tables">
                    <div className="relative mb-3 flex hover:cursor-pointer">
                        <li className="my-[3px] flex cursor-pointer items-center px-8"><span
                            className="font-medium text-gray-600"><svg stroke="currentColor" fill="currentColor"
                                                                       stroke-width="0" viewBox="0 0 24 24" className="h-6 w-6"
                                                                       height="1em" width="1em"
                                                                       xmlns="http://www.w3.org/2000/svg"><path fill="none"
                                                                                                                d="M0 0h24v24H0z"></path><path
                            d="M5 9.2h3V19H5zM10.6 5h2.8v14h-2.8zm5.6 8H19v6h-2.8z"></path></svg> </span><p
                            className="leading-1 ml-4 flex font-medium text-gray-600">بلاگ</p></li>
                    </div>
                </a>

                <a href="/admin/data-tables">
                    <div className="relative mb-3 flex hover:cursor-pointer">
                        <li className="my-[3px] flex cursor-pointer items-center px-8"><span
                            className="font-medium text-gray-600"><svg stroke="currentColor" fill="currentColor"
                                                                       stroke-width="0" viewBox="0 0 24 24" className="h-6 w-6"
                                                                       height="1em" width="1em"
                                                                       xmlns="http://www.w3.org/2000/svg"><path fill="none"
                                                                                                                d="M0 0h24v24H0z"></path><path
                            d="M5 9.2h3V19H5zM10.6 5h2.8v14h-2.8zm5.6 8H19v6h-2.8z"></path></svg> </span><p
                            className="leading-1 ml-4 flex font-medium text-gray-600">اسلاید ها و تخفیفات</p></li>
                    </div>
                </a>

                <a href="/admin/data-tables">
                    <div className="relative mb-3 flex hover:cursor-pointer">
                        <li className="my-[3px] flex cursor-pointer items-center px-8"><span
                            className="font-medium text-gray-600"><svg stroke="currentColor" fill="currentColor"
                                                                       stroke-width="0" viewBox="0 0 24 24" className="h-6 w-6"
                                                                       height="1em" width="1em"
                                                                       xmlns="http://www.w3.org/2000/svg"><path fill="none"
                                                                                                                d="M0 0h24v24H0z"></path><path
                            d="M5 9.2h3V19H5zM10.6 5h2.8v14h-2.8zm5.6 8H19v6h-2.8z"></path></svg> </span><p
                            className="leading-1 ml-4 flex font-medium text-gray-600">محصولات سوپرمارکت</p></li>
                    </div>
                </a>

                <a href="/admin/data-tables">
                    <div className="relative mb-3 flex hover:cursor-pointer">
                        <li className="my-[3px] flex cursor-pointer items-center px-8"><span
                            className="font-medium text-gray-600"><svg stroke="currentColor" fill="currentColor"
                                                                       stroke-width="0" viewBox="0 0 24 24" className="h-6 w-6"
                                                                       height="1em" width="1em"
                                                                       xmlns="http://www.w3.org/2000/svg"><path fill="none"
                                                                                                                d="M0 0h24v24H0z"></path><path
                            d="M5 9.2h3V19H5zM10.6 5h2.8v14h-2.8zm5.6 8H19v6h-2.8z"></path></svg> </span><p
                            className="leading-1 ml-4 flex font-medium text-gray-600">کاربران و ادمین ها</p></li>
                    </div>
                </a>
            </ul>



            {/* Nav item end */}
        </div>
    );
};

export default AdminSidebar;
