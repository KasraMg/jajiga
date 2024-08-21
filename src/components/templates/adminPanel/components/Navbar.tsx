import { useLogoutHandler } from "@/src/utils/auth";
import Image from "next/image";
import { AiOutlineLogout } from "react-icons/ai";

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
const Navbar = () => {
  return (
    <div className="md:!mt-4 flex h-12 w-full items-center justify-between bg-white px-3">
      <div className="flex items-center gap-3">
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
        <div className="flex items-start gap-2">
          <Image
            src={"/images/profile.jpg"}
            alt=""
            width={1000}
            height={1000}
            className="h-10 w-10 rounded-full sm:!block hidden"
          />
          <div>
            <p className="mb-0 sm:!text-base text-sm font-thin">شاهین مشکل گشا</p>
            <span className="relative bottom-1 text-xs text-red-600">
              ادمین
            </span>
          </div>
        </div>
      </div>

      <div
        onClick={() => useLogoutHandler()}
        className="flex cursor-pointer justify-start gap-2"
      >
        <p className="font-thin">خروج</p>
        <AiOutlineLogout className="text-2xl" />
      </div>
    </div>
  );
};

export default Navbar;
