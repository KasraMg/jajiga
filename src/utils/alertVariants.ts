import { cva } from "class-variance-authority";

export const alertVariants = cva(
  "flex gap-3 p-4 rounded-lg text-[13px]",
  {
    variants: {
      variant: {
        primary: "bg-[#2254ac26] text-blue-600",
        danger:  "bg-[#faeaea] text-[#970c0c]",
        success: "bg-[#b7f3b7] text-green-600",
        warning: "bg-[#fbdd50] text-black",
        main: "bg-white text-black border border-solid border-black"
       
      }, 
    },
   
  }
);
