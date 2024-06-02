import { VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, FC } from "react";
import { buttonVariants } from "@/src/utils/buttonVariants";
import { cn } from "@/src/utils/cn";
export interface buttonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button: FC<buttonProps> = ({
  className,
  children,
  variant,
  size,
  type,
}) => {
  return (
    <button
      type={type && type}
      style={{ transition: "all ease-in .1s" }}
      className={cn(buttonVariants({ variant, size, className }))}
    >
      {children}
    </button>
  );
};

export default Button;
