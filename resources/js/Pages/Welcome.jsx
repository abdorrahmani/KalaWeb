import { Link, Head } from '@inertiajs/react';
import Navbar from "@/Layouts/Navbar.jsx";
import {useEffect, useState} from "react";
import Footer from "@/Layouts/Footer.jsx";
import  NFTCard  from "@/Components/card/NftCard";
import HomeLayout from "@/Layouts/HomeLayout.jsx";
export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const [currentIndex, setCurrentIndex] = useState(1);
    const images = [
        "https://dkstatics-public.digikala.com/digikala-adservice-banners/5d401b0a90b956b8c45765b328c7cbf324bc2ff6_1691589766.gif?x-oss-process=image?x-oss-process=image/format,webp",
        "https://dkstatics-public.digikala.com/digikala-adservice-banners/005e195e721b3782417777b90f4a1a2c4a0a9e2e_1691611041.jpg?x-oss-process=image/quality,q_95/format,webp"  ,
        "https://dkstatics-public.digikala.com/digikala-adservice-banners/1dadfeb9b95e66e1f13deef93fa119d539ff52f2_1678117702.gif?x-oss-process=image?x-oss-process=image/format,webp"  ];
    const previous = () => {
        if (currentIndex > 1) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const forward = () => {
        if (currentIndex < images.length) {
            setCurrentIndex(currentIndex + 1);
        }
    };
    useEffect(() => {
        const interval = setInterval(() => {
            forward();
        }, 2000); // change time

        return () => {
            clearInterval(interval);
        };
    }, [currentIndex]);

    const products = [
        {
            id: 1,
            name: 'Earthen Bottle',
            href: '#',
            price: '$48',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
            imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
        },
        {
            id: 2,
            name: 'Nomad Tumbler',
            href: '#',
            price: '$35',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
            imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
        },
        {
            id: 3,
            name: 'Focus Paper Refill',
            href: '#',
            price: '$89',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
            imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
        },
        {
            id: 4,
            name: 'Machined Mechanical Pencil',
            href: '#',
            price: '$35',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
            imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
        },
        // More products...
    ]
    return (
        <>
            <Head title="فروشگاه اینترنتی" />
            <HomeLayout auth={auth}>
                {/*Slide Bar*/}
                <div>
                    <div>
                        <img src={images[currentIndex - 1]} alt={`Image ${currentIndex}`} />
                    </div>
                    <div>
                        <button className="absolute left-5 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-gray-100 shadow-md" onClick={previous}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                 stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
                            </svg>

                        </button>
                        <button className="absolute right-5 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-gray-100 shadow-md" onClick={forward}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                 stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"/>
                            </svg>
                        </button>
                    </div>
                </div>

                {/*    Cards */}
                <div className="p-5 grid grid-cols-4 gap-5 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4 3xl:grid-cols-6" dir="rtl">
                    <NFTCard
                        title="شیشه آب کلاسیک"
                        bidders={[""]}
                        image="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
                        price="3000"
                        extra="max-w-[370px]"
                    />

                    <NFTCard
                        title="شیشه آب کلاسیک"
                        bidders={[""]}
                        image="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
                        price="3000"
                        extra="max-w-[370px]"
                    />

                    <NFTCard
                        title="شیشه آب کلاسیک"
                        bidders={[""]}
                        image="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
                        price="3000"
                        extra="max-w-[370px]"
                    />

                    <NFTCard
                        title="شیشه آب کلاسیک"
                        bidders={[""]}
                        image="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
                        price="3000"
                        extra="max-w-[370px]"
                    />
                </div>


                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {products.map((product) => (
                            <div key={product.id} className="group relative">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                    <img
                                        src={product.imageSrc}
                                        alt={product.imageAlt}
                                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                    />
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-sm text-gray-700">
                                            <a href={product.href}>
                                                <span aria-hidden="true" className="absolute inset-0" />
                                                {product.name}
                                            </a>
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                    </div>
                                    <p className="text-sm font-medium text-gray-900">{product.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="sr-only">Products</h2>

                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        {products.map((product) => (
                            <a key={product.id} href={product.href} className="group">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                    <img
                                        src={product.imageSrc}
                                        alt={product.imageAlt}
                                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                                    />
                                </div>
                                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                                <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                            </a>
                        ))}
                    </div>
                </div>
            </HomeLayout>


        </>
    );
}
