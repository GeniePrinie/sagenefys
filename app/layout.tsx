import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import HeaderNav from "./components/HeaderNav";
import FooterNav from "./components/FooterNav";

// Initialize the Poppins font with the weights you need
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Sagene Fysioterapi",
  description: "Sagene Fysioterapi og Trening - Fysioterapi i Oslo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${poppins.variable} ${poppins.className} antialiased`}>
      <body className="grid grid-cols-12">
        <head>
          <meta
            name="apple-mobile-web-app-title"
            content="Sagene Fysioterapi"
          />
        </head>
        <section className="min-h-screen flex flex-col col-start-1 col-span-full">
          <HeaderNav />
          <main className="flex-grow">{children}</main>
          <FooterNav />
        </section>
      </body>
    </html>
  );
}
