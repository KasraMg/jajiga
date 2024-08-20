import React from "react";
import Menu from "./Menu";
import { Button } from "@/src/components/shadcn/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/src/components/shadcn/ui/sheet";
import { FaRegCircleUser } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
const Sidebar = () => {
  return (
    <>
      <div className="hidden h-screen w-[250px] bg-customYellow pb-6 pt-6 text-center md:!block">
        <Menu />
      </div>

      <Sheet>
        <SheetTrigger className="md:!hidden" asChild>
          <RxHamburgerMenu className="cursor-pointer text-xl text-black" />
        </SheetTrigger>
        <SheetContent
          dir="ltr"
          className={`fixed right-0 top-0 z-[9999] h-screen w-72 overflow-y-auto rounded-l-2xl border-r bg-white py-7 transition-transform dark:bg-gray-800`}
        >
          <SheetHeader>
            <Button variant={"outlineMain"} size={"sm"}>
              ورود / ثبت نام
            </Button>

            <hr className="mt-5" />
          </SheetHeader>
          <Menu />
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Sidebar;
