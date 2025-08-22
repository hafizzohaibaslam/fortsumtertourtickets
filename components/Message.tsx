import clsx from "clsx";
import React from "react";

const Message = ({
  status,
  children,
  className,
}: {
  status: "error" | "info";
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`text-sm ${clsx(
        status === "error" && "text-orange-700 border-orange-300 bg-orange-100",
        status === "info" && "text-blue-700 border-blue-300 bg-blue-100"
      )} mb-4 p-2 px-3 rounded-lg ${className}`}
    >
      {children}
    </div>
  );
};

export default Message;
