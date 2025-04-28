import PageHeader from "@/app/components/ui/PageHeader";
import { notFound } from "next/navigation";
import Container from "../../components/ui/Container";
import services from "../../data/services.json";
import ContentGrid from "../../components/ui/ContentGrid";

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return {};
  return {
    title: `${service.title} | Sagene Fysioterapi`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <Container padding="noTopPadding">
      <PageHeader
        title="Tjenester"
        linkPath="/services"
        linkClassName="text-primary"
      />
      <ContentGrid
        title={service.title}
        image={{
          src: service.img,
          alt: service.title,
          fill: true,
          sizes: "(max-width: 768px) 100vw, 50vw",
          priority: true,
        }}
        description={service.description}
      />
    </Container>
  );
}
