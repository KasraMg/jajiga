"use client";
import React, { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Cookies from "js-cookie";
import Navbar from "../../templates/adminPanel/components/Navbar";
import Sidebar from "../../templates/adminPanel/components/Sidebar";
import ContextMenu from "../../modules/contextMenu/ContextMenu";
const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const router = useRouter();

  //   useEffect(() => {
  //     const token = Cookies.get("AccessToken");
  //     if (!token) {
  //       router.replace("/login");
  //     }
  //   }, [router]);

  return (
    <div className="flex bg-customYellow pl-4">
      <ContextMenu />

      <Sidebar />
      <div className="my-4 w-full rounded-lg bg-white">
        <Navbar />
        <div className="mt-4 w-full px-3 pb-4"> {children}</div>
      </div>
    </div>
  );
};

export default Layout;
