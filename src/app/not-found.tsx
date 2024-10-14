import Image from "next/image";
import React from "react";
import Container from "../components/modules/container/Container";
import Metadata from "../utils/Metadata";
import { Button } from "../components/shadcn/ui/button";
import { GoHome } from "react-icons/go";
import Link from "next/link";

const NotFound = () => {
  return (
    <Container>
      <p className="mt-24 text-center text-2xl font-semibold">متاسفیم</p>
      <Metadata
        seoTitle={"صفحه ای یافت نشد"}
        seoDescription={"صفحه ای  که به دنبالش بودید یافت نشد"}
      />

      <Image
        src={"/images/error404.webp"}
        width={1000}
        height={1000}
        alt="404"
        className="mx-auto block h-[314px] w-[583px] object-contain"
      />

      <p className="text-center text-xl sm:text-2xl">صفحه مورد نظر شما موجود نیست.</p>
      <Link href={"/"} className="!mx-auto block w-max">
        <Button variant={"main"} className="!mt-4 !flex">
          {" "}
          <GoHome className="ml-3 text-xl" />
          صفحه اصلی
        </Button>
      </Link>
    </Container>
  );
};

export default NotFound;
