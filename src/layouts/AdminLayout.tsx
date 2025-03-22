"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/templates/adminPanel/components/Navbar";
import Menu from "../components/templates/adminPanel/components/Menu";
import { authStore } from "@/src/stores/auth";

const AdminLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const router = useRouter();
  const { userData, isPending } = authStore((state) => state);

  useEffect(() => {
    if (userData?.statusCode === 200 && userData.user.role !== "admin") {
      router.push("/");
    } else if (!userData && !isPending) {
      router.push("/");
    }
  }, [isPending]);

  return (
    <div className="flex md:!bg-customYellow md:!px-4">
      <div className="hidden h-screen xl:!min-w-[250px] bg-customYellow pb-6 pt-6 text-center xl:!block">
        <Menu />
      </div>
      <div className="my-4 w-full rounded-lg bg-white">
        <Navbar />
        <div className="mt-4 w-full px-3 pb-4"> {children}</div>
      </div>
    </div>
  ); 
};
 
export default AdminLayout;
