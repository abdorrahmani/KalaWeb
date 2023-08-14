import React, { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
    Bars3Icon,
    DevicePhoneMobileIcon,
    ComputerDesktopIcon,
    WrenchScrewdriverIcon,
    ScissorsIcon,
    ShoppingCartIcon,
    AcademicCapIcon,
    BuildingOffice2Icon,
    UserIcon,
    HeartIcon,
    Square3Stack3DIcon,
    CubeIcon,
    XMarkIcon
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import {Link, router} from "@inertiajs/react";
import Dropdown from "@/Components/dropdown";

const products = [
    { name: 'موبایل',
        href: '#',
        icon: DevicePhoneMobileIcon,
        Subproducts : [
            { name: 'همه محصولات', href: '#'},
            { name: 'گوشی اپل',  href: '#'},
            { name: 'گوشی سامسونگ', href: '#'},
            { name: 'گوشی شیاومی',href: '#'},
            { name: 'گوشی نوکیا', href: '#'},
            { name: 'گوشی هوآوی', href: '#'},
            { name: 'گوشی آنر', href: '#'},
            { name: 'گوشی وان پلاس', href: '#'},
            { name: 'گوشی وان پلاس', href: '#'},
            { name: 'گوشی تا 2 میلیون تومان', href: '#'},
            { name: 'گوشی تا 5 میلیون تومان', href: '#'},
            { name: 'گوشی تا 10 میلیون تومان', href: '#'},
            { name: 'گوشی تا 15 میلیون تومان', href: '#'},
            { name: 'گوشی بالای 15 میلیون تومان', href: '#'},
        ]},
    { name: 'کالای دیجیتال',  href: '#', icon: ComputerDesktopIcon ,
        Subproducts : [
            { name: 'موبایل', href: '#', icon: DevicePhoneMobileIcon },
            { name: 'کالای دیجیتال',  href: '#', icon: ComputerDesktopIcon },
            { name: 'خانه و آشپزخانه', href: '#', icon: BuildingOffice2Icon },
            { name: 'مد و پوشاک',href: '#', icon: ScissorsIcon },
            { name: 'کالا های سوپرمارکتی', href: '#', icon: ShoppingCartIcon },
            { name: 'کتاب و لوازم تحریر و هنر', href: '#', icon: AcademicCapIcon},
            { name: 'اسباب بازی ، کودک و نوزاد', href: '#', icon: Square3Stack3DIcon },
            { name: 'زیبایی و سلامت', href: '#', icon: UserIcon },
            { name: 'ورزش و سلامت',href: '#', icon: HeartIcon },
            { name: 'ابزار آلات و تجهیزات',href: '#', icon: WrenchScrewdriverIcon },
            { name: 'خودرو و موتورسیکلت',href: '#', icon: CubeIcon },

        ]
    },
    { name: 'خانه و آشپزخانه', href: '#', icon: BuildingOffice2Icon ,
        Subproducts : [
            { name: 'موبایل', href: '#', icon: DevicePhoneMobileIcon },
            { name: 'کالای دیجیتال',  href: '#', icon: ComputerDesktopIcon },
            { name: 'خانه و آشپزخانه', href: '#', icon: BuildingOffice2Icon },
            { name: 'مد و پوشاک',href: '#', icon: ScissorsIcon },
            { name: 'کالا های سوپرمارکتی', href: '#', icon: ShoppingCartIcon },
            { name: 'کتاب و لوازم تحریر و هنر', href: '#', icon: AcademicCapIcon},
            { name: 'اسباب بازی ، کودک و نوزاد', href: '#', icon: Square3Stack3DIcon },
            { name: 'زیبایی و سلامت', href: '#', icon: UserIcon },
            { name: 'ورزش و سلامت',href: '#', icon: HeartIcon },
            { name: 'ابزار آلات و تجهیزات',href: '#', icon: WrenchScrewdriverIcon },
            { name: 'خودرو و موتورسیکلت',href: '#', icon: CubeIcon },

        ]
    },
    { name: 'مد و پوشاک',href: '#', icon: ScissorsIcon,
        Subproducts : [
            { name: 'موبایل', href: '#', icon: DevicePhoneMobileIcon },
            { name: 'کالای دیجیتال',  href: '#', icon: ComputerDesktopIcon },
            { name: 'خانه و آشپزخانه', href: '#', icon: BuildingOffice2Icon },
            { name: 'مد و پوشاک',href: '#', icon: ScissorsIcon },
            { name: 'کالا های سوپرمارکتی', href: '#', icon: ShoppingCartIcon },
            { name: 'کتاب و لوازم تحریر و هنر', href: '#', icon: AcademicCapIcon},
            { name: 'اسباب بازی ، کودک و نوزاد', href: '#', icon: Square3Stack3DIcon },
            { name: 'زیبایی و سلامت', href: '#', icon: UserIcon },
            { name: 'ورزش و سلامت',href: '#', icon: HeartIcon },
            { name: 'ابزار آلات و تجهیزات',href: '#', icon: WrenchScrewdriverIcon },
            { name: 'خودرو و موتورسیکلت',href: '#', icon: CubeIcon },

        ] },
    { name: 'کالا های سوپرمارکتی', href: '#', icon: ShoppingCartIcon,
        Subproducts : [
            { name: 'موبایل', href: '#', icon: DevicePhoneMobileIcon },
            { name: 'کالای دیجیتال',  href: '#', icon: ComputerDesktopIcon },
            { name: 'خانه و آشپزخانه', href: '#', icon: BuildingOffice2Icon },
            { name: 'مد و پوشاک',href: '#', icon: ScissorsIcon },
            { name: 'کالا های سوپرمارکتی', href: '#', icon: ShoppingCartIcon },
            { name: 'کتاب و لوازم تحریر و هنر', href: '#', icon: AcademicCapIcon},
            { name: 'اسباب بازی ، کودک و نوزاد', href: '#', icon: Square3Stack3DIcon },
            { name: 'زیبایی و سلامت', href: '#', icon: UserIcon },
            { name: 'ورزش و سلامت',href: '#', icon: HeartIcon },
            { name: 'ابزار آلات و تجهیزات',href: '#', icon: WrenchScrewdriverIcon },
            { name: 'خودرو و موتورسیکلت',href: '#', icon: CubeIcon },

        ]
    },
    { name: 'کتاب و لوازم تحریر و هنر', href: '#', icon: AcademicCapIcon,
        Subproducts : [
            { name: 'موبایل', href: '#', icon: DevicePhoneMobileIcon },
            { name: 'کالای دیجیتال',  href: '#', icon: ComputerDesktopIcon },
            { name: 'خانه و آشپزخانه', href: '#', icon: BuildingOffice2Icon },
            { name: 'مد و پوشاک',href: '#', icon: ScissorsIcon },
            { name: 'کالا های سوپرمارکتی', href: '#', icon: ShoppingCartIcon },
            { name: 'کتاب و لوازم تحریر و هنر', href: '#', icon: AcademicCapIcon},
            { name: 'اسباب بازی ، کودک و نوزاد', href: '#', icon: Square3Stack3DIcon },
            { name: 'زیبایی و سلامت', href: '#', icon: UserIcon },
            { name: 'ورزش و سلامت',href: '#', icon: HeartIcon },
            { name: 'ابزار آلات و تجهیزات',href: '#', icon: WrenchScrewdriverIcon },
            { name: 'خودرو و موتورسیکلت',href: '#', icon: CubeIcon },

        ]
    },
    { name: 'اسباب بازی ، کودک و نوزاد', href: '#', icon: Square3Stack3DIcon ,
        Subproducts : [
            { name: 'موبایل', href: '#', icon: DevicePhoneMobileIcon },
            { name: 'کالای دیجیتال',  href: '#', icon: ComputerDesktopIcon },
            { name: 'خانه و آشپزخانه', href: '#', icon: BuildingOffice2Icon },
            { name: 'مد و پوشاک',href: '#', icon: ScissorsIcon },
            { name: 'کالا های سوپرمارکتی', href: '#', icon: ShoppingCartIcon },
            { name: 'کتاب و لوازم تحریر و هنر', href: '#', icon: AcademicCapIcon},
            { name: 'اسباب بازی ، کودک و نوزاد', href: '#', icon: Square3Stack3DIcon },
            { name: 'زیبایی و سلامت', href: '#', icon: UserIcon },
            { name: 'ورزش و سلامت',href: '#', icon: HeartIcon },
            { name: 'ابزار آلات و تجهیزات',href: '#', icon: WrenchScrewdriverIcon },
            { name: 'خودرو و موتورسیکلت',href: '#', icon: CubeIcon },

        ]},
    { name: 'زیبایی و سلامت', href: '#', icon: UserIcon ,
        Subproducts : [
            { name: 'موبایل', href: '#', icon: DevicePhoneMobileIcon },
            { name: 'کالای دیجیتال',  href: '#', icon: ComputerDesktopIcon },
            { name: 'خانه و آشپزخانه', href: '#', icon: BuildingOffice2Icon },
            { name: 'مد و پوشاک',href: '#', icon: ScissorsIcon },
            { name: 'کالا های سوپرمارکتی', href: '#', icon: ShoppingCartIcon },
            { name: 'کتاب و لوازم تحریر و هنر', href: '#', icon: AcademicCapIcon},
            { name: 'اسباب بازی ، کودک و نوزاد', href: '#', icon: Square3Stack3DIcon },
            { name: 'زیبایی و سلامت', href: '#', icon: UserIcon },
            { name: 'ورزش و سلامت',href: '#', icon: HeartIcon },
            { name: 'ابزار آلات و تجهیزات',href: '#', icon: WrenchScrewdriverIcon },
            { name: 'خودرو و موتورسیکلت',href: '#', icon: CubeIcon },

        ]},
    { name: 'ورزش و سلامت',href: '#', icon: HeartIcon,
        Subproducts : [
            { name: 'موبایل', href: '#', icon: DevicePhoneMobileIcon },
            { name: 'کالای دیجیتال',  href: '#', icon: ComputerDesktopIcon },
            { name: 'خانه و آشپزخانه', href: '#', icon: BuildingOffice2Icon },
            { name: 'مد و پوشاک',href: '#', icon: ScissorsIcon },
            { name: 'کالا های سوپرمارکتی', href: '#', icon: ShoppingCartIcon },
            { name: 'کتاب و لوازم تحریر و هنر', href: '#', icon: AcademicCapIcon},
            { name: 'اسباب بازی ، کودک و نوزاد', href: '#', icon: Square3Stack3DIcon },
            { name: 'زیبایی و سلامت', href: '#', icon: UserIcon },
            { name: 'ورزش و سلامت',href: '#', icon: HeartIcon },
            { name: 'ابزار آلات و تجهیزات',href: '#', icon: WrenchScrewdriverIcon },
            { name: 'خودرو و موتورسیکلت',href: '#', icon: CubeIcon },

        ] },
    { name: 'ابزار آلات و تجهیزات',href: '#', icon: WrenchScrewdriverIcon,
        Subproducts : [
            { name: 'موبایل', href: '#', icon: DevicePhoneMobileIcon },
            { name: 'کالای دیجیتال',  href: '#', icon: ComputerDesktopIcon },
            { name: 'خانه و آشپزخانه', href: '#', icon: BuildingOffice2Icon },
            { name: 'مد و پوشاک',href: '#', icon: ScissorsIcon },
            { name: 'کالا های سوپرمارکتی', href: '#', icon: ShoppingCartIcon },
            { name: 'کتاب و لوازم تحریر و هنر', href: '#', icon: AcademicCapIcon},
            { name: 'اسباب بازی ، کودک و نوزاد', href: '#', icon: Square3Stack3DIcon },
            { name: 'زیبایی و سلامت', href: '#', icon: UserIcon },
            { name: 'ورزش و سلامت',href: '#', icon: HeartIcon },
            { name: 'ابزار آلات و تجهیزات',href: '#', icon: WrenchScrewdriverIcon },
            { name: 'خودرو و موتورسیکلت',href: '#', icon: CubeIcon },

        ]},
    { name: 'خودرو و موتورسیکلت',href: '#', icon: CubeIcon ,
        Subproducts : [
            { name: 'موبایل', href: '#', icon: DevicePhoneMobileIcon },
            { name: 'کالای دیجیتال',  href: '#', icon: ComputerDesktopIcon },
            { name: 'خانه و آشپزخانه', href: '#', icon: BuildingOffice2Icon },
            { name: 'مد و پوشاک',href: '#', icon: ScissorsIcon },
            { name: 'کالا های سوپرمارکتی', href: '#', icon: ShoppingCartIcon },
            { name: 'کتاب و لوازم تحریر و هنر', href: '#', icon: AcademicCapIcon},
            { name: 'اسباب بازی ، کودک و نوزاد', href: '#', icon: Square3Stack3DIcon },
            { name: 'زیبایی و سلامت', href: '#', icon: UserIcon },
            { name: 'ورزش و سلامت',href: '#', icon: HeartIcon },
            { name: 'ابزار آلات و تجهیزات',href: '#', icon: WrenchScrewdriverIcon },
            { name: 'خودرو و موتورسیکلت',href: '#', icon: CubeIcon },

        ]},

]


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar({auth}) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState(null);

    return (
        <nav>
            <div  className="fixed w-full mt-3  z-40 flex flex-row flex-wrap items-center justify-between rounded-xl p-4 bg-scroll backdrop-blur-xl bg-[#0b14374d]"
                            aria-label="Global">
            <div className="flex lg:flex-1">
                <a href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">Your Company</span>
                    <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                </a>
            </div>
            <div className="flex lg:hidden">
                <button
                    type="button"
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    onClick={() => setMobileMenuOpen(true)}
                >
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
            </div>
            <Popover.Group className="hidden lg:flex lg:gap-x-12">
                <Popover className="relative">
                    <Popover.Button className="flex items-center gap-x-1 text-sm  leading-6 text-white">
                        دسته بندی
                        <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                    </Popover.Button>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                    >
                        <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-[#18181b] shadow-lg ring-1 ring-gray-900/5">
                            <div className="p-4">
                                {products.map((item) => (
                                    <div
                                        key={item.name}
                                        className="group relative flex items-center gap-x-6 rounded-lg p-2 text-sm leading-6 hover:bg-black"
                                        onMouseOver={() => setSelectedProduct(item.name)}
                                    >
                                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-black group-hover:bg-white">
                                            <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                                        </div>
                                        <div className="flex-auto">
                                            <a href={item.href} className="block  text-white">
                                                {item.name}
                                                <span className="absolute inset-0" />
                                            </a>
                                        </div>
                                        {/* کد قسمت مرتبط با محصول */}
                                        {selectedProduct === item.name && (
                                            <Transition
                                                // کد ترانزیشن و پنل مرتبط با زیردسته‌بندی‌ها
                                            >
                                                <Popover.Panel className="absolute -left-10 top-full z-20 max-80 max-w-md h-max overflow-hidden rounded-3xl bg-zinc-800 shadow-lg ring-1 ring-gray-900/5">
                                                    <div className="p-4 grid ">
                                                        {item.Subproducts.map((subCategory) => (
                                                            <div
                                                                key={subCategory.name}
                                                                className="group relative flex items-center gap-x-6 rounded-lg p-2 text-sm leading-6 hover:bg-black"
                                                            >
                                                                <div className="flex-auto">
                                                                    <a href={subCategory.href} className="block  text-white">
                                                                        {subCategory.name}
                                                                        <span className="absolute inset-0" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </Popover.Panel>

                                            </Transition>
                                        )}

                                        <Popover className="relative">
                                            <Popover.Button className="flex items-center gap-x-1 text-sm  leading-6 text-white">
                                                <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                                            </Popover.Button>

                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-200"
                                                enterFrom="opacity-0 translate-y-1"
                                                enterTo="opacity-100 translate-y-0"
                                                leave="transition ease-in duration-150"
                                                leaveFrom="opacity-100 translate-y-0"
                                                leaveTo="opacity-0 translate-y-1"
                                            >
                                            </Transition>
                                        </Popover>
                                    </div>

                                ))}
                            </div>

                        </Popover.Panel>
                    </Transition>
                </Popover>

                <a href="#" className="text-sm  leading-6 text-white">
                    سوپرمارکت
                </a>
                <a href="#" className="text-sm  leading-6 text-white">
                    در کالاوب بفروشید
                </a>
                <a href="#" className="text-sm  leading-6 text-white">
                    پر فروش ترین ها
                </a>
            </Popover.Group>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                {auth.user ? (
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
                                 className="flex left-3 w-56 flex-col justify-start rounded-[20px] bg-white bg-cover bg-no-repeat shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none">
                                <div className="p-4">
                                    <div className="flex items-center gap-2"><p
                                        className="text-sm font-bold text-navy-700 dark:text-white">محمد عبدالرحمانی</p>
                                    </div>
                                </div>
                                <div className="h-px w-full bg-gray-200 dark:bg-white/20 ">

                                </div>
                                <div className="flex flex-col p-4">
                                    <a href=" "
                                       className="text-sm text-gray-800 dark:text-white hover:dark:text-white">پروفایل</a>
                                    {auth.user.type === "admin" ? (
                                        <Link href={route('admin.dashboard')}
                                           className="mt-3 text-sm text-gray-800 dark:text-white hover:dark:text-white">ادمین پنل</Link>
                                    ) : ('')}

                                    <Link href={route('dashboard')}
                                          className="mt-3 text-sm text-gray-800 dark:text-white hover:dark:text-white">حساب کاربری</Link>
                                    <a href=" "
                                       className="mt-3 text-sm text-gray-800 dark:text-white hover:dark:text-white">سفارش ها</a>
                                    <a href=" "
                                       className="mt-3 text-sm font-medium text-red-500 hover:text-red-500">خروج از حساب کاربری</a></div>
                            </div>
                        </Dropdown.Content>
                    </Dropdown>
                ):(
                    <a  href={route('login')} className="text-sm leading-6 text-white">
                        ورود به حساب کاربری <span aria-hidden="true">&rarr;</span>
                    </a>
                )}

            </div>
        </div>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                className="h-8 w-auto"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                alt=""
                            />
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>

                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white hover:bg-gray-50">
                                                دسته بندی
                                                <ChevronDownIcon
                                                    className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                    aria-hidden="true"
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="mt-2 space-y-2">
                                                {[...products, ...callsToAction].map((item) => (
                                                    <Disclosure.Button
                                                        key={item.name}
                                                        as="a"
                                                        href={item.href}
                                                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-gray-50"
                                                    >
                                                        {item.name}
                                                    </Disclosure.Button>
                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                                >
                                    سوپرمارکت
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                                >
                                    در کالاوب بفروشید
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                                >
                                    پر فروش ترین ها
                                </a>
                            </div>
                            <div className="py-6">
                                <a
                                    href={route('login')}
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                                >
                                    ورد به حساب کاربری
                                </a>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>

        </nav>


    )
}
