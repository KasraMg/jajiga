import { FC } from "react";

interface LoaderProps {
  enableOverlay?: boolean;
  className?:string
}
const Loader: FC<LoaderProps> = ({ enableOverlay,className }) => {
  return (
    <>
      <div
        className={`fixed left-0 top-0 z-[99999] h-full w-full ${!enableOverlay ? "!bg-[#000000b5]" : ""} `}
      >
        <span
          id="loader"
          className={`${className ? className : ""} border-wolid relative mx-auto mt-80 block h-[48px] w-[48px] rounded-[50%] border-[3px] border-white`}
        ></span>
      </div>
    </>
  );
};

export default Loader;

export const ButtonLoader = ({ className }: { className?: string }) => {
  return (
    <svg
      className={`${className ? className : null} h-full w-full`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
    >
      <circle
        fill="#FFFFFF"
        stroke="#FFFFFF"
        strokeWidth="15"
        r="15"
        cx="40"
        cy="100"
      >
        <animate
          attributeName="opacity"
          calcMode="spline"
          dur="2"
          values="1;0;1;"
          keySplines=".5 0 .5 1;.5 0 .5 1"
          repeatCount="indefinite"
          begin="-.4"
        ></animate>
      </circle>
      <circle
        fill="#FFFFFF"
        stroke="#FFFFFF"
        strokeWidth="15"
        r="15"
        cx="100"
        cy="100"
      >
        <animate
          attributeName="opacity"
          calcMode="spline"
          dur="2"
          values="1;0;1;"
          keySplines=".5 0 .5 1;.5 0 .5 1"
          repeatCount="indefinite"
          begin="-.2"
        ></animate>
      </circle>
      <circle
        fill="#FFFFFF"
        stroke="#FFFFFF"
        strokeWidth="15"
        r="15"
        cx="160"
        cy="100"
      >
        <animate
          attributeName="opacity"
          calcMode="spline"
          dur="2"
          values="1;0;1;"
          keySplines=".5 0 .5 1;.5 0 .5 1"
          repeatCount="indefinite"
          begin="0"
        ></animate>
      </circle>
    </svg>
  );
};
