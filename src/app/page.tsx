import Image from 'next/image'

const ServiceIcon = ({ type }: { type: string }) => {
  const icons = {
    wedding: (
      <svg className="w-12 h-12 text-[#7A8B6F]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>
    ),
    funeral: (
      <svg className="w-12 h-12 text-[#7A8B6F]" fill="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1"/>
        <circle cx="12" cy="8" r="2"/>
        <circle cx="8" cy="12" r="2"/>
        <circle cx="16" cy="12" r="2"/>
        <circle cx="12" cy="16" r="2"/>
        <circle cx="10" cy="10" r="1.5" opacity="0.6"/>
        <circle cx="14" cy="10" r="1.5" opacity="0.6"/>
        <circle cx="10" cy="14" r="1.5" opacity="0.6"/>
        <circle cx="14" cy="14" r="1.5" opacity="0.6"/>
      </svg>
    ),
    bouquet: (
      <svg className="w-12 h-12 text-[#7A8B6F]" fill="currentColor" viewBox="0 0 24 24">
        {/* Pion blomma - oregelbundna kronblad */}
        <ellipse cx="11" cy="7" rx="3" ry="2.5" opacity="0.4"/>
        <ellipse cx="13" cy="7.5" rx="2.8" ry="2.3" opacity="0.4"/>
        <ellipse cx="12" cy="9" rx="2.5" ry="2" opacity="0.5"/>
        <ellipse cx="10.5" cy="8" rx="2" ry="2.5" opacity="0.5" transform="rotate(-30 10.5 8)"/>
        <ellipse cx="13.5" cy="8.5" rx="2" ry="2.3" opacity="0.5" transform="rotate(25 13.5 8.5)"/>
        <ellipse cx="12" cy="6.5" rx="2.2" ry="1.8" opacity="0.6" transform="rotate(-10 12 6.5)"/>
        <ellipse cx="11.5" cy="9.5" rx="1.8" ry="2" opacity="0.6" transform="rotate(15 11.5 9.5)"/>
        {/* Centrum */}
        <circle cx="12" cy="8" r="1.2"/>
        <circle cx="11.5" cy="7.8" r="0.5" opacity="0.7"/>
        <circle cx="12.5" cy="8.2" r="0.5" opacity="0.7"/>
        {/* Stjälk - lätt böjd */}
        <path d="M12 10c0 2-0.5 4-0.8 6c-0.2 1.5-0.2 3-0.2 4" stroke="currentColor" strokeWidth="1.8" fill="none"/>
        {/* Blad - oregelbundna */}
        <path d="M11 14c-1.5 0.5-2.5 1.5-3 2.5c-0.3 0.6-0.3 1-0.2 1.2" stroke="currentColor" strokeWidth="1.3" fill="none" opacity="0.75"/>
        <path d="M11.5 17c1.2 0.8 2 1.8 2.5 2.8" stroke="currentColor" strokeWidth="1.3" fill="none" opacity="0.75"/>
      </svg>
    ),
    holidays: (
      <svg className="w-12 h-12 text-[#7A8B6F]" fill="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="8" r="3"/>
        <ellipse cx="8" cy="9" rx="2" ry="2.5" opacity="0.7"/>
        <ellipse cx="16" cy="9" rx="2" ry="2.5" opacity="0.7"/>
        <ellipse cx="10" cy="12" rx="1.5" ry="2" opacity="0.6"/>
        <ellipse cx="14" cy="12" rx="1.5" ry="2" opacity="0.6"/>
        <path d="M12 11v8M10 14l-2 2M14 14l2 2M10 18l-1 2M14 18l1 2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <circle cx="6" cy="14" r="1" opacity="0.5"/>
        <circle cx="18" cy="14" r="1" opacity="0.5"/>
      </svg>
    ),
    event: (
      <svg className="w-12 h-12 text-[#7A8B6F]" fill="currentColor" viewBox="0 0 24 24">
        <circle cx="6" cy="6" r="2.5"/>
        <circle cx="18" cy="6" r="2.5"/>
        <circle cx="6" cy="18" r="2.5"/>
        <circle cx="18" cy="18" r="2.5"/>
        <circle cx="12" cy="12" r="3"/>
        <path d="M8 8c1 1 2 2 4 4m0 0c2-2 3-3 4-4M12 12c-2 2-3 3-4 4m4-4c2 2 3 3 4 4" stroke="currentColor" strokeWidth="1" fill="none"/>
        <circle cx="12" cy="4" r="1.5" opacity="0.6"/>
        <circle cx="12" cy="20" r="1.5" opacity="0.6"/>
        <circle cx="4" cy="12" r="1.5" opacity="0.6"/>
        <circle cx="20" cy="12" r="1.5" opacity="0.6"/>
      </svg>
    ),
    corporate: (
      <svg className="w-12 h-12 text-[#7A8B6F]" fill="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="10" r="3.5"/>
        <circle cx="7" cy="13" r="2" opacity="0.7"/>
        <circle cx="17" cy="13" r="2" opacity="0.7"/>
        <circle cx="9" cy="17" r="1.5" opacity="0.6"/>
        <circle cx="15" cy="17" r="1.5" opacity="0.6"/>
        <path d="M12 13.5v2M10 15.5l-1 1.5M14 15.5l1 1.5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <circle cx="12" cy="6" r="1.2" opacity="0.5"/>
        <circle cx="8" cy="9" r="1" opacity="0.5"/>
        <circle cx="16" cy="9" r="1" opacity="0.5"/>
      </svg>
    ),
  };
  
  return <div className="text-[#7A8B6F]">{icons[type as keyof typeof icons]}</div>;
};

