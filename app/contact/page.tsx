import Container from "../components/ui/Container";
import Image from "next/image";

export default function ContactPage() {
  return (
    <Container padding="default" className="py-24">
      <h1 className="col-start-1 col-span-full md:col-span-5 text-xl font-semibold pb-8">
        Kontakt
      </h1>
      <div className="grid grid-cols-12">
        <h2 className="col-start-1 col-span-full md:col-span-5 uppercase text-lg pb-8 md:pb-0">
          Her finner du oss{" "}
        </h2>

        <p className="col-start-1 col-span-full md:col-start-6 md:col-span-6 pb-8">
          Har du spørsmål vedrørende våre tjenester eller ønsker å bestille en
          time? Nøl ikke med å kontakte oss på telefonnummer 22 23 26 90 eller
          send oss en e-post.
        </p>
        <div className="col-start-1 col-span-full md:col-start-6 md:col-span-5 pb-8">
          <p className="font-semibold">E-post</p>
          <p className="text-blue-600">info@sagene-fysioterapi.no</p>
        </div>
        <div className="col-start-1 col-span-full md:col-start-6 md:col-span-5 pb-8">
          <p className="font-semibold">Telefon</p>
          <p className="text-blue-600">+ 47 22 23 26 90</p>
        </div>
        <div className="col-start-1 col-span-full md:col-start-6 md:col-span-5 pb-8">
          <p className="font-semibold">Adresse</p>
          <p className="text-blue-600">Stavangergata 40, 0467 Oslo</p>
        </div>

        {/* Google Map */}
        <div className="col-start-1 col-span-full md:col-start-6 md:col-span-6 h-96 mb-8">
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
