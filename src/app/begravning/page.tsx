import Image from 'next/image'

export default function BegravningPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center text-center px-4">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/flower/begravning.JPG')",
            opacity: 0.3
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F5F1E8]/80 via-[#F5F1E8]/70 to-[#E8F0E0]/60"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-serif mb-4 text-[#7A8B6F]">
            Begravningsblommor
          </h1>
          <p className="text-xl sm:text-2xl text-[#6B5B4F] mb-4 leading-relaxed max-w-2xl mx-auto font-medium">
            Personliga arrangemang med omtanke
          </p>
          <p className="text-lg sm:text-xl text-[#6B5B4F] mb-10 sm:mb-14 leading-relaxed max-w-2xl mx-auto">
            Blommor med hjärta, omsorg och respekt
          </p>
          <a 
            href="#kontakt" 
            className="inline-block bg-[#8B956D] text-white px-8 py-3 rounded hover:bg-[#7A8B6F] transition-colors shadow-lg"
          >
            Skicka en förfrågan
          </a>
        </div>
      </section>

      {/* Introduktionstext */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#6B5B4F] text-lg sm:text-xl leading-relaxed mb-6">
            Att få skapa blommor till en begravning är ett stort förtroende.
            Jag arbetar med stor omtanke, tid och respekt för att skapa arrangemang som speglar personen, minnena och känslorna som följer med ett avsked.
          </p>
          <p className="text-[#6B5B4F] text-lg sm:text-xl leading-relaxed">
            Varje blomsterarrangemang skapas i min studio i Brottby – alltid för hand, alltid personligt och alltid med säsongens vackraste blommor.
          </p>
        </div>
      </section>

      {/* Vad jag kan skapa */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-br from-[#F5F1E8] via-[#F0E8D8] to-[#EBE0CE]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl handwritten text-[#7A6B5D] mb-6">
              Vad jag kan skapa för ceremonin
            </h2>
            <p className="text-[#6B5B4F] text-lg sm:text-xl max-w-3xl mx-auto">
              Jag erbjuder alla typer av begravningsarrangemang och anpassar dem helt efter era önskemål, färger, stil och vem personen var.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Liggande buketter */}
            <div className="romantic-card p-8 rounded-2xl bg-white">
              <h3 className="text-2xl handwritten text-[#7A6B5D] mb-3">🌿 Liggande buketter</h3>
              <p className="text-[#6B5B4F] text-lg leading-relaxed">
                Mjuka och vackra arrangemang som placeras framför kistan.
              </p>
            </div>

            {/* Stående buketter */}
            <div className="romantic-card p-8 rounded-2xl bg-white">
              <h3 className="text-2xl handwritten text-[#7A6B5D] mb-3">🌸 Stående buketter</h3>
              <p className="text-[#6B5B4F] text-lg leading-relaxed">
                Ger höjd, form och uttryck – fina som sista hälsning.
              </p>
            </div>

            {/* Begravningskransar */}
            <div className="romantic-card p-8 rounded-2xl bg-white">
              <h3 className="text-2xl handwritten text-[#7A6B5D] mb-3">🌿 Begravningskransar</h3>
              <p className="text-[#6B5B4F] text-lg leading-relaxed">
                Traditionella och stämningsfulla, går att göra små eller stora.
              </p>
            </div>

            {/* Hjärtan */}
            <div className="romantic-card p-8 rounded-2xl bg-white">
              <h3 className="text-2xl handwritten text-[#7A6B5D] mb-3">💗 Hjärtan</h3>
              <p className="text-[#6B5B4F] text-lg leading-relaxed">
                Ett varmt och personligt val – perfekt för nära anhöriga.
              </p>
            </div>

            {/* Urndekorationer */}
            <div className="romantic-card p-8 rounded-2xl bg-white">
              <h3 className="text-2xl handwritten text-[#7A6B5D] mb-3">🌼 Urndekorationer</h3>
              <p className="text-[#6B5B4F] text-lg leading-relaxed">
                Mjuka och vackra arrangemang som omfamnar urnan.
              </p>
            </div>

            {/* Kistdekorationer */}
            <div className="romantic-card p-8 rounded-2xl bg-white">
              <h3 className="text-2xl handwritten text-[#7A6B5D] mb-3">🌿 Kistdekorationer</h3>
              <p className="text-[#6B5B4F] text-lg leading-relaxed">
                Större personliga dekorationer som hedrar och berättar något om personen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Band & kort */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl handwritten text-[#7A6B5D] mb-8 text-center">💌 Band & kort</h2>
          <p className="text-[#6B5B4F] text-lg sm:text-xl leading-relaxed text-center mb-8">
            Till varje arrangemang kan ni lägga till en hälsning:
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-8">
            <div className="romantic-card p-6 rounded-2xl text-center">
              <h3 className="text-xl font-bold text-[#7A6B5D] mb-2">Begravningsband</h3>
              <p className="text-3xl font-bold text-[#8B956D]">299 kr</p>
            </div>
            <div className="romantic-card p-6 rounded-2xl text-center">
              <h3 className="text-xl font-bold text-[#7A6B5D] mb-2">Hälsningskort</h3>
              <p className="text-3xl font-bold text-[#8B956D]">39 kr</p>
            </div>
          </div>
          <p className="text-[#6B5B4F] text-lg text-center italic">
            Jag hjälper gärna till att formulera texterna om ni önskar.
          </p>
        </div>
      </section>

      {/* Tidsramar */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-br from-[#F5F1E8] via-[#F0E8D8] to-[#EBE0CE]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl sm:text-6xl handwritten text-[#7A6B5D] mb-8 text-center">🕊️ Tidsramar</h2>
          <p className="text-[#6B5B4F] text-lg sm:text-xl leading-relaxed mb-6 text-center">
            För att kunna skapa med omsorg behöver jag:
          </p>
          <div className="space-y-6 max-w-2xl mx-auto">
            <div className="romantic-card p-6 rounded-2xl bg-white">
              <h3 className="text-xl font-bold text-[#7A6B5D] mb-2">Minst 2 veckor</h3>
              <p className="text-[#6B5B4F] text-lg leading-relaxed">
                För större dekorationer (kransar, hjärtan, kistdekorationer, urnarrangemang)
              </p>
            </div>
            <div className="romantic-card p-6 rounded-2xl bg-white">
              <h3 className="text-xl font-bold text-[#7A6B5D] mb-2">1 vecka</h3>
              <p className="text-[#6B5B4F] text-lg leading-relaxed">
                För begravningsbuketter och mindre arrangemang
              </p>
            </div>
          </div>
          <p className="text-[#6B5B4F] text-lg sm:text-xl text-center mt-8 font-medium">
            Behöver ni snabbare hjälp? Hör av er – jag försöker alltid hitta en lösning.
          </p>
        </div>
      </section>

      {/* Helhetslösning */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl sm:text-6xl handwritten text-[#7A6B5D] mb-8 text-center">🌿 En helhetslösning – om ni önskar</h2>
          <p className="text-[#6B5B4F] text-lg sm:text-xl leading-relaxed mb-8 text-center">
            Jag kan även hjälpa till att skapa en hel blomsterhelhet för ceremonin, med:
          </p>
          <div className="space-y-4 text-[#6B5B4F] text-lg leading-relaxed max-w-2xl mx-auto">
            <div className="flex items-start gap-3">
              <span className="text-[#8B956D] text-xl">•</span>
              <p>Dekorationer i kyrkan eller kapellet</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#8B956D] text-xl">•</span>
              <p>Buketter för minnesstunden</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#8B956D] text-xl">•</span>
              <p>Blommor för urna, kista, altare och bårbord</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#8B956D] text-xl">•</span>
              <p>Färgtema efter personens stil eller favoritblommor</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#8B956D] text-xl">•</span>
              <p>Koordinering inför ceremonin</p>
            </div>
          </div>
          <p className="text-[#6B5B4F] text-lg sm:text-xl leading-relaxed text-center mt-8 italic">
            Allt skräddarsys efter era önskemål för att skapa ett varmt, vackert och minnesvärt avsked.
          </p>
        </div>
      </section>

      {/* Gratis konsultation */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-br from-[#F5F1E8] via-[#F0E8D8] to-[#EBE0CE]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl sm:text-6xl handwritten text-[#7A6B5D] mb-8 text-center">💬 Gratis konsultation</h2>
          <p className="text-[#6B5B4F] text-lg sm:text-xl leading-relaxed mb-8 text-center">
            Det kan vara svårt att veta vad man ska välja.
            Jag erbjuder därför kostnadsfri konsultation, där vi tillsammans går igenom:
          </p>
          <div className="space-y-4 text-[#6B5B4F] text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            <div className="flex items-start gap-3">
              <span className="text-[#8B956D] text-xl">•</span>
              <p>Personens stil & minnen</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#8B956D] text-xl">•</span>
              <p>Vilka blommor som passar</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#8B956D] text-xl">•</span>
              <p>Färgtema</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#8B956D] text-xl">•</span>
              <p>Budget</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#8B956D] text-xl">•</span>
              <p>Tidplan</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#8B956D] text-xl">•</span>
              <p>Om det behövs helhetslösning eller enstaka arrangemang</p>
            </div>
          </div>
          <p className="text-[#6B5B4F] text-lg sm:text-xl text-center font-medium">
            Vi kan ses digitalt, via telefon eller på plats i Brottby.
          </p>
        </div>
      </section>

      {/* Kontaktformulär */}
      <section id="kontakt" className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl handwritten text-[#7A6B5D] mb-4">
              🌸 Skicka en förfrågan
            </h2>
            <p className="text-[#6B5B4F] text-xl mb-2">
              När du är redo att beställa – eller vill diskutera idéer – fyll i formuläret nedan.
            </p>
            <p className="text-[#6B5B4F] text-lg">
              Jag svarar vanligtvis inom 24 timmar.
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="namn" className="block text-[#6B5B4F] font-medium mb-2">Namn *</label>
                <input 
                  type="text" 
                  id="namn" 
                  required
                  className="w-full px-4 py-3 rounded-lg border border-[#D4B5A8] focus:outline-none focus:border-[#8B956D]"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[#6B5B4F] font-medium mb-2">E-post *</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  className="w-full px-4 py-3 rounded-lg border border-[#D4B5A8] focus:outline-none focus:border-[#8B956D]"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="telefon" className="block text-[#6B5B4F] font-medium mb-2">Telefon *</label>
                <input 
                  type="tel" 
                  id="telefon" 
                  required
                  className="w-full px-4 py-3 rounded-lg border border-[#D4B5A8] focus:outline-none focus:border-[#8B956D]"
                />
              </div>
              <div>
                <label htmlFor="typ" className="block text-[#6B5B4F] font-medium mb-2">Typ av arrangemang</label>
                <select 
                  id="typ" 
                  className="w-full px-4 py-3 rounded-lg border border-[#D4B5A8] focus:outline-none focus:border-[#8B956D]"
                >
                  <option value="">Välj typ</option>
                  <option value="liggande">Liggande bukett</option>
                  <option value="staende">Stående bukett</option>
                  <option value="krans">Begravningskrans</option>
                  <option value="hjarta">Hjärta</option>
                  <option value="urna">Urndekoration</option>
                  <option value="kista">Kistdekoration</option>
                  <option value="helhet">Helhetslösning</option>
                  <option value="annat">Annat / Osäker</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="datum" className="block text-[#6B5B4F] font-medium mb-2">Datum för ceremonin</label>
                <input 
                  type="date" 
                  id="datum" 
                  className="w-full px-4 py-3 rounded-lg border border-[#D4B5A8] focus:outline-none focus:border-[#8B956D]"
                />
              </div>
              <div>
                <label htmlFor="fargtema" className="block text-[#6B5B4F] font-medium mb-2">Färgtema / Önskemål</label>
                <input 
                  type="text" 
                  id="fargtema" 
                  placeholder="T.ex. vit, rosa, favoritblommor..."
                  className="w-full px-4 py-3 rounded-lg border border-[#D4B5A8] focus:outline-none focus:border-[#8B956D]"
                />
              </div>
            </div>

            <div>
              <label htmlFor="meddelande" className="block text-[#6B5B4F] font-medium mb-2">Meddelande</label>
              <textarea 
                id="meddelande" 
                rows={5}
                placeholder="Berätta gärna om personen, era önskemål eller om ni vill ha en konsultation..."
                className="w-full px-4 py-3 rounded-lg border border-[#D4B5A8] focus:outline-none focus:border-[#8B956D]"
              ></textarea>
            </div>

            <div className="text-center">
              <button 
                type="submit"
                className="inline-block px-12 py-4 bg-[#8B956D] text-white rounded-full hover:bg-[#7A8B6F] transition-all shadow-lg hover:shadow-xl text-lg font-medium"
              >
                Skicka förfrågan
              </button>
              <p className="text-[#6B5B4F] text-sm mt-4">
                Alla förfrågningar och konsultationer är helt kostnadsfria
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* SEO Text (hidden) */}
      <section className="sr-only">
        <h2>Begravningsblommor i Brottby, Vallentuna, Åkersberga, Täby och Stockholm</h2>
        <p>
          Handgjorda kransar, hjärtan, buketter och kistdekorationer skapade med omtanke, värme och personlig design.
        </p>
      </section>
    </div>
  );
}
