import Container from "../components/ui/Container";
import ContentGrid from "../components/ui/ContentGrid";
import CustomLink from "../components/ui/Link";
import PageHeader from "../components/ui/PageHeader";

export const metadata = {
  title: "Kontakt | Sagene Fysioterapi",
  description:
    "Kontakt Sagene Fysioterapi for spørsmål, timebestilling eller veibeskrivelse.",
};

export default function ContactPage() {
  return (
    <Container padding="noTopPadding">
      <PageHeader title="Kontakt" />

      <ContentGrid
        title="Her finner du oss"
        image={{
          src: "/images/waitingRoom.jpg",
          alt: "Hero image",
          width: 1000,
          height: 1000,
        }}
        description=""
      />
      <div className="grid grid-cols-12">
        <p className="col-start-1 col-span-full md:col-start-6 md:col-span-6 pb-8">
          Har du spørsmål vedrørende våre tjenester eller ønsker å bestille en
          time? Nøl ikke med å kontakte oss på
          <CustomLink href="tel:+4722232690" className="text-blue-600">
            {" "}
            telefonnummer
          </CustomLink>{" "}
          eller send oss en{" "}
          <CustomLink
            href="mailto:kontakt@sagenefysio.no"
            className="text-blue-600"
          >
            e-post
          </CustomLink>
          .
        </p>
        <div className="col-start-1 col-span-full md:col-start-6 md:col-span-5 pb-8">
          <p className="font-semibold">E-post</p>
          <CustomLink
            href="mailto:kontakt@sagenefysio.no"
            className="text-blue-600"
          >
            kontakt@sagenefysio.no
          </CustomLink>
        </div>
        <div className="col-start-1 col-span-full md:col-start-6 md:col-span-5 pb-8">
          <p className="font-semibold">Telefon</p>
          <CustomLink href="tel:+4722232690" className="text-blue-600">
            + 47 22 23 26 90
          </CustomLink>
        </div>
        <div className="col-start-1 col-span-full md:col-start-6 md:col-span-5 pb-8">
          <p className="font-semibold">Sociale medier</p>
          <CustomLink
            href="https://www.facebook.com/drobakgatafysio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600"
          >
            Facebook
          </CustomLink>
        </div>
        <div className="col-start-1 col-span-full md:col-start-6 md:col-span-5 pb-8">
          <p className="font-semibold">Adresse</p>
          <CustomLink
            href="https://www.google.com/maps/place/Stavangergata+40,+0467+Oslo,+Norway"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600"
          >
            Stavangergata 40, 0467 Oslo
          </CustomLink>
        </div>
        {/* Google Map */}
        <div className="col-start-1 col-span-full md:col-start-6 md:col-span-6 h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1998.2781301959382!2d10.755366!3d59.9397795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416e11d33ecfdf%3A0x6bc3511cbb5e0f17!2sStavangergata%2040%2C%200467%20Oslo!5e0!3m2!1sen!2sno!4v1716465128991!5m2!1sen!2sno"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Sagene Fysioterapi location"
            className="rounded-md"
          ></iframe>
        </div>
      </div>
    </Container>
  );
}
