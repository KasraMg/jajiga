import Link from "next/link";
import React, { FC } from "react";
import { FaAngleLeft } from "react-icons/fa6";

interface BreadcrumbProps {
  className?: string;
  route?: string;
  routes?: string[];
  description?: string | React.ReactElement;
  title?: string;
  template?: boolean;
  children?: any;
}

const Breadcrumb: FC<BreadcrumbProps> = ({
  className,
  route,
  routes,
  description,
  template,
  title,
  children,
}) => {
  return (
    <section
      id="breadcrumb"
      className={`${className} relative mt-[58px] bg-customYellow bg-cover bg-center pb-9 pt-7`}
    >
      <div className="breadcrumb_bg absolute top-0 h-full w-full"></div>
      <div className="mx-auto max-w-[1074px] pr-4 xl:!px-0">
        {template ? (
          children
        ) : (
          <>
            {title ? (
              <p className="font-vazir relative z-50 text-2xl font-extrabold text-black">
                {title}
              </p>
            ) : (
              <div className="flex items-center gap-1">
                <Link
                  href={"/"}
                  className="font-vazir relative z-50 font-light text-black"
                >
                  جاجیگا
                </Link>
                <FaAngleLeft />
                {route && (
                  <span className="font-vazir z-50 text-xl font-extrabold text-black">
                    {route}
                  </span>
                )}
                {routes &&
                  routes.map((route, index) => (
                    <Link
                      href={`/category/${route}`}
                      className="z-50 mx-[2px] flex items-center gap-[2px] text-sm text-[#000000]"
                      key={index}
                    >
                      {route}
                      {index !== routes.length - 1 ? <FaAngleLeft /> : ""}
                    </Link>
                  ))}
              </div>
            )}

            {description && (
              <p className="mt-3 pl-8 text-sm sm:!pl-0 sm:!text-base">
                {description}
              </p>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default Breadcrumb;
