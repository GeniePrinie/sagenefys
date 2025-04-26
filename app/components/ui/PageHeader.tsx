import CustomLink from "./Link";

interface PageHeaderProps {
  title: string;
  linkPath?: string;
  linkClassName?: string;
}

export default function PageHeader({
  title,
  linkPath,
  linkClassName,
}: PageHeaderProps) {
  const content = (
    <h1 className="col-start-1 col-span-full md:col-span-5 text-lg font-light pb-8">
      {title}
    </h1>
  );

  return linkPath ? (
    <CustomLink href={linkPath} className={`block ${linkClassName || ""}`}>
      {content}
    </CustomLink>
  ) : (
    content
  );
}
