import { Button } from "@/src/components/shadcn/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BecomeHost = () => {
  return (
    <div className="becomeHostBg Container overflow-hidden !my-8 flex flex-col items-center justify-between rounded-2xl md:flex-row">
      <div className="my-2 mr-4 w-full space-y-4 md:!w-1/2">
        <p className="mt-3 text-center text-lg text-[#252a31] md:mt-5 md:text-start lg:!mt-0">
          میزبان شوید
        </p>
        <p className="px-4 text-xs text-[#404040] md:!pl-2 md:!pr-0">
          میزبانان جاجیگا مردم واقعی هستند که فضای اقامتی بیش از نیاز خود را با
          شرایطی منصفانه به گردشگران اجاره میدهند و درآمدی شرافتمندانه کسب
          میکنند
        </p>
        <Link href={"/host"}>
          {" "}
          <Button className="relative top-6 mx-auto !mt-0 block rounded-full border-4 border-solid border-[#ffe666] bg-[#404040] px-3 text-xs text-white md:!top-0 md:!ml-auto md:!mr-0 md:!mt-4">
            توضیحات بیشتر
          </Button>
        </Link>
      </div>

      <div className="w-full md:w-1/2">
        <Image
          src={"/images/becomeHost.jpg"}
          alt="host"
          className="h-[200px] w-full rounded-2xl object-cover md:!h-[190px] lg:!h-[auto]"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
};

export default BecomeHost;
