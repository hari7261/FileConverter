// src/components/ui/button.tsx
import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      className="relative overflow-hidden px-6 py-3 border border-gray-700 bg-gray-900 text-gray-200 rounded-md transition-transform duration-200 hover:scale-105 active:scale-95 hover:bg-gray-800 hover:border-gray-600 focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
      {...props}
    >
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-700 to-transparent opacity-10 pointer-events-none"></span>
      <span className="z-10">{children}</span>
    </button>
  );
};
