import React from "react";
import { cn } from "../utils/cn";

type ButtonVariant = "primary" | "secondary" | "error";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconSize?: number; // optional icon size control
  iconPosition?: "left" | "right";
  className?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  icon,
  iconSize = 20,
  iconPosition = "right",
  className,
  onClick,
  ...props
}) => {
  const baseClasses =
    "rounded-full flex items-center cursor-pointer transition-all duration-300 ease-in-out hover:scale-105";

  // Define variant styles
  const variantClasses = {
    primary: "bg-[var(--blue-2)] text-white px-[7px] py-[6px] gap-[10px]",
    secondary: "bg-white text-[var(--blue-2)] p-[8px] gap-[14px]",
    error:
      "bg-transparent text-white px-[32px] py-[17px] border-[1px] border-white gap-[15px]",
  };

  // Icon container classes based on variant
  const iconContainerClasses = {
    primary:
      "md:min-w-[36px] md:min-h-[36px] min-w-[30px] min-h-[30px] rounded-full bg-white text-black flex items-center justify-center",
    secondary:
      "md:min-w-[48px] md:min-h-[48px] min-w-[36px] min-h-[36px] rounded-full bg-[var(--blue-2)] text-white flex items-center justify-center",
    error:
      "w-[45px] h-[45px] rounded-full bg-white text-black flex items-center justify-center",
  };

  // Text styles for variants (adjust or extend as needed)
  const textClasses = {
    primary:
      "ml-[8px] lg:ml-[20px] font-poppins font-semibold text-[14px] leading-[18px]",
    secondary:
      "ml-[10px] lg:ml-[26px] font-plus-jakarta-sans font-semibold text-[18px] leading-[24px]",
    error: "font-plus-jakarta-sans font-semibold text-[18px] leading-[26px]",
  };

  return (
    <button
      className={cn(baseClasses, variantClasses[variant], className)}
      {...props}
      onClick={onClick && onClick}
    >
      {icon && iconPosition === "left" && (
        <div
          className={iconContainerClasses[variant]}
          style={{ width: iconSize + 16, height: iconSize + 16 }}
        >
          <ButtonIcon icon={icon} iconSize={iconSize} />
        </div>
      )}

      <span className={textClasses[variant]}>{children}</span>

      {icon && iconPosition === "right" && (
        <div
          className={iconContainerClasses[variant]}
          style={{ width: iconSize + 16, height: iconSize + 16 }}
        >
          <ButtonIcon icon={icon} iconSize={iconSize} />
        </div>
      )}
    </button>
  );
};

import { SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  iconSize: number;
}

const ButtonIcon = ({
  icon,
  iconSize,
}: {
  icon: React.ReactNode;
  iconSize: number;
}) => {
  return React.cloneElement(icon as React.ReactElement<IconProps>, {
    className: `w-[${iconSize}px] h-[${iconSize}px]`,
    width: iconSize,
    height: iconSize,
  });
};
