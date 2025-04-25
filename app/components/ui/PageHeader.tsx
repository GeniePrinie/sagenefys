import Link from "next/link";

interface PageHeaderProps {
  title: string;
  linkPath?: string;
}

export default function PageHeader({ title, linkPath }: PageHeaderProps) {
  const content = (
    <h1
      className={`col-start-1 col-span-full md:col-span-5 text-lg font-light pb-8 ${
        linkPath
          ? "text-primary hover:underline underline-offset-2 cursor-pointer"
          : ""
      }`}
    >
      {title}
    </h1>
  );

  return linkPath ? <Link href={linkPath}>{content}</Link> : content;
}
