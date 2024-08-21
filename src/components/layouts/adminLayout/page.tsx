"use client";
import React, { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Cookies from "js-cookie";
import Navbar from "../../templates/adminPanel/components/Navbar"; 
import Menu from "../../templates/adminPanel/components/Menu";
const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const router = useRouter();

  //   useEffect(() => {
  //     const token = Cookies.get("AccessToken");
  //     if (!token) {
  //       router.replace("/login");
  //     }
  //   }, [router]);

  return (
    <div className="flex md:!bg-customYellow md:!pl-4">
      <div className="hidden h-screen w-[250px] bg-customYellow pb-6 pt-6 text-center md:!block">
        <Menu />
      </div>
      <div className="my-4 w-full rounded-lg bg-white">
        <Navbar />
        <div className="mt-4 w-full px-3 pb-4"> {children}</div>
      </div>
    </div>
  );
};

export default Layout;