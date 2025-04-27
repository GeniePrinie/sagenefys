import Container from "./ui/Container";
import CustomLink from "./ui/Link";

const FACEBOOK_URL = "https://www.facebook.com/drobakgatafysio";
const LOCATION_URL =
  "https://www.google.com/maps/place/Stavangergata+40,+0467+Oslo,+Norway";
const EMAIL_URL = "mailto:info@sagene-fysioterapi.no";
const PHONE_URL = "tel:+4722232690";

export default function FooterNav() {
  return (
    <Container padding="noTopPadding" className="pb-8">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-y-6 text-lg border-t border-blue-600 pt-8">
        {/* Left */}
        <div className="text-center md:text-left w-full md:w-auto">
          <p>©Sagene Fysioterapi & Trening</p>
        </div>
        {/* Right: Icons */}
        <div className="flex gap-6 w-full md:w-auto justify-center sm:justify-end items-center">
          <CustomLink
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-primary transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
            </svg>
          </CustomLink>
          <CustomLink
            href={LOCATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Location"
            className="hover:text-primary transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
          </CustomLink>
          <CustomLink
            href={EMAIL_URL}
            aria-label="Email"
            className="hover:text-primary transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </CustomLink>
          <CustomLink
            href={PHONE_URL}
            aria-label="Phone"
            className="hover:text-primary transition-colors"
          >
            <svg width="23" height="23" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
            </svg>
          </CustomLink>
        </div>
      </div>
    </Container>
  );
}
