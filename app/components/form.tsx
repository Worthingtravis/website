import React from "react";
import { cn } from "@/lib/utils";
import { focusStyles } from "./accessibility";

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  error?: string;
  helperText?: string;
  isTextArea?: boolean;
}

export const FormField = ({
  label,
  error,
  helperText,
  isTextArea = false,
  className,
  ...props
}: FormFieldProps) => {
  const Component = isTextArea ? "textarea" : "input";

  return (
    <div className="space-y-1">
      <label
        htmlFor={props.id || props.name}
        className="block text-sm font-medium text-gray-300"
      >
        {label}
      </label>
      <Component
        className={cn(
          "w-full px-4 py-2 bg-gray-800/50 border rounded-lg text-white",
          error ? "border-red-500" : "border-gray-700",
          focusStyles.input,
          isTextArea && "resize-none",
          className
        )}
        {...props}
      />
      {(error || helperText) && (
        <p
          className={cn(
            "text-sm",
            error ? "text-red-500" : "text-gray-400"
          )}
        >
          {error || helperText}
        </p>
      )}
    </div>
  );
};

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isLoading?: boolean;
}

export const Form = ({ onSubmit, isLoading, children, className, ...props }: FormProps) => (
  <form
    onSubmit={onSubmit}
    className={cn("space-y-6", className)}
    {...props}
  >
    {children}
    {isLoading && (
      <div className="flex items-center justify-center">
        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-cyan-500" />
      </div>
    )}
  </form>
);

interface FormSuccessProps {
  message: string;
  onDismiss?: () => void;
}

export const FormSuccess = ({ message, onDismiss }: FormSuccessProps) => (
  <div className="rounded-lg bg-green-900/30 p-4 text-green-400 border border-green-500/50">
    <div className="flex items-center justify-between">
      <p>{message}</p>
      {onDismiss && (
        <button
          onClick={onDismiss}
          className="text-green-400 hover:text-green-300"
          aria-label="Dismiss message"
        >
          ×
        </button>
      )}
    </div>
  </div>
);

interface FormErrorProps {
  message: string;
  onDismiss?: () => void;
}

export const FormError = ({ message, onDismiss }: FormErrorProps) => (
  <div className="rounded-lg bg-red-900/30 p-4 text-red-400 border border-red-500/50">
    <div className="flex items-center justify-between">
      <p>{message}</p>
      {onDismiss && (
        <button
          onClick={onDismiss}
          className="text-red-400 hover:text-red-300"
          aria-label="Dismiss error"
        >
          ×
        </button>
      )}
    </div>
  </div>
); 