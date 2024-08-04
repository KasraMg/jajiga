"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const router = useRouter(); 

  useEffect(() => {
    const token = Cookies.get("AccessToken");
    if (!token) {
      router.replace("/login");
    }
  }, [router]);

  return children;
};

export default Layout;
