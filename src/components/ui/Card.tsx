import { DetailedHTMLProps, HTMLAttributes, MouseEventHandler } from "react";

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLHRElement>, HTMLHRElement> {}

export const Card = ({ children, ...props }: Props) => (
  <div
    {...props}
    className="shadow-md hover:shadow-lg p-3 rounded-lg flex flex-col gap-2 bg-teal-50"
  >
    {children}
  </div>
);

interface CardPartProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLHRElement>, HTMLHRElement> {}

Card.Title = ({ children }: CardPartProps) => (
  <h2 className="font-bold text-center text-teal-800">{children}</h2>
);

Card.Body = ({ children, ...props }: CardPartProps) => (
  <div className="py-2">
    <div className="flex flex-col gap-1" {...props}>
      {children}
    </div>
  </div>
);

Card.Footer = ({ children, ...props }: CardPartProps) => (
  <div {...props}>{children}</div>
);
