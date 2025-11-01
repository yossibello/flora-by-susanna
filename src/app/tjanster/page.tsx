'use client';

import { useState } from 'react';

export default function TjansterPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-[#FFF8F0] to-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-7xl md:text-8xl text-[#3D3D3D] mb-8 leading-tight">
            <span className="handwritten text-[#E8B4B8] block text-8xl md:text-9xl mb-4">Vi Fångar Stunder</span>
            <span className="text-4xl md:text-5xl font-light">Du Vill Minnas</span>
          </h1>
        </div>
      </section>

      {/* Service Section 1 - Image Left */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="aspect-[4/5] bg-gradient-to-br from-[#9CAF88]/20 to-[#E8B4B8]/20 rounded-2xl overflow-hidden">
              {/* Image placeholder */}
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-9xl opacity-20">🌸</span>
              </div>
            </div>
            <div>
              <h2 className="text-5xl text-[#3D3D3D] mb-6">
                <span className="handwritten text-[#9CAF88]">Från Stort</span> till Litet
              </h2>
              <p className="text-[#3D3D3D]/70 leading-relaxed text-lg font-light mb-6">
                Behöver du hjälp med ett unikt arrangemang eller ett helt evenemang? Kanske 
                utsmyckning till en butik, en fotosession eller ett inredningsreportage?
              </p>
              <p className="text-[#3D3D3D]/70 leading-relaxed text-lg font-light mb-6">
                Vi fångar stunden och gör det personligt oavsett om det gäller en företagsevent, 
                ett romantiskt bröllop, en begravning eller en bukett till någon kär. Kanske dig själv.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="border-t border-[#9CAF88]/20"></div>
      </div>

      {/* Service Section 2 - Image Right */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-5xl text-[#3D3D3D] mb-6">
                <span className="handwritten text-[#E8B4B8]">Fridfullt</span> eller Episkt
              </h2>
              <p className="text-[#3D3D3D]/70 leading-relaxed text-lg font-light mb-6">
                Blommor kan bygga förtroende, bidra till empati, skapa glädje och lindra sorg. 
                Hos oss finns det inget standardsortiment eller färdiga idéer.
              </p>
              <p className="text-[#3D3D3D]/70 leading-relaxed text-lg font-light mb-6">
                Vi lyssnar alltid på vad du är ute efter och kommer med förslag baserat på 
                dina idéer, drömmar och personlighet. Varje blomma berättar din historia.
              </p>
            </div>
            <div className="aspect-[4/5] bg-gradient-to-br from-[#E8B4B8]/20 to-[#9CAF88]/20 rounded-2xl overflow-hidden order-1 md:order-2">
              {/* Image placeholder */}
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-9xl opacity-20">🌿</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 bg-[#9CAF88]/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl text-[#3D3D3D] mb-6">
              <span className="handwritten text-[#9CAF88]">Våra</span> Tjänster
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="romantic-card p-10 rounded-xl">
              <div className="text-5xl mb-6">💐</div>
              <h3 className="text-2xl handwritten text-[#E8B4B8] mb-4">Bröllop</h3>
              <p className="text-[#3D3D3D]/70 leading-relaxed">
                Romantiska arrangemang för din speciella dag, från brudbuketten till hela blomsterdekoren.
              </p>
            </div>

            <div className="romantic-card p-10 rounded-xl">
              <div className="text-5xl mb-6">🎉</div>
              <h3 className="text-2xl handwritten text-[#E8B4B8] mb-4">Event & Fester</h3>
              <p className="text-[#3D3D3D]/70 leading-relaxed">
                Skapa magiska stunder med vackra blommor för alla typer av evenemang och firanden.
              </p>
            </div>

            <div className="romantic-card p-10 rounded-xl">
              <div className="text-5xl mb-6">🕊️</div>
              <h3 className="text-2xl handwritten text-[#E8B4B8] mb-4">Begravningar</h3>
              <p className="text-[#3D3D3D]/70 leading-relaxed">
                Värdiga och vackra arrangemang som hedrar minnen och ger tröst i svåra stunder.
              </p>
            </div>

            <div className="romantic-card p-10 rounded-xl">
              <div className="text-5xl mb-6">🏢</div>
              <h3 className="text-2xl handwritten text-[#E8B4B8] mb-4">Företag</h3>
              <p className="text-[#3D3D3D]/70 leading-relaxed">
                Veckovisa leveranser, event och presentarrangemang för företag och kontor.
              </p>
            </div>

            <div className="romantic-card p-10 rounded-xl">
              <div className="text-5xl mb-6">📸</div>
              <h3 className="text-2xl handwritten text-[#E8B4B8] mb-4">Styling & Foto</h3>
              <p className="text-[#3D3D3D]/70 leading-relaxed">
                Blomsterarrangemang för fotosessioner, modeplåtningar och inredningsreportage.
              </p>
            </div>

            <div className="romantic-card p-10 rounded-xl">
              <div className="text-5xl mb-6">🎨</div>
              <h3 className="text-2xl handwritten text-[#E8B4B8] mb-4">Workshops</h3>
              <p className="text-[#3D3D3D]/70 leading-relaxed">
                Lär dig konsten att arrangera blommor i våra inspirerande och mysiga workshops.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="kontakt" className="py-24 px-6 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Form */}
            <div>
              <h2 className="text-5xl text-[#3D3D3D] mb-4">
                <span className="handwritten text-[#E8B4B8]">Hör</span> av Dig!
              </h2>
              <p className="text-[#3D3D3D]/70 leading-relaxed text-lg font-light mb-8">
                Berätta om dina idéer nedan så återkommer vi. Vi ser fram emot att skapa något vackert tillsammans med dig.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-[#7A8B6F] text-sm uppercase tracking-wider mb-2">
                    För- och efternamn *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-[#9CAF88]/30 rounded-lg focus:border-[#9CAF88] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[#7A8B6F] text-sm uppercase tracking-wider mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-[#9CAF88]/30 rounded-lg focus:border-[#9CAF88] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[#7A8B6F] text-sm uppercase tracking-wider mb-2">
                    Ämne *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-[#9CAF88]/30 rounded-lg focus:border-[#9CAF88] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[#7A8B6F] text-sm uppercase tracking-wider mb-2">
                    Meddelande *
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-[#9CAF88]/30 rounded-lg focus:border-[#9CAF88] focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-10 py-4 bg-[#E8B4B8] text-white rounded-full hover:bg-[#D4A59A] transition-all shadow-lg hover:shadow-xl text-sm uppercase tracking-wider"
                >
                  Skicka Meddelande
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="romantic-card p-12 rounded-2xl">
              <div className="aspect-square bg-gradient-to-br from-[#9CAF88]/10 to-[#E8B4B8]/10 rounded-xl mb-8 flex items-center justify-center">
                <span className="text-9xl opacity-30">🌺</span>
              </div>
              
              <h3 className="text-3xl handwritten text-[#9CAF88] mb-6">Vår Studio</h3>
              
              <div className="space-y-6 text-[#3D3D3D]/70">
                <div>
                  <p className="text-[#7A8B6F] text-sm uppercase tracking-wider mb-2">Adress</p>
                  <p className="text-lg">Stockholm<br/>Sverige</p>
                </div>

                <div>
                  <p className="text-[#7A8B6F] text-sm uppercase tracking-wider mb-2">Öppettider</p>
                  <p className="text-lg">
                    Vardagar: 9.00 – 18.00<br/>
                    Lördag: 10.00 – 16.00<br/>
                    Söndag: Stängt
                  </p>
                </div>

                <div>
                  <p className="text-[#7A8B6F] text-sm uppercase tracking-wider mb-2">Kontakt</p>
                  <p className="text-lg">
                    <a href="tel:+46812345678" className="hover:text-[#9CAF88] transition-colors">08-123 45 678</a><br/>
                    <a href="mailto:hello@florabysusanna.se" className="hover:text-[#9CAF88] transition-colors">hello@florabysusanna.se</a>
                  </p>
                </div>

                <div>
                  <p className="text-[#7A8B6F] text-sm uppercase tracking-wider mb-2">Sociala Medier</p>
                  <div className="flex gap-4">
                    <a href="#" className="hover:text-[#E8B4B8] transition-colors">Instagram</a>
                    <a href="#" className="hover:text-[#E8B4B8] transition-colors">Pinterest</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-[#9CAF88]/10 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#7A8B6F] text-sm uppercase tracking-[0.3em] mb-4">Samarbete</p>
          <h2 className="text-5xl text-[#3D3D3D] mb-6">
            <span className="handwritten text-[#E8B4B8] block text-6xl mb-3">Världsomspännande</span>
            Blombud
          </h2>
          <p className="text-[#3D3D3D]/70 text-lg mb-8 font-light">
            Genom vårt samarbete med Interflora kan du skicka blommor till vem du vill i hela världen.
          </p>
        </div>
      </section>
    </div>
  );
}
