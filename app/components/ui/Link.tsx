import Link from "next/link";
import { ComponentProps } from "react";

interface CustomLinkProps extends ComponentProps<typeof Link> {
  isActive?: boolean;
  noHover?: boolean;
}

export default function CustomLink({
  className = "",
  isActive = false,
  noHover = false,
  ...props
}: CustomLinkProps) {
  return (
    <Link
      className={`transition-all duration-200 ease-in-out ${
        !noHover && "hover:text-primary hover:underline"
      } underline-offset-2 ${
        isActive ? "text-primary font-medium" : "text-black font-normal"
      } ${className}`}
      {...props}
    />
  );
}
