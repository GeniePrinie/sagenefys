import Container from "./ui/Container";

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
          <p className="text-blue-600">info@sagene-fysioterapi.no</p>
        </div>
        <div className="col-start-1 col-span-full md:col-start-6 md:col-span-5 pb-8">
          <p className="font-semibold">Telefon</p>
          <p className="text-blue-600">900 00 000</p>
        </div>
        <div className="col-start-1 col-span-full md:col-start-6 md:col-span-5 pb-8">
          <p className="font-semibold">Adresse</p>
          <p className="text-blue-600">Sagene Fysioterapi & Trening</p>
        </div>
        <div className="col-start-1 col-span-full md:col-start-6 md:col-span-5 pb-8">
          <p className="font-semibold">Følg oss</p>
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Facebook
          </a>
        </div>
      </div>
    </Container>
  );
}
