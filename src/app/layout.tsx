
import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});


export const metadata: Metadata = {
  title: "FranDev.dev",
  description: "Portfólio de programador fullstack web , mobile , dektop",
  keywords : ["Programador FullStack" , "Desenvolvedor Mobile" , "Programação" , "Criação de Sites" , "Desenvolvedor de Aplicativos" , "Frontend" , "backend" , "Mobile" , "UI UX"],
  creator: "Francisco Lombo Diakomas",
  authors: [{
    name: "Francisco Lombo Diakomas",
    url : "http://localhost:300/frandev.dev"
  }],
  openGraph : {
    emails : ["franciscodiakoma@gmail.com"],
    actors : ["Francisco Diakomas"],
    locale : "Angola / Luanda",
    description : "",
    firstName : "Francisco",
    lastName : "Diakomas",
    siteName : "frandev.dev",
    title : "Frandev",
    url: "http://localhost:300/frandev.dev",
    authors : ["Francisco Lombo Diakomas"],
    phoneNumbers : ["+244 957 777 993"],
    images : ["/favicon.ico"],
    creators: ["Francisco Lombo Diakomas"],
    countryName : "Angola",
    username : "Francisco Lombo Diakomas",
    gender : "portfolio",

  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}><body> {children}</body>
    </html>
  );
}
