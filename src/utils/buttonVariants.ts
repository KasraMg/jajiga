import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "active:scale-95 whitespace-nowrap w-fit inline-flex items-center justify-right rounded-xl text-sm font-medium transition-color focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        blue: "text-white rounded-md bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800",
        outlineBlue:  "text-blue-700 rounded-md hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 dark:ring-blue-800",
        default: "dark:bg-slate-900 rounded-md text-white ",
        ghost: "bg-transparent rounded-md hover:text-slate-900 hover:bg-slate-200",
        main: "bg-yellow-400 rounded-md text-dark",
        danger: "text-white rounded-md bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800",
        lightDanger: "text-dark rounded-md bg-gradient-to-r from-red-100 via-red-200 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800",
        green: "text-white rounded-md bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800",
        lightGreen: "text-dark rounded-md bg-gradient-to-r from-green-100 via-green-200 to-green-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-100 dark:focus:ring-green-600",
        orange: "bg-orange-400 text-white",
        outlineMain: "bg-gray-100 border-1 border-main text-main hover:text-dark hover:bg-gray-200 transition-color focus:bg-transparent",
        gray: "dark:bg-[#161D26] rounded-md bg-[#e7e6e6] dark:text-white ",
        secondray: " rounded-md bg-[#e7e6e6] dark:text-dark",
        yellow:"bg-yellow-300 text-black",
        white:"bg-white text-black",
        outlinePurple: "text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900",
        purple: "text-white rounded-md bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800  dark:shadow-purple-800/80",
      },
      size: {
        default: "p-2 ",
        sm: "!h-7 px-2 text-[12px]",
        lg: "!h-10 px-8",
      }, 
    },
    defaultVariants: {
      variant: "default",
      size: "default", 
    } 
  }
);