export default function Home() {
  const services = [
    { name: "Bröllop", type: "wedding", image: "/flower/brollop.JPG", description: "Allt det vackra för er speciella dag - Brudbukett, Corsage och Arrangemang\nPrisexempel: Brudbukett 900kr - 3200kr" },
    { name: "Buketter & Arrangemang", type: "bouquet", image: "/flower/bukett.JPG", description: "För födelsedagar, en hälsning och för livets alla tillfällen\nPrisexempel: Bukett 500kr - 2000kr" },
    { name: "Begravningar", type: "funeral", image: "/flower/begravning.JPG", description: "Vackra arrangemang, kransar och buketter som hedrar minnen\nPrisexempel: 500kr - 3500kr" },
    { name: "Högtider", type: "holidays", image: "/flower/hogtider.JPG", description: "Säsongsbetonade arrangemang för jul, påsk och midsommar" },
    { name: "Evenemang", type: "event", image: "/flower/evenemang.JPG", description: "Blomsterdekor för fester, mingel och företagsevent" },
    { name: "Företag", type: "corporate", image: "/flower/foretag.JPG", description: "Veckovisa leveranser och presentarrangemang" },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#F5F1E8] via-white to-white overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="/flower/FullSizeRender 2.jpg"
            alt="Blommor från studion"
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#F5F1E8]/60 via-white/70 to-white"></div>
        </div>
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
          <p className="text-[#5A6B4D] text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-4 sm:mb-6 font-bold">Florist i Stockholm</p>
          <h1 className="text-5xl sm:text-7xl md:text-8xl mb-4 sm:mb-6 text-[#4A4A48] leading-tight">
            <span className="handwritten block text-[#7A8B6F] text-6xl sm:text-8xl md:text-9xl">Blommor från Hjärtat</span>
            <span className="text-3xl sm:text-5xl md:text-6xl font-light">Skapade från min Blomsterstudio</span>
          </h1>
          <p className="text-base sm:text-xl text-[#3D3D3D] mb-8 sm:mb-12 leading-relaxed max-w-2xl mx-auto font-normal">
            Från min blomsterstudio i Brottby skapar jag personliga buketter och arrangemang – alltid med fingertoppskänsla, värme och kreativitet. Varje bukett är unik och personlig. Leverans eller upphämtning i hela Norrort/Stockholm.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <a href="/tjanster#kontakt" className="px-8 sm:px-10 py-3 sm:py-4 bg-[#A8B69B] text-white rounded-full hover:bg-[#8B956D] transition-all shadow-lg hover:shadow-xl text-xs sm:text-sm uppercase tracking-wider">
              Beställ Nu
            </a>
            <a href="/tjanster" className="px-8 sm:px-10 py-3 sm:py-4 border-2 border-[#A8B69B] text-[#8B956D] rounded-full hover:bg-[#A8B69B] hover:text-white transition-all text-xs sm:text-sm uppercase tracking-wider">
              Se Mina Tjänster
            </a>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-[#F9F7F4]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl md:text-6xl text-[#4A4A48] mb-4">
              <span className="handwritten text-[#A8B69B]">Portfolio</span> & Inspiration
            </h2>
            <p className="text-[#5A6B4D] max-w-2xl mx-auto text-base sm:text-lg font-semibold">
              Alla buketter skapas efter dina önskemål – ingen bukett är den andra lik.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: "/flower/färggladbukett.JPG", title: "Färglad Bukett", category: "Arrangemang" },
              { src: "/flower/färgbudbukett.JPG", title: "Färgglad Brudbukett", category: "Bröllop" },
              { src: "/flower/pudervackerbukett.JPG", title: "Puderbukett", category: "Arrangemang" },
              { src: "/flower/brollop-gallery.jpeg", title: "Bröllopsdekor", category: "Bröllop" },
              { src: "/flower/Bild 2 webbsida blommor.JPG", title: "Vardagsbukett", category: "Arrangemang" },
              { src: "/flower/bild webbsida blommor.JPG", title: "Säsongsarrangemang", category: "Arrangemang" }
            ].map((item, i) => (
              <div key={i} className="group">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500">
                  <Image 
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl text-[#000000] mb-4">
              <span className="handwritten text-[#000000]">Mina</span> blomstertjänster
            </h2>
            <p className="text-[#5A6B4D] max-w-2xl mx-auto text-base sm:text-lg font-semibold">
              Från bröllop till begravningar, högtider till vardagslyx - jag skapar arrangemang för alla tillfällen med stor omtanke och efter personliga önskemål
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, i) => (
              <div key={i} className="romantic-card rounded-lg overflow-hidden group cursor-pointer hover:border-[#A8B69B]">
                <div className="p-8 text-center">
                  <div className="relative w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Image 
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-2xl handwritten text-[#4A4A48] mb-2">{service.name}</h3>
                  <p className="text-[#4A4A48]/60 text-sm leading-relaxed mb-4 whitespace-pre-line">{service.description}</p>
                  <a href="/tjanster#kontakt" className="text-[#A8B69B] hover:text-[#8B956D] text-sm uppercase tracking-wider">
                    Kontakta mig →
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Bröllopsbilder */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg group">
              <Image 
                src="/flower/bröllopcorneiliatvå.JPG"
                alt="Bröllopsarrangemang Cornelia"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg group">
              <Image 
                src="/flower/bröllopros.JPG"
                alt="Bröllopsarrangemang med rosor"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg group">
              <Image 
                src="/flower/syrenbukett.JPG"
                alt="Syrenbukett"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Studio Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-[#F5F1E8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16 items-center">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="/flower/FullSizeRender 3.jpg"
                alt="Blomsterarrangemang från studion"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-[#8B956D] text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-3 sm:mb-4">Min Studio</p>
              <h2 className="text-4xl sm:text-5xl text-[#4A4A48] mb-4 sm:mb-6">
                <span className="handwritten text-[#D4B5A8] block text-5xl sm:text-6xl mb-2">Från gården i Brottby</span>
                till blomsterglädje
              </h2>
              <p className="text-[#4A4A48]/70 leading-relaxed mb-4 sm:mb-6 text-base sm:text-lg font-light">
                Från min hemstudio på gården i Brottby som ligger norr om Stockholm, skapar jag personliga och kreativa blomsterarrangemang 
                med hantverket i stor fokus. Här har jag lugnet och inspirationen att forma varje detalj 
                med omsorg och passion. Varje blomma och material är noga utvalt, allt med varm hand och känsla.
              </p>
              <p className="text-[#4A4A48]/70 leading-relaxed mb-6 sm:mb-8 text-base sm:text-lg font-light">
                Istället för en traditionell butik erbjuder jag personlig service där dina önskemål 
                är min inspiration. Tillsammans skapar vi och designar blomster som speglar just dina drömmar.
              </p>
              <a href="/about" className="inline-block text-[#A8B69B] hover:text-[#8B956D] transition-colors text-xs sm:text-sm uppercase tracking-wider border-b-2 border-[#A8B69B] pb-1">
                Läs Mer Om Mig →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl text-[#4A4A48] mb-4">
              <span className="handwritten text-[#A8B69B]">Så enkelt</span> beställer du
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
            {[
              { step: "1", title: "Kontakta Mig", description: "Fyll i formuläret, mejla info@florabysusanna.se eller ring mig direkt på 0737131884" },
              { step: "2", title: "Berätta Din Vision", description: "Dela dina önskemål, färger och stil" },
              { step: "3", title: "Jag Skapar", description: "Jag komponerar ditt unika arrangemang eller binder din unika bukett." },
              { step: "4", title: "Leverans/Upphämtning", description: "Du kan välja om du önskar att hämta eller få leverans i Brottby, Vallentuna, Åkersberga, Täby, Danderyd och Stockholm." },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-[#A8B69B] text-white rounded-full flex items-center justify-center text-2xl font-light mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl handwritten text-[#8B956D] mb-2 font-semibold">{item.title}</h3>
                <p className="text-[#4A4A48] text-base leading-relaxed font-medium">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-[#F5F1E8] to-[#A8B69B]/10 text-center px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-6xl text-[#4A4A48] mb-4 sm:mb-6">
            <span className="handwritten text-[#D4B5A8] block text-5xl sm:text-7xl mb-3">Redo att Beställa?</span>
            Låt Oss Skapa Något Vackert
          </h2>
          <p className="text-[#4A4A48]/70 text-base sm:text-xl mb-8 sm:mb-10 font-light">
            Kontakta mig idag så pratar vi om dina önskemål och skapar det perfekta blomsterarrangemanget för dig
          </p>
          <a href="#kontakt" className="inline-block px-10 sm:px-12 py-4 sm:py-5 bg-[#D4B5A8] text-white rounded-full hover:bg-[#C9A79E] transition-all shadow-lg hover:shadow-xl text-xs sm:text-sm uppercase tracking-wider">
            Kontakta Mig Nu
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-16 sm:py-20 px-4 sm:px-6 bg-[#2D3D2A] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-light mb-4">Kontakta Flora by Susanna</h2>
            <div className="w-24 h-1 bg-[#A8B69B] mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-medium mb-6 text-[#A8B69B]">Kontaktuppgifter</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[#A8B69B]/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-[#A8B69B]">📞</span>
                    </div>
                    <div>
                      <p className="font-medium">Telefon</p>
                      <p className="text-gray-300">073-713 1884</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[#A8B69B]/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-[#A8B69B]">✉️</span>
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-300">Info@florabysusanna.se</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[#A8B69B]/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-[#A8B69B]">📍</span>
                    </div>
                    <div>
                      <p className="font-medium">Plats</p>
                      <p className="text-gray-300">Blomsterstudio i Brottby, norr om Stockholm</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-4 text-[#A8B69B]">Öppettider & Service</h3>
                <div className="space-y-2 text-gray-300">
                  <p>🕒 <strong>Konsultationer:</strong> Efter överenskommelse</p>
                  <p>🚚 <strong>Leverans:</strong> Enligt överenskommelse inom Norrort och stockholm området</p>
                  <p>🌸 <strong>Specialitet:</strong> Personliga buketter, bröllop och begravning.</p>
                  <p>💍 <strong>Bröllop:</strong> Helgfri konsultation</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-xl font-medium mb-6 text-[#A8B69B]">Skicka En Förfrågan</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="Ditt namn" 
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-[#A8B69B] focus:outline-none transition-colors"
                  />
                  <input 
                    type="email" 
                    placeholder="Din email" 
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-[#A8B69B] focus:outline-none transition-colors"
                  />
                </div>
                <input 
                  type="tel" 
                  placeholder="Telefonnummer" 
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-[#A8B69B] focus:outline-none transition-colors"
                />
                <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-[#A8B69B] focus:outline-none transition-colors">
                  <option value="">Välj tjänst</option>
                  <option value="brollop">Bröllop</option>
                  <option value="bukett">Buketter & Arrangemang</option>
                  <option value="begravning">Begravningar</option>
                  <option value="hogtider">Högtider</option>
                  <option value="evenemang">Evenemang</option>
                  <option value="foretag">Företag</option>
                </select>
                <textarea 
                  placeholder="Berätta om dina önskemål, färger, stil och datum..."
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-[#A8B69B] focus:outline-none transition-colors resize-none"
                ></textarea>
                <button 
                  type="submit"
                  className="w-full px-6 py-3 bg-[#A8B69B] text-white rounded-lg hover:bg-[#8B956D] transition-colors font-medium"
                >
                  🌸 Skicka Förfrågan
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
