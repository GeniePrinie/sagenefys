import { cn } from "@/lib/utils";

interface PageHeadingProps {
  title: string;
  className?: string;
  paddingBottom?: "sm" | "md" | "lg";
}

export function PageHeading({
  title,
  className,
  paddingBottom = "md",
}: PageHeadingProps) {
  const paddingClasses = {
    sm: "pb-4 md:pb-0",
    md: "pb-8 md:pb-0",
    lg: "pb-12 md:pb-0",
  };

  return (
    <h2
      className={cn(
        "col-start-1 col-span-full md:col-span-5 uppercase text-lg",
        paddingClasses[paddingBottom],
        className
      )}
    >
      {title}
    </h2>
  );
}
