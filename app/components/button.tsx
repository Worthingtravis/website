import React from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "framer-motion";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      fullWidth = false,
      isLoading = false,
      leftIcon,
      rightIcon,
      className = "",
      disabled,
      ...props
    },
    ref
  ) => {
    const prefersReducedMotion = useReducedMotion();

    const baseStyles = "inline-flex items-center justify-center font-medium rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
    
    const variants = {
      primary: "bg-cyan-500 text-black hover:bg-cyan-600 focus:ring-cyan-500",
      secondary: "bg-gray-800 text-white hover:bg-gray-700 focus:ring-gray-500",
      outline: "border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 focus:ring-cyan-500",
    };

    const sizes = {
      sm: "px-4 py-1.5 text-sm",
      md: "px-6 py-2.5 text-base",
      lg: "px-8 py-3 text-lg",
    };

    const widthStyles = fullWidth ? "w-full" : "";

    const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${widthStyles} ${className}`;

    const content = (
      <>
        {isLoading && (
          <motion.div
            className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
            {...(prefersReducedMotion && { animate: false })}
          />
        )}
        {!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
        {children}
        {!isLoading && rightIcon && <span className="ml-2">{rightIcon}</span>}
      </>
    );

    return (
      <button
        ref={ref}
        className={buttonClasses}
        disabled={disabled || isLoading}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button"; 