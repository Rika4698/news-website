import "./globals.css";
import { Roboto, Roboto_Condensed, PT_Serif } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const robotoCondensed = Roboto_Condensed({
  weight: ["300", "400","500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto-condensed",
});

const ptSerif = PT_Serif({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-pt-serif",
});

export const metadata = {
  title: "The Downtown - News Portal",
  description: "Latest news and updates from around the world",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${robotoCondensed.variable} ${ptSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}