import Container from "../../components/ui/Container";
import Image from "next/image";
import Link from "next/link";
import services from "../../data/services.json";
import { notFound } from "next/navigation";
import PageHeader from "@/app/components/ui/PageHeader";

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <Container padding="default">
      <PageHeader title="Tjenester" linkPath="/services" />
      <div className="grid grid-cols-12">
        <h2 className="col-start-1 col-span-full md:col-span-5 uppercase text-lg pb-8 md:pb-0">
          {service.title}
        </h2>

        <div className="col-start-1 col-span-full md:col-span-7 mb-10 pb-8 md:pb-12 relative h-[500px]">
          <Image
            src={service.img}
            alt={service.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>

        <p className="col-start-1 col-span-full md:col-start-6 md:col-span-6">
          {service.description}
        </p>
      </div>
    </Container>
  );
}
