import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Paulo de Tarso | Full-Stack Developer Portfolio",
  description: "Portfólio de Paulo de Tarso, Desenvolvedor Full-Stack especializado em Next.js, React e TypeScript. Projetando soluções digitais premium e de alta performance.",
  keywords: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Paulo de Tarso", "Full Stack", "Portfolio"],
  authors: [{ name: "Paulo de Tarso" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="bg-[#030712] text-gray-100 min-h-screen selection:bg-indigo-500/30 selection:text-indigo-200">
        {children}
      </body>
    </html>
  );
}
