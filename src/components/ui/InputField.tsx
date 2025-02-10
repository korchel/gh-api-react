import {
  DetailedHTMLProps,
  ForwardedRef,
  forwardRef,
  InputHTMLAttributes,
} from "react";

export interface InputFieldProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  className?: string;
}

export const InputField = forwardRef(
  (
    { placeholder, className, onChange, value, ...props }: InputFieldProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div className={className}>
        <input
          {...props}
          className="rounded-md outline-teal-400  md:w-96 max-w-96 bg-gray-100 h-[38px] p-4"
          placeholder={placeholder}
          ref={ref}
          value={value}
          onChange={onChange}
        />
      </div>
    );
  }
);
