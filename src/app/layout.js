import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'; 
import '@/lib/fontawesome'; 

config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <link rel="preload" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/webfonts/fa-solid-900.woff2" as="font" type="font/woff2" crossorigin="anonymous"/>
      <body className={`${inter.className}  w-full `}>
        <header className="relative px-5">
          <Header/>
        </header>
        {children}
        <div className="px-5">
         <Footer/>  
        </div>
      </body>
    </html>
  );
}
