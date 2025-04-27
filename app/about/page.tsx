import Container from "../components/ui/Container";
import PageHeader from "../components/ui/PageHeader";
import ContentGrid from "../components/ui/ContentGrid";

export default function AboutPage() {
  return (
    <Container padding="noTopPadding">
      <PageHeader title="Om oss" />
      <ContentGrid
        title="Et team med erfarne terapeuter"
        image={{
          src: "/images/about.jpg",
          alt: "Hero image",
          width: 1000,
          height: 1000,
        }}
        description="Vi er fysioterapeuter med lang erfaring innenfor allmennfysioterapi. Vi gir tjenester med høy kvalitet sentralt beliggende i hjertet av Sagene. Klinikken ligger på bakkeplan med god tilgjengelighet for alle. Vi tilbyr et bredt spekter av fysioterapitjenester uavhengig av type skade eller smerter du måtte ha."
      />
    </Container>
  );
}
