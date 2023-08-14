import Navbar from "@/Layouts/Navbar.jsx";
import Footer from "@/Layouts/Footer.jsx";


export default function HomeLayout({ children ,auth}) {
    return (
        <div dir="rtl" className="relative sm:justify-center sm:items-center bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
            <Navbar auth={auth}/>

            {children}

            <Footer/>
        </div>

    );
}
