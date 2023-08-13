import React from "react";

// Admin Imports
import MainDashboard from "@/Pages/UserPanel/admin/default";
import NFTMarketplace from "@/Pages/UserPanel/admin/marketplace";
import Profile from "@/Pages/UserPanel/admin/profile";
import DataTables from "@/Pages/UserPanel/admin/tables";


// Auth Imports
import SignIn from "@/Pages/UserPanel/auth/SignIn.jsx";

// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdLock,
} from "react-icons/md";

const routes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "default",
  },
  {
    name: "NFT Marketplace",
    layout: "/admin",
    path: "nft-marketplace",
    secondary: true,
  },
  {
    name: "Data Tables",
    layout: "/admin",
    path: "data-tables",

  },
  {
    name: "Profile",
    layout: "/admin",
    path: "profile",

  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "sign-in",

  },
  {
    name: "RTL Admin",
    layout: "/rtl",
    path: "rtl",

  },
];
export default routes;
