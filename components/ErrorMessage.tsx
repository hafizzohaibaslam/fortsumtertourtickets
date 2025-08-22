import React from "react";

interface ErrorMessageProps {
  message: string;
  className?: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, className = "" }) => {
  if (!message) return null;

  return (
    <p className={`text-red-500 text-xs mt-1 font-plus-jakarta-sans ${className}`}>
      {message}
    </p>
  );
};

export default ErrorMessage;
