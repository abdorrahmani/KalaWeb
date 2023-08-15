import React from "react";
import Navbar from "../../Components/navbar";
import Sidebar from "../../Components/sidebar";
import Footer from "../../Components/footer/Footer";
import AdminSidebar from "@/Components/sidebar/Admin.jsx";

export default function AdminLayout({children,currentRoute},props) {

    const [open, setOpen] = React.useState(true);

    React.useEffect(() => {
        window.addEventListener("resize", () =>
            window.innerWidth < 1200 ? setOpen(false) : setOpen(true)
        );
    }, []);


    document.documentElement.dir = "ltr";
    return (
        <div className="flex h-full w-full" dir="rtl">
            <AdminSidebar open={open} onClose={() => setOpen(false)} />
            {/* Navbar & Main Content */}
            <div className="h-full w-full bg-lightPrimary dark:!bg-navy-900">
                {/* Main Content */}
                <main
                    className={`mx-[12px] h-full flex-none transition-all md:pr-2 xl:mr-[313px]`}
                >
                    {/* Routes */}
                    <div className="h-full">
                        <Navbar
                            onOpenSidenav={() => setOpen(true)}
                            logoText={"Horizon UI Tailwind React"}
                            brandText={currentRoute}
                        />
                        <div className="pt-5s mx-auto mb-auto h-full min-h-[84vh] p-2 md:pr-2">{children}</div>
                        <div className="p-3">
                            <Footer />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
