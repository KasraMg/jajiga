import { useLogoutHandler } from "@/src/utils/auth";
import Image from "next/image";
import { AiOutlineLogout } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="mt-4 flex h-12 w-full items-center justify-between bg-white px-3">
      <div className="flex items-start gap-2">
        <Image
          src={"/images/profile.jpg"}
          alt=""
          width={1000}
          height={1000}
          className="h-10 w-10 rounded-full"
        />
        <div>
          <p className="mb-0 font-thin">شاهین مشکل گشا</p>
          <span className="relative bottom-1 text-xs text-red-600">ادمین</span>
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
