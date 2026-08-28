import PageHeader from "@/app/components/ui/PageHeader";
import { notFound } from "next/navigation";
import Container from "../../components/ui/Container";
import services from "../../data/services.json";
import ContentGrid from "../../components/ui/ContentGrid";
import { Metadata } from "next";

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} | Sagene Fysioterapi`,
    description: service.description.split(/\n\n+/)[0],
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
        extraTitle={"extraTitle" in service ? service.extraTitle : undefined}
        extraImage={
          "extraImg" in service && service.extraImg
            ? {
                src: service.extraImg,
                alt:
                  "extraTitle" in service
                    ? service.extraTitle
                    : "PiezoWave²",
                fill: true,
                sizes: "(max-width: 768px) 100vw, 50vw",
              }
            : undefined
        }
        extraDescription={
          "extraDescription" in service ? service.extraDescription : undefined
        }
      />
    </Container>
  );
}
