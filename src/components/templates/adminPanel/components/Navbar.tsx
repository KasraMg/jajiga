import { useLogoutHandler } from "@/src/utils/auth";
import Image from "next/image";
import { AiOutlineLogout } from "react-icons/ai";
import Menu from "./Menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/src/components/shadcn/ui/sheet";
import { RxHamburgerMenu } from "react-icons/rx";
import { authStore } from "@/src/stores/auth";

const Navbar = () => {
  const { userData } = authStore((state) => state);
  const logout = useLogoutHandler();
  return (
    <div className="flex h-12 w-full items-center justify-between bg-white px-3 md:!mt-4">
      <div className="flex items-center gap-3">
        <Sheet>
          <SheetTrigger className="md:!hidden" asChild>
            <RxHamburgerMenu className="cursor-pointer text-xl text-black" />
          </SheetTrigger>
          <SheetContent
            dir="rtl"
            className={`fixed right-0 top-0 z-[9999] h-screen w-72 overflow-y-auto rounded-l-2xl border-r bg-customYellow px-0 py-7 transition-transform dark:bg-gray-800`}
          >
            <Menu />
          </SheetContent>
        </Sheet>
        <div className="flex items-start gap-2">
          <Image
            src={
              userData?.user.avatar
                ? `https://jajiga-backend.liara.run/user/avatars/${userData?.user.avatar}`
                : "/images/profile.jpg"
            }
            alt=""
            width={1000}
            height={1000}
            className="hidden h-10 w-10 rounded-full sm:!block"
          />
          <div>
            <p className="mb-0 text-sm font-thin sm:!text-base">
              {userData?.user.firstName} {userData?.user.lastName}{" "}
            </p>
            <span className="relative bottom-1 text-xs text-red-600">
              ادمین
            </span>
          </div>
        </div>
      </div>

      <div
        onClick={() => logout()}
        className="flex cursor-pointer justify-start gap-2"
      >
        <p className="font-thin">خروج</p>
        <AiOutlineLogout className="text-2xl" />
      </div>
    </div>
  );
};

export default Navbar;
