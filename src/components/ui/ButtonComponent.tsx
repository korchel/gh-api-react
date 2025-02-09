import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { cn } from "../../utils";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant: "primary" | "outline" | "danger";
}

export const ButtonComponent = ({
  variant,
  className,
  children,
  ...props
}: ButtonProps) => {
  const classNames = cn(
    className,
    "transition-colors",
    "rounded-sm",
    "p-2",
    "leading-none",
    "h-[32px]",
    "sm:h-[36px]",
    "md:h-[38px]",
    "cursor-pointer",
    "box-border",
    "text-nowrap",
    {
      primary: `bg-teal-400 hover:bg-teal-500 text-white`,
      outline: `border-2 border-teal-400 bg-white text-secondary hover:bg-teal-100`,
      danger: `bg-danger hover:bg-red-400 text-white`,
    }[variant]
  );

  return (
    <button className={classNames} {...props}>
      {children}
    </button>
  );
};
