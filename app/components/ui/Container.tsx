import { cn } from "@/lib/utils";
import { tv, type VariantProps } from "tailwind-variants";

export const styledContainer = tv({
  base: "w-full mx-auto max-w-[1440px]",
  variants: {
    padding: {
      default: "px-2 pt-10 md:px-8 lg:px-12",
      noTopPadding: "px-2 pt-0 md:px-8 lg:px-12",
      none: "",
    },
  },
  defaultVariants: {
    padding: "default",
  },
});

type ContainerVariants = VariantProps<typeof styledContainer>;

interface ContainerProps extends ContainerVariants {
  as?: React.ElementType;
  className?: string;
  children?: React.ReactNode;
  padding?: "default" | "none" | "noTopPadding";
}

const Container = ({
  as: TagName = "div",
  className = "",
  padding = "default",
  ...props
}: ContainerProps) => {
  return (
    <TagName
      className={cn(styledContainer({ padding }), className)}
      {...props}
    />
  );
};

export default Container;
