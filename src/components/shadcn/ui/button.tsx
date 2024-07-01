import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "hover:opacity-[.7] outline-none disabled:!opacity-50 whitespace-nowrap w-fit inline-flex items-center justify-right rounded-xl text-sm font-medium focus:outline-none  disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        blue: "text-white rounded-md bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800",
        outlineBlue:
          "text-blue-700 rounded-md hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 dark:ring-blue-800",
        default: "dark:bg-slate-900 rounded-md text-white ",
        ghost:
          "bg-transparent rounded-md hover:text-slate-900 hover:bg-slate-200",
        main: "bg-customYellow rounded-md text-dark",
        danger:
          "text-white rounded-md bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800",
        lightDanger:
          "text-dark rounded-md bg-gradient-to-r from-red-100 via-red-200 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800",
        green:
          "text-white rounded-md bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800",
        lightGreen:
          "text-dark rounded-md bg-gradient-to-r from-green-100 via-green-200 to-green-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-100 dark:focus:ring-green-600",
        orange: "bg-orange-400 text-white",
        outlineMain:
          "bg-gray-100 border-1 border-main text-main hover:text-dark hover:bg-gray-200  focus:bg-transparent",
        gray: "dark:bg-[#161D26] rounded-md bg-[#e7e6e6] dark:text-white ",
        secondray: " rounded-md bg-[#e7e6e6] dark:text-dark",
        yellow: "bg-customYellow text-black",
        white: "bg-white text-black border solid border-black flex gap-2",
        outlinePurple:
          "text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900",
        purple:
          "text-white rounded-md bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800  dark:shadow-purple-800/80",
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
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => { 
    const Comp = asChild ? Slot : "button";
    
    return (
      <Comp 
        style={{ transition: ".1s all ease-in" }}
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props} 
        disabled={props.disabled}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
