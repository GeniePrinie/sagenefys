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
  return (
    <h1 className="text-lg font-light pt-8 pb-12">
      {linkPath ? (
        <CustomLink href={linkPath} className={linkClassName || ""}>
          {title}
        </CustomLink>
      ) : (
        title
      )}
    </h1>
  );
}
