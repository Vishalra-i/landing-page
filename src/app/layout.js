import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

const headingFont = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
});

const bodyFont = Montserrat({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata = {
  title: "Bless The Unisex Family Salon And Academy | Bridal Makeup in Bilaspur",
  description:
    "Premium Salon & Bridal Studio in Bilaspur for bridal makeup, party makeup, hair styling, facials, and salon academy training.",
  keywords: [
    "Bridal Makeup in Bilaspur",
    "Best Salon in Bilaspur",
    "Bridal Studio Bilaspur",
    "Unisex Salon Bilaspur",
  ],
  openGraph: {
    title: "Bless The Unisex Family Salon And Academy",
    description: "Premium Salon & Bridal Studio in Bilaspur",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${bodyFont.variable} font-[var(--font-body)]`}>
        {children}
      </body>
    </html>
  );
}
