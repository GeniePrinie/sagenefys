import { cn } from "@/lib/utils";
import Image from "next/image";
import { PageHeading } from "./PageHeading";

interface ContentGridProps {
  title: string;
  image: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    fill?: boolean;
    sizes?: string;
    priority?: boolean;
  };
  description: string;
  className?: string;
}

export default function ContentGrid({
  title,
  image,
  description,
  className,
}: ContentGridProps) {
  return (
    <div className={cn("grid grid-cols-12", className)}>
      <PageHeading title={title} paddingBottom="sm" />

      <div className="col-start-1 col-span-full md:col-span-7 pb-8 md:pb-12 relative h-[500px]">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={image.sizes || "(max-width: 768px) 100vw, 50vw"}
          className="object-cover"
          priority={image.priority}
        />
      </div>

      <p className="mt-16 mb-60 col-start-1 col-span-full md:col-start-6 md:col-span-6">
        {description}
      </p>
    </div>
  );
}
