import { cn } from "@/lib/utils";
import Image from "next/image";
import { Fragment, ReactNode } from "react";
import { PageHeading } from "./PageHeading";

const EMAIL_PATTERN =
  /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;
const MARKDOWN_LINK_PATTERN =
  /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g;
const BOLD_PATTERN = /\*\*(.+?)\*\*/g;

interface ContentImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
}

interface ContentGridProps {
  title: string;
  image: ContentImage;
  description: string;
  extraTitle?: string;
  extraImage?: ContentImage;
  extraDescription?: string;
  className?: string;
}

function linkifyEmails(text: string, keyPrefix: string): ReactNode[] {
  EMAIL_PATTERN.lastIndex = 0;
  const nodes: ReactNode[] = [];
  let lastIndex = 0;

  for (const match of text.matchAll(EMAIL_PATTERN)) {
    const email = match[0];
    const index = match.index ?? 0;

    if (index > lastIndex) {
      nodes.push(text.slice(lastIndex, index));
    }

    nodes.push(
      <a
        key={`${keyPrefix}-email-${index}`}
        href={`mailto:${email}`}
        className="text-primary hover:underline"
      >
        {email}
      </a>
    );

    lastIndex = index + email.length;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
}

function formatBoldAndEmails(text: string, keyPrefix: string): ReactNode[] {
  BOLD_PATTERN.lastIndex = 0;
  const nodes: ReactNode[] = [];
  let lastIndex = 0;

  for (const match of text.matchAll(BOLD_PATTERN)) {
    const boldText = match[1];
    const index = match.index ?? 0;

    if (index > lastIndex) {
      nodes.push(
        ...linkifyEmails(text.slice(lastIndex, index), `${keyPrefix}-${index}`)
      );
    }

    nodes.push(
      <strong
        key={`${keyPrefix}-bold-${index}`}
        className="font-bold bg-amber-100 px-1"
      >
        {boldText}
      </strong>
    );

    lastIndex = index + match[0].length;
  }

  if (lastIndex < text.length) {
    nodes.push(
      ...linkifyEmails(text.slice(lastIndex), `${keyPrefix}-tail`)
    );
  }

  return nodes;
}

function formatInlineText(text: string): ReactNode[] {
  MARKDOWN_LINK_PATTERN.lastIndex = 0;
  const nodes: ReactNode[] = [];
  let lastIndex = 0;

  for (const match of text.matchAll(MARKDOWN_LINK_PATTERN)) {
    const label = match[1];
    const href = match[2];
    const index = match.index ?? 0;

    if (index > lastIndex) {
      nodes.push(
        ...formatBoldAndEmails(
          text.slice(lastIndex, index),
          `text-${index}`
        )
      );
    }

    nodes.push(
      <a
        key={`md-link-${index}`}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:underline"
      >
        {label}
      </a>
    );

    lastIndex = index + match[0].length;
  }

  if (lastIndex < text.length) {
    nodes.push(...formatBoldAndEmails(text.slice(lastIndex), "text-tail"));
  }

  return nodes;
}

function DescriptionBlock({ text }: { text: string }) {
  const lines = text
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
  const listItems = lines.filter((line) => line.startsWith("- "));
  const textLines = lines.filter((line) => !line.startsWith("- "));

  if (listItems.length === 0) {
    return <p>{formatInlineText(text.trim())}</p>;
  }

  return (
    <Fragment>
      {textLines.length > 0 ? (
        <p>{formatInlineText(textLines.join(" "))}</p>
      ) : null}
      <ul className="list-disc pl-5 space-y-1">
        {listItems.map((item, index) => (
          <li key={index}>{formatInlineText(item.slice(2).trim())}</li>
        ))}
      </ul>
    </Fragment>
  );
}

function DescriptionParagraphs({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const paragraphs = text.split(/\n\n+/).filter((part) => part.trim());

  if (paragraphs.length === 0) {
    return null;
  }

  return (
    <div
      className={cn(
        "mt-16 col-start-1 col-span-full md:col-start-6 md:col-span-6 space-y-4",
        className
      )}
    >
      {paragraphs.map((paragraph, index) => (
        <DescriptionBlock key={index} text={paragraph} />
      ))}
    </div>
  );
}

function ServiceImage({
  image,
  className,
}: {
  image: ContentImage;
  className?: string;
}) {
  return (
    <div
      className={cn("col-span-full md:col-span-7", className)}
    >
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width || 1200}
        height={image.height || 800}
        sizes={image.sizes || "(max-width: 768px) 100vw, 50vw"}
        className="w-full h-auto object-contain"
        priority={image.priority}
      />
    </div>
  );
}

export default function ContentGrid({
  title,
  image,
  description,
  extraTitle,
  extraImage,
  extraDescription,
  className,
}: ContentGridProps) {
  const hasExtra = Boolean(extraImage && extraDescription);

  return (
    <div className={cn("grid grid-cols-12 pt-7", className)}>
      <PageHeading title={title} paddingBottom="sm" />
      <ServiceImage image={image} className="col-start-1" />
      <DescriptionParagraphs
        text={description}
        className={hasExtra ? "md:mb-16" : undefined}
      />

      {hasExtra && extraImage && extraDescription ? (
        <div className="col-span-full grid grid-cols-12 mt-12">
          {extraTitle ? (
            <PageHeading
              title={extraTitle}
              paddingBottom="sm"
              className="md:self-start"
            />
          ) : null}
          <ServiceImage image={extraImage} />
          <DescriptionParagraphs text={extraDescription} />
        </div>
      ) : null}
    </div>
  );
}
