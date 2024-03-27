"use client";

import DashboardNav from "@/components/DashboardNav";
import SideNav from "@/components/SideNav";
import { Contact, Film, UserRound, Users } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DashboardLayout = ({ children }) => {


  return (
    <div className='flex'>
     <SideNav />
      <div className='p-4 flex-grow transition-all transform duration-500  min-h-screen md:ml-[200px]'>
        <DashboardNav />
      <main>{children}</main>  
      </div>
    </div>
  );
};

export default DashboardLayout;
