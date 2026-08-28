import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AmbientBackground from "@/components/AmbientBackground";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const siteUrl = "https://rootbusinessai.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "rootbusinessai | IA Agéntica y Automatización Empresarial",
    template: "%s | rootbusinessai",
  },
  description:
    "rootbusinessai diseña agentes de IA autónomos, chatbots corporativos con RAG y desarrollo web fullstack a medida para escalar la operación de PyMEs y grandes empresas.",
  keywords: [
    "agentes de IA",
    "IA agéntica",
    "chatbots corporativos",
    "automatización empresarial",
    "RPA con IA",
    "desarrollo web fullstack",
    "rootbusinessai",
  ],
  authors: [{ name: "rootbusinessai" }],
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteUrl,
    siteName: "rootbusinessai",
    title: "rootbusinessai | IA Agéntica y Automatización Empresarial",
    description:
      "Sistemas agénticos, chatbots avanzados y automatización de procesos para escalar tu negocio con Inteligencia Artificial Autónoma.",
  },
  twitter: {
    card: "summary_large_image",
    title: "rootbusinessai | IA Agéntica y Automatización Empresarial",
    description:
      "Sistemas agénticos, chatbots avanzados y automatización de procesos para escalar tu negocio con Inteligencia Artificial Autónoma.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${jakartaSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background font-sans text-white">
        <AmbientBackground />
        <Navbar />
        <main id="top" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
