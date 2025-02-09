import React, { ReactNode } from "react";
import { cn } from "../../utils";

interface Props {
  children: ReactNode;
  className?: string;
}

export const Container: React.FC<Props> = ({ children, className }) => (
  <div
    className={cn(
      className,
      `mx-auto px-2 md:px-10 min-w-[320px] sm:w-[620px] md:w-[750px] lg:w-[1000px] xl:w-[1200px] 2xl:w-[1500px]`
    )}
  >
    {children}
  </div>
);
