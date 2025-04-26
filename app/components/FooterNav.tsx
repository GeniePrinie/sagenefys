import Container from "./ui/Container";
import CustomLink from "./ui/Link";

const FACEBOOK_URL = "https://www.facebook.com/drobakgatafysio";

export default function FooterNav() {
  return (
    <Container padding="default" className="py-24 ">
      <div className="grid grid-cols-12 text-lg border-t pt-8 border-blue-600">
        <div className="col-start-1 col-span-full md:col-span-5">
          <p>©Sagene Fysioterapi & Trening</p>
        </div>
        <div className="col-start-1 col-span-full md:col-start-6 md:col-span-5 pb-8">
          <p className="font-semibold">E-post</p>
          <CustomLink
            href="mailto:info@sagene-fysioterapi.no"
            className="text-blue-600"
          >
            info@sagene-fysioterapi.no
          </CustomLink>
        </div>
        <div className="col-start-1 col-span-full md:col-start-6 md:col-span-5 pb-8">
          <p className="font-semibold">Telefon</p>
          <p className="text-blue-600">+ 47 22 23 26 90</p>
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
        <div className="col-start-1 col-span-full md:col-start-6 md:col-span-5 pb-8">
          <p className="font-semibold">Følg oss</p>
          <CustomLink
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600"
          >
            Facebook
          </CustomLink>
        </div>
      </div>
    </Container>
  );
}
