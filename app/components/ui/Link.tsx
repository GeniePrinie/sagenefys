import Link from "next/link";
import { ComponentProps } from "react";

interface CustomLinkProps extends ComponentProps<typeof Link> {
  isActive?: boolean;
}

export default function CustomLink({
  className = "",
  isActive = false,
  ...props
}: CustomLinkProps) {
  return (
    <Link
      className={`hover:text-primary hover:underline underline-offset-2 ${
        isActive ? "text-primary font-medium" : "text-black font-normal"
      } ${className}`}
      {...props}
    />
  );
}
