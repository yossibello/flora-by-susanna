export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-[#FFF8F0] to-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#7A8B6F] text-sm uppercase tracking-[0.3em] mb-6">Om Oss</p>
          <h1 className="text-7xl md:text-8xl text-[#3D3D3D] mb-8">
            <span className="handwritten text-[#E8B4B8] block text-8xl md:text-9xl mb-4">Vår Historia</span>
            <span className="text-4xl md:text-5xl font-light">Där Natur Möter Konst</span>
          </h1>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div className="aspect-[4/5] bg-gradient-to-br from-[#9CAF88]/20 to-[#E8B4B8]/20 rounded-2xl"></div>
            <div>
              <h2 className="text-4xl handwritten text-[#D4B5A8] mb-6">En Dröm Som Blomstrade på Gården i Brottby</h2>
              <p className="text-[#4A4A48]/70 leading-relaxed text-lg font-light mb-6">
                Från min hemstudio på gården i Brottby skapar jag personliga och kreativa blomsterarrangemang 
                med hantverksmässig känsla. Här, omgiven av natur och lugn, har jag hittat den 
                perfekta platsen för min kreativitet att blomstra.
              </p>
              <p className="text-[#4A4A48]/70 leading-relaxed text-lg font-light mb-6">
                Istället för en traditionell butik har jag valt att arbeta från mitt hem på gården. 
                Detta ger mig möjlighet att lägga all min tid och energi på det jag älskar mest - 
                att skapa vackra arrangemang där varje detalj formas efter dina önskemål. 
                Dina personliga drömmar är min inspiration.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl handwritten text-[#A8B69B] mb-6">Min Arbetsfilosofi</h2>
              <p className="text-[#4A4A48]/70 leading-relaxed text-lg font-light mb-6">
                Jag tror att blommor ska kännas äkta och personliga. Från min studio på gården i Brottby 
                skapar jag kreativa arrangemang med hantverksmässig känsla, där dina personliga önskemål 
                är min största inspiration - inte färdiga koncept från en katalog.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-[#D4B5A8] text-2xl">✿</span>
                  <p className="text-[#4A4A48]/70 font-light">Personlig och kreativ service - dina önskemål är min inspiration</p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-[#D4B5A8] text-2xl">✿</span>
                  <p className="text-[#4A4A48]/70 font-light">Hantverksmässig känsla i varje detalj</p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-[#D4B5A8] text-2xl">✿</span>
                  <p className="text-[#4A4A48]/70 font-light">Handgjorda arrangemang från min hemstudio</p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-[#D4B5A8] text-2xl">✿</span>
                  <p className="text-[#4A4A48]/70 font-light">Flexibel leverans eller upphämtning efter överenskommelse</p>
                </div>
              </div>
            </div>
            <div className="aspect-[4/5] bg-gradient-to-br from-[#E8B4B8]/20 to-[#9CAF88]/20 rounded-2xl order-1 md:order-2"></div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-[#9CAF88]/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl text-[#3D3D3D] mb-4">
              <span className="handwritten text-[#9CAF88]">Vad Vi</span> Står För
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center romantic-card p-10 rounded-xl">
              <div className="text-6xl mb-6">🌾</div>
              <h3 className="text-2xl handwritten text-[#E8B4B8] mb-4">Naturlig Skönhet</h3>
              <p className="text-[#3D3D3D]/70 leading-relaxed">
                Omfamnar den vilda, otämjda elegansen hos naturen i varje stjälk och kronblad
              </p>
            </div>
            <div className="text-center romantic-card p-10 rounded-xl">
              <div className="text-6xl mb-6">🤍</div>
              <h3 className="text-2xl handwritten text-[#E8B4B8] mb-4">Hjärtlig Omsorg</h3>
              <p className="text-[#3D3D3D]/70 leading-relaxed">
                Varje arrangemang skapas med kärlek, avsikt och personlig uppmärksamhet
              </p>
            </div>
            <div className="text-center romantic-card p-10 rounded-xl">
              <div className="text-6xl mb-6">🌍</div>
              <h3 className="text-2xl handwritten text-[#E8B4B8] mb-4">Hållbarhet</h3>
              <p className="text-[#3D3D3D]/70 leading-relaxed">
                Hedrar jorden genom lokalt inköp och miljömedvetna metoder
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-6xl text-[#3D3D3D] mb-8">
            <span className="handwritten text-[#E8B4B8] block text-7xl mb-4">Besök Vår Studio</span>
            <span className="text-3xl font-light">I Hjärtat av Stockholm</span>
          </h2>
          <div className="romantic-card p-12 rounded-2xl text-left md:text-center">
            <div className="space-y-4 text-[#3D3D3D]/70 text-lg">
              <p><span className="text-[#9CAF88] font-medium">E-post:</span> hello@florabysusanna.se</p>
              <p><span className="text-[#9CAF88] font-medium">Telefon:</span> +46 8 123 4567</p>
              <p><span className="text-[#9CAF88] font-medium">Plats:</span> Stockholm, Sverige</p>
            </div>
            <p className="text-[#3D3D3D]/60 mt-8 text-sm font-light">
              Kom förbi för ett besök, eller hör av dig för att diskutera din skräddarsydda blomvision
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
