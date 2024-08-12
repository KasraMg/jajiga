import React, { FC } from "react";
import { Button } from "../../shadcn/ui/button";
import Link from "next/link";

interface ContentNavigatorProps {
  disablelPrevButton: boolean;
  disableNextButton: boolean;
  prevLink: string; 
  className?: string;
  clickHandler?: () => void;
}
const ContentNavigator: FC<ContentNavigatorProps> = ({
  className,
  clickHandler, 
  prevLink,
  disableNextButton,
  disablelPrevButton,
}) => {
  return (
    <section
      style={{
        transition: "transform 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s",
      }}
      className="fixed bottom-2 left-2 right-2 z-50 mx-auto"
    >
      <div
        className={`${className} mx-auto flex w-full justify-between rounded-lg bg-[#00000099] px-4 py-3 sm:!w-[468px]`}
      >
        <Button
          className={`${disablelPrevButton && "cursor-not-allowed opacity-40 hover:!opacity-30"} bg-[#f5f5f5] text-black transition-colors hover:opacity-75`}
        >
          {" "}
          <Link
            className={`${disablelPrevButton && "pointer-events-none"} px-8 py-[3px]`}
            href={`/${prevLink}`}
          >
            {" "}
            قبلی
          </Link>{" "}
        </Button>
        <Button
          variant="yellow"
          onClick={clickHandler} 
          className={`${disableNextButton && "cursor-not-allowed pointer-events-none opacity-40 hover:!opacity-30"} px-[38px] py-[3px] rounded-md transition-colors hover:opacity-75`}
        >  
            بعدی 
        </Button>
      </div>
    </section>
  );
};

export default ContentNavigator;
