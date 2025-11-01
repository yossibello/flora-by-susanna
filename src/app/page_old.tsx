import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen">
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
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="text-[#5A6B4D] text-sm uppercase tracking-[0.3em] mb-6 font-bold">Florist i Brottby</p>
          <h1 className="text-7xl md:text-8xl mb-6 text-[#4A4A48] leading-tight">
            <span className="handwritten block text-[#7A8B6F] text-8xl md:text-9xl">Blommor från Hjärtat</span>
            <span className="text-5xl md:text-6xl font-light">Skapade i Min Blomsterstudio</span>
          </h1>
          <p className="text-xl text-[#3D3D3D] mb-12 leading-relaxed max-w-2xl mx-auto font-normal">
            Från min studio på gården i Brottby skapar jag personliga och kreativa blomsterarrangemang/buketter 
            med hantverksmässig fingerkänsla och blomsterglädje. Varje bukett/arrangemang är unik och inspirerad av just dina önskemål.
          </p>
          <div className="flex gap-6 justify-center">
            <a href="/tjanster#kontakt" className="px-10 py-4 bg-[#A8B69B] text-white rounded-full hover:bg-[#8B956D] transition-all shadow-lg hover:shadow-xl text-sm uppercase tracking-wider">
              Beställ Nu
            </a>
            <a href="/tjanster" className="px-10 py-4 border-2 border-[#A8B69B] text-[#8B956D] rounded-full hover:bg-[#A8B69B] hover:text-white transition-all text-sm uppercase tracking-wider">
              Se Mina Tjänster
            </a>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-white to-[#F5F1E8]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg group">
              <Image 
                src="/flower/bild webbsida bröllop.jpeg"
                alt="Bröllopsblommor"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg group">
              <Image 
                src="/flower/Bild 2 webbsida blommor.JPG"
                alt="Vackra blommor"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg group">
              <Image 
                src="/flower/bild webbsida blommor.JPG"
                alt="Blomsterarrangemang"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl text-[#000000] mb-4">
              <span className="handwritten text-[#000000]">Mina</span> Blomstertjänster
            </h2>
            <p className="text-[#5A6B4D] max-w-2xl mx-auto text-lg font-semibold">
              Från bröllop till begravningar, högtider till vardagslyx - jag skapar arrangemang för alla tillfällen med stor omtanke och efter personliga önskemål
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Bröllop", icon: "🌹", description: "Romantiska arrangemang för din speciella dag" },
              { name: "Begravningar", icon: "🤍", description: "Värdiga kransar och buketter som hedrar minnen" },
              { name: "Buketter & Arrangemang", icon: "�", description: "För födelsedagar, anniversarier och alla tillfällen" },
              { name: "Högtider", icon: "✨", description: "Säsongsbetonade arrangemang för jul, påsk och midsommar" },
              { name: "Evenemang", icon: "�", description: "Blomsterdekor för fester, mingel och företagsevent" },
              { name: "Företag", icon: "�", description: "Veckovisa leveranser och presentarrangemang" },
            ].map((service, i) => (
              <div key={i} className="romantic-card rounded-lg overflow-hidden group cursor-pointer hover:border-[#A8B69B]">
                <div className="p-8 text-center">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#A8B69B]/20 to-[#D4B5A8]/20 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl handwritten text-[#4A4A48] mb-2">{service.name}</h3>
                  <p className="text-[#4A4A48]/60 text-sm leading-relaxed mb-4">{service.description}</p>
                  <a href="/tjanster#kontakt" className="text-[#A8B69B] hover:text-[#8B956D] text-sm uppercase tracking-wider">
                    Kontakta mig →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Studio Section */}
      <section className="py-24 bg-gradient-to-b from-white to-[#F5F1E8]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="/flower/FullSizeRender 3.jpg"
                alt="Blomsterarrangemang från studion"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-[#8B956D] text-sm uppercase tracking-[0.3em] mb-4">Min Studio</p>
              <h2 className="text-5xl text-[#4A4A48] mb-6">
                <span className="handwritten text-[#D4B5A8] block text-6xl mb-2">Från Gården i Brottby</span>
                Till Ditt Hem
              </h2>
              <p className="text-[#4A4A48]/70 leading-relaxed mb-6 text-lg font-light">
                Från min hemstudio på gården i Brottby skapar jag personliga och kreativa blomsterarrangemang 
                med hantverksmässig känsla. Här har jag lugnet och inspirationen att forma varje detalj 
                med omsorg och passion.
              </p>
              <p className="text-[#4A4A48]/70 leading-relaxed mb-8 text-lg font-light">
                Istället för en traditionell butik erbjuder jag personlig service där dina önskemål 
                är min inspiration. Tillsammans skapar vi blomsterarrangemang som speglar just dina drömmar.
              </p>
              <a href="/about" className="inline-block text-[#A8B69B] hover:text-[#8B956D] transition-colors text-sm uppercase tracking-wider border-b-2 border-[#A8B69B] pb-1">
                Läs Mer Om Mig →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl text-[#4A4A48] mb-4">
              <span className="handwritten text-[#A8B69B]">Så Enkelt</span> Beställer Du
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Kontakta Mig", description: "Fyll i formuläret eller ring mig direkt" },
              { step: "2", title: "Berätta Din Vision", description: "Dela dina önskemål, färger och stil" },
              { step: "3", title: "Jag Skapar", description: "Jag komponerar ditt unika arrangemang" },
              { step: "4", title: "Leverans/Upphämtning", description: "Du väljer om du hämtar eller får leverans" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-[#A8B69B] text-white rounded-full flex items-center justify-center text-2xl font-light mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl handwritten text-[#D4B5A8] mb-2">{item.title}</h3>
                <p className="text-[#4A4A48]/70 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-[#F5F1E8] to-[#A8B69B]/10 text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-6xl text-[#4A4A48] mb-6">
            <span className="handwritten text-[#D4B5A8] block text-7xl mb-3">Redo att Beställa?</span>
            Låt Oss Skapa Något Vackert
          </h2>
          <p className="text-[#4A4A48]/70 text-xl mb-10 font-light">
            Kontakta mig idag så pratar vi om dina önskemål och skapar det perfekta blomsterarrangemanget för dig
          </p>
          <a href="/tjanster#kontakt" className="inline-block px-12 py-5 bg-[#D4B5A8] text-white rounded-full hover:bg-[#C9A79E] transition-all shadow-lg hover:shadow-xl text-sm uppercase tracking-wider">
            Kontakta Mig Nu
          </a>
        </div>
      </section>
    </div>
  );
}

