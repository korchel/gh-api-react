import { FC, ReactNode } from "react";
import { cn } from "../../utils";

interface Props {
  children: ReactNode;
  className?: string;
}

export const GridContainer: FC<Props> = ({ children, className }) => (
  <div
    className={cn(
      className,
      "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 justify-between"
    )}
  >
    {children}
  </div>
);
