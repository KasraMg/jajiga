import { FC } from "react";

interface LoaderProps {
  enableOverlay?: boolean;
}
const Loader: FC<LoaderProps> = ({ enableOverlay }) => {
  return (
    <>
      <div
        className={`fixed left-0 top-0 z-[99999] h-full w-full ${!enableOverlay ? "!bg-[#000000b5]" : ""} `}
      >
        <span
          id="loader"
          className="border-wolid relative mx-auto mt-80 block h-[48px] w-[48px] rounded-[50%] border-[3px] border-white"
        ></span>
      </div>
    </>
  );
};

export default Loader;
