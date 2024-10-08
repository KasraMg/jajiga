
"use client" 
import Breadcrumb from "@/src/components/modules/breadcrumb/Breadcrumb";
import React from "react";
import HostCart from "@/src/components/modules/hostCart/HostCart";
import { Button } from "@/src/components/shadcn/ui/button";
import useHostCartData from "@/src/hooks/useHostCartData";
import Container from "@/src/components/modules/container/Container";
import { authStore } from "@/src/stores/auth";
import Link from "next/link";

const Host = () => {
  const HostData = useHostCartData();
  const { userData } = authStore((state) => state); 
  return (
    <Container>
      <Breadcrumb
        title={"چگونه میزبان شوم؟"}
        description="نکات زیر را مطالعه کنید تا با اطلاعات کافی در جاجیگا میزبان شوید و با خیال آسوده کسب درآمد کنید"
      />

      {HostData.map((cartData) => (
        <div
          key={cartData.id}
          className="space-y-10 rounded-t-xl py-4"
          style={{ background: cartData.bgColor }}
        >
          <div className="flex flex-col items-center justify-center space-y-2 rounded-t-xl text-center">
            <h2 className="mt-2 text-lg font-medium">{cartData.mainTitle}</h2>
            <div className="h-1 w-36 rounded-lg bg-yellow-300"></div>
            <p className="text-textGray font-vazir px-3 text-sm font-light leading-6 sm:!px-0">
              {cartData.secondaryTitle}
            </p>
          </div>
          <div className="Container grid grid-cols-[auto] items-start justify-center gap-y-10 px-4 py-10 pt-0 md:flex-row md:gap-x-4 lg:!grid-cols-[auto,auto,auto]">
            {cartData.carts.map((cart) => (
              <HostCart key={cart.title} {...cart} borderColor={cartData.bgColor} />
            ))}
          </div>
        </div>
      ))}
      <div className="sticky bottom-2 mx-auto my-4 flex h-16 w-[90%] max-w-[320px] items-center justify-center rounded-lg bg-[#00000099] px-4 sm:!w-80">
       <Link className="w-full" href={`${userData ? '/newRoom/step1' : '/login'}`}> 
        <Button
          className="flex w-full items-center justify-center rounded-full p-2 text-center text-black duration-300 hover:bg-[#d2b43d]"
          variant="yellow"
          >
          ثبت اقامتگاه
        </Button>
          </Link>
      </div>
    </Container>
  );
};

export default Host;
