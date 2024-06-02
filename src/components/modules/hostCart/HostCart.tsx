"use client";
import { FC, useState } from "react";
interface HostCartProps {
  title: string;
  description: string;
  icon: React.JSX.Element;
  borderColor: string;
  readMore?: boolean;
}
const HostCart: FC<HostCartProps> = ({
  title,
  description,
  readMore,
  icon,
  borderColor,
}) => {
  const [readMoreStatus, setReadMoreStatus] = useState(false);
  return (
    <div
      className="relative flex h-full flex-col items-center justify-center space-y-2 rounded-md border-t-[2px] border-yellow-300 bg-white p-4"
      style={{
        boxShadow: "rgba(160, 160, 160, 0.7) 0px 3px 10px",
      }}
    >
      <div
        className="absolute -top-8 rounded-full p-[2px]"
        style={{
          background: `${`linear-gradient(0deg, rgb(255, 200, 4) 0%, rgb(255, 200, 4) 50%, ${borderColor} 50%, ${borderColor} 100%)`}`,
        }}
      >
        <p
          className={`rounded-full border-4 bg-yellow-300 p-2 text-4xl`}
          style={{ borderColor: `${borderColor}` }}
        >
          {icon}
        </p>
      </div>
      <div className="flex h-[-webkit-fill-available] flex-col items-center py-4">
        <h3 className="my-4 text-center font-medium">{title}</h3>
        <p className="text-textGray font-vazir text-justify text-sm font-light leading-6">
          {readMore && !readMoreStatus ? (
            <>
              <>
                {" "}
                {description.slice(0, 175) + "..."}{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 75%, rgba(252, 176, 69, 0) 100%)",
                  }}
                  onClick={() => setReadMoreStatus(true)}
                  className="relative -right-6 cursor-pointer pr-4 text-blue-600"
                >
                  بیشتر
                </span>
              </>
            </>
          ) : (
            <>{description}</>
          )}
        </p>
      </div>
    </div>
  );
};

export default HostCart;
