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
          <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
              <Link href="/" className="group text-center sm:text-left">
                <h1 className="text-3xl sm:text-4xl font-light text-[#8B956D] tracking-wide">
                  <span className="handwritten text-4xl sm:text-5xl">Flora</span>
                  <span className="text-xl sm:text-2xl"> by </span>
                  <span className="handwritten text-4xl sm:text-5xl">Susanna</span>
                </h1>
                <p className="text-xs text-[#8B956D] mt-1 tracking-widest uppercase">Florist Brottby Stockholm</p>
              </Link>
              <div className="flex flex-wrap justify-center sm:justify-end space-x-4 sm:space-x-8 items-center">
                <Link href="/" className="text-[#4A4A48] hover:text-[#A8B69B] transition-colors text-xs sm:text-sm uppercase tracking-wider">Hem</Link>
                <Link href="/brollop" className="text-[#4A4A48] hover:text-[#A8B69B] transition-colors text-xs sm:text-sm uppercase tracking-wider">Bröllop</Link>
                <Link href="/tjanster" className="text-[#4A4A48] hover:text-[#A8B69B] transition-colors text-xs sm:text-sm uppercase tracking-wider">Tjänster</Link>
                <Link href="/about" className="text-[#4A4A48] hover:text-[#A8B69B] transition-colors text-xs sm:text-sm uppercase tracking-wider">Om Oss</Link>
                <Link href="/tjanster#kontakt" className="px-4 sm:px-6 py-2 bg-[#A8B69B] text-white rounded-full hover:bg-[#8B956D] transition-all text-xs uppercase tracking-wider whitespace-nowrap">Beställ</Link>
              </div>
            </div>
          </div>
        </nav>

        <main className="min-h-screen bohemian-pattern">
          {children}
        </main>

        {/* Romantic Footer */}
        <footer className="bg-[#8B956D] text-[#F5F1E8] py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-8">
              <div>
                <h3 className="text-3xl handwritten mb-4 text-[#D4B5A8]">Flora by Susanna</h3>
                <p className="text-sm leading-relaxed text-[#F5F1E8]/80">
                  Handgjorda floristiska arrangemang inspirerade av naturens skönhet och romantiska charm. Skapade med omtanke och noggrant utvalda blommor.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-light mb-4 uppercase tracking-wider">Kontakta mig</h4>
                <p className="text-sm text-[#F5F1E8]/80">
                  Email: info@florabysusanna.se<br/>
                  Telefon: 073-713 18 84
                </p>
              </div>
              <div>
                <h4 className="text-lg font-light mb-4 uppercase tracking-wider">Följ min resa</h4>
                <div className="flex space-x-4">
                  <a href="https://instagram.com/florabysusanna" target="_blank" rel="noopener noreferrer" className="text-[#F5F1E8]/80 hover:text-[#E1306C] transition-all hover:scale-125 flex items-center gap-2 group">
                    <svg className="w-6 h-6 transition-all" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span className="group-hover:font-semibold transition-all">Instagram</span>
                  </a>
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
