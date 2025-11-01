import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { Cormorant_Garamond, Montserrat } from "next/font/google";

const cormorant = Cormorant_Garamond({
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-cormorant',
});

const montserrat = Montserrat({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: "Flora by Susanna - Artisan Flower Studio in Stockholm",
  description: "Handcrafted botanical arrangements with bohemian charm in Stockholm, Sweden",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body className={`${montserrat.className} antialiased`}>
        {/* Romantic Header with Botanical Elements */}
        <nav className="bg-[#F5F1E8] border-b border-[#A8B69B]/20 sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
          <div className="container mx-auto px-6 py-6">
            <div className="flex justify-between items-center">
              <Link href="/" className="group">
                <h1 className="text-4xl font-light text-[#8B956D] tracking-wide">
                  <span className="handwritten text-5xl">Flora</span>
                  <span className="text-2xl"> by </span>
                  <span className="handwritten text-5xl">Susanna</span>
                </h1>
                <p className="text-xs text-[#8B956D] mt-1 tracking-widest uppercase">Florist · Brottby</p>
              </Link>
              <div className="flex space-x-8 items-center">
                <Link href="/" className="text-[#4A4A48] hover:text-[#A8B69B] transition-colors text-sm uppercase tracking-wider">Hem</Link>
                <Link href="/tjanster" className="text-[#4A4A48] hover:text-[#A8B69B] transition-colors text-sm uppercase tracking-wider">Tjänster</Link>
                <Link href="/about" className="text-[#4A4A48] hover:text-[#A8B69B] transition-colors text-sm uppercase tracking-wider">Om Oss</Link>
                <Link href="/tjanster#kontakt" className="px-6 py-2 bg-[#A8B69B] text-white rounded-full hover:bg-[#8B956D] transition-all text-xs uppercase tracking-wider">Beställ</Link>
              </div>
            </div>
          </div>
        </nav>

        <main className="min-h-screen bohemian-pattern">
          {children}
        </main>

        {/* Romantic Footer */}
        <footer className="bg-[#8B956D] text-[#F5F1E8] py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
              <div>
                <h3 className="text-3xl handwritten mb-4 text-[#D4B5A8]">Flora by Susanna</h3>
                <p className="text-sm leading-relaxed text-[#F5F1E8]/80">
                  Handgjorda botaniska arrangemang inspirerade av naturens vilda skönhet och romantiska charm.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-light mb-4 uppercase tracking-wider">Besök Oss</h4>
                <p className="text-sm text-[#F5F1E8]/80">
                  Stockholm, Sverige<br/>
                  Endast efter bokning<br/>
                  hello@florabysusanna.se
                </p>
              </div>
              <div>
                <h4 className="text-lg font-light mb-4 uppercase tracking-wider">Följ Vår Resa</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-[#F5F1E8]/80 hover:text-[#D4B5A8] transition-colors">Instagram</a>
                  <a href="#" className="text-[#F5F1E8]/80 hover:text-[#D4B5A8] transition-colors">Pinterest</a>
                </div>
              </div>
            </div>
            <div className="border-t border-[#F5F1E8]/20 pt-8 text-center">
              <p className="text-sm text-[#F5F1E8]/60">&copy; 2024 Flora by Susanna. Skapat med kärlek i Stockholm.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
