import React, { ReactNode } from "react";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  text: string;
  required?: boolean;
  icon?: ReactNode;
}
export function LabelText({ text, required = false, icon, className = "", ...props }: LabelProps) {
  return (
    <label 
      className={`flex items-center gap-1.5 text-sm font-semibold text-zinc-800 mb-1.5 ${className}`} 
      {...props}
    >
      {icon && <span className="text-zinc-500 shrink-0">{icon}</span>}
      <span>
        {text}
        {required && <span className="text-red-500 ml-1 font-bold">*</span>}
      </span>
    </label>
  );
}