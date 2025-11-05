import Image from 'next/image'
import Link from 'next/link'

export default function BrollopPage() {
  const brollopBilder = [
    { src: "/flower/bröllop1.JPG", alt: "Romantisk brudbukett" },
    { src: "/flower/bröllop2.JPG", alt: "Bröllopsdekorationer" },
    { src: "/flower/brölloppuder.JPG", alt: "Bröllop puder arrangemang" },
    { src: "/flower/brollop-gallery.jpeg", alt: "Bröllopsgalleri" },
    { src: "/flower/bröllopros.JPG", alt: "Bröllopsarrangemang med rosor" },
    { src: "/flower/brölloplantligt.jpg", alt: "Lantligt bröllopsarrangemang" },
    { src: "/flower/bröllopcornelia1.JPG", alt: "Bröllopsblommor Cornelia" },
    { src: "/flower/bröllopmarianna2.JPG", alt: "Bröllopsblommor Marianna" },
    { src: "/flower/bröllopmarianne1.JPG", alt: "Bröllopsblommor Marianne" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center text-center px-4">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/flower/bröllopcornelia1.JPG')",
            opacity: 0.25
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-serif mb-6 text-[#7A8B6F]">
            Ditt Drömbröllop
          </h1>
          <p className="text-base sm:text-xl text-black mb-8 sm:mb-12 leading-relaxed max-w-2xl mx-auto font-normal" style={{ textShadow: '2px 2px 5px rgba(255,255,255,0.95)' }}>
            Oavsett om ni drömmer om ett helt skräddarsytt blomsterkoncept för er stora dag eller enbart önskar en vacker brudbukett – jag lyssnar på era visioner och skapar arrangemang som speglar er kärlek. Varje blomma väljs noggrant ut för att fånga er personlighet och den romantiska känsla ni vill att ni och era gäster ska minnas för alltid. Allt med enorm omtanke, varm hand och design.
          </p>
          <a 
            href="#kontakt" 
            className="inline-block bg-[#8B956D] text-white px-8 py-3 rounded hover:bg-[#7A8B6F] transition-colors shadow-lg"
          >
            Boka ett kostnadsfritt möte
          </a>
        </div>
      </section>

      {/* Vad jag erbjuder */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl text-[#4A4A48] mb-4">
              <span className="handwritten text-[#8B956D]">Skräddarsytt</span> för er speciella dag
            </h2>
            <p className="text-[#4A4A48]/70 text-lg max-w-2xl mx-auto">
              Varje bröllop är unikt, och blommorna ska spegla just er kärlekshistoria
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="romantic-card p-8 rounded-2xl bg-gradient-to-br from-[#F5F1E8] to-[#A8B69B]/5">
              <h3 className="text-2xl handwritten text-[#4A4A48] mb-6 text-center">Helhetskonceptet</h3>
              <p className="text-[#4A4A48]/70 leading-relaxed mb-4">
                Jag tar hand om alla blommor för hela er bröllopsdag – från ceremoni till fest. Tillsammans skapar vi en röd tråd i färger, stil och känsla som löper genom varje detalj.
              </p>
              <ul className="space-y-2 text-[#4A4A48]/70">
                <li className="flex items-start">
                  <span className="text-[#8B956D] mr-2">✓</span>
                  <span>Brudbukett, tärnbuketter och Corsage</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8B956D] mr-2">✓</span>
                  <span>Ceremoniblommor och altardekorationer</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8B956D] mr-2">✓</span>
                  <span>Bordsdekorationer för middagen</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8B956D] mr-2">✓</span>
                  <span>Entrédekoration och lounge-områden</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8B956D] mr-2">✓</span>
                  <span>Tårtdekoration med färska blommor</span>
                </li>
              </ul>
            </div>

            <div className="romantic-card p-8 rounded-2xl bg-gradient-to-br from-[#D4B5A8]/15 to-[#F5F1E8]">
              <h3 className="text-2xl handwritten text-[#4A4A48] mb-6 text-center">Brudblommor</h3>
              <p className="text-[#4A4A48]/70 leading-relaxed mb-4">
                Om ni enbart önskar beställa brudens och brudtärnornas blommor, designar jag personliga buketter som kompletterar er stil med stor omtanke.
              </p>
              <ul className="space-y-2 text-[#4A4A48]/70">
                <li className="flex items-start">
                  <span className="text-[#8B956D] mr-2">✓</span>
                  <span>Skräddarsydd brudbukett efter er vision</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8B956D] mr-2">✓</span>
                  <span>Matchande buketter för brudtärnor</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8B956D] mr-2">✓</span>
                  <span>Knapphålsblommor för brudgum och marskalkar</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <a 
              href="#kontakt" 
              className="inline-block bg-[#8B956D] text-white px-8 py-3 rounded hover:bg-[#7A8B6F] transition-colors shadow-lg"
            >
              Boka ett kostnadsfritt möte
            </a>
          </div>
        </div>
      </section>

      {/* Inspiration från tidigare bröllop */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-[#F5F1E8] to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl text-[#4A4A48] mb-4">
              <span className="handwritten text-[#8B956D]">Inspiration</span> från tidigare bröllop
            </h2>
          </div>

          {/* Bröllopsbilder grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg group">
              <Image 
                src="/flower/bröllopcorneiliatvå.JPG"
                alt="Cornelia bröllopsarrangemang"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg group">
              <Image 
                src="/flower/bröllopcorneliagrupp.JPG"
                alt="Cornelia bröllopsgrupp"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg group">
              <Image 
                src="/flower/brölloppcorn.JPG"
                alt="Bröllop Cornelia arrangemang"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg group">
              <Image 
                src="/flower/brudrosa.JPG"
                alt="Rosa brudbukett"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg group">
              <Image 
                src="/flower/pionvit.JPG"
                alt="Vita pioner"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg group">
              <Image 
                src="/flower/brudvitlime.jpeg"
                alt="Vit brudbukett med lime"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Min process */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-white to-[#F5F1E8]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl text-[#4A4A48] mb-4">
              <span className="handwritten text-[#D4B5A8]">Hur vi skapar</span> ert drömbröllop
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                nummer: "1",
                titel: "Första mötet",
                text: "Vi träffas för kaffe (digitalt eller fysiskt) där ni berättar om er vision, färgtema och stil. Jag lyssnar, ställer frågor och börjar forma en idé."
              },
              {
                nummer: "2",
                titel: "Konceptskiss",
                text: "Jag skapar ett personligt koncept med moodboard, färgpaletter och förslag på blommor. Vi justerar tillsammans tills allt känns perfekt."
              },
              {
                nummer: "3",
                titel: "Detaljer & planering",
                text: "Vi går igenom praktiska detaljer – leveranstider, placering, antal buketter. Jag säkerställer att allt är genomtänkt till minsta detalj."
              },
              {
                nummer: "4",
                titel: "Er stora dag",
                text: "Jag levererar och arrangerar alla blommor på plats så ni kan slappna av. Allt är förberett, vackert och klart när ni anländer."
              }
            ].map((steg, i) => (
              <div key={i} className="text-center">
                <div className="w-20 h-20 bg-[#D4B5A8] text-white rounded-full flex items-center justify-center text-3xl font-light mx-auto mb-4 shadow-lg">
                  {steg.nummer}
                </div>
                <h3 className="text-xl handwritten text-[#8B956D] mb-3 font-semibold">{steg.titel}</h3>
                <p className="text-[#4A4A48] text-sm leading-relaxed">{steg.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bildgalleri */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl text-[#4A4A48] mb-4">
              <span className="handwritten text-[#D4B5A8]">Inspiration</span> från tidigare bröllop
            </h2>
            <p className="text-[#4A4A48]/70 text-lg">
              Varje bröllop har sin egen unika stil och känsla
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {brollopBilder.map((bild, i) => (
              <div key={i} className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl group">
                <Image 
                  src={bild.src}
                  alt={bild.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kundrecensioner */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-white to-[#F5F1E8]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl text-[#4A4A48] mb-4">
              <span className="handwritten text-[#8B956D]">Vad säger</span> våra brudpar?
            </h2>
            <p className="text-[#4A4A48]/70 text-lg max-w-2xl mx-auto">
              Läs vad tidigare brudpar säger om sina blommor och upplevelsen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="romantic-card p-8 rounded-2xl bg-gradient-to-br from-[#F5F1E8] to-[#D4B5A8]/10">
              <div className="flex items-center mb-4">
                <div className="flex text-[#D4B5A8] text-xl">
                  ⭐⭐⭐⭐⭐
                </div>
              </div>
              <p className="text-[#4A4A48]/80 leading-relaxed mb-6 italic">
                "Susanna, Stooort tack för all din hjälp! Buketterna höll hela dagen och allt var perfekt ❤️ Tack för otroligt bra service (!!!) och för att du hjälpte till att få våra stora dag perfekt 🌸 Blommorna var magiska"
              </p>
              <div className="text-sm">
                <p className="font-semibold text-[#8B956D]">— Cornelia & Gustaf</p>
                <p className="text-[#4A4A48]/60">Bröllop augusti 2025</p>
              </div>
            </div>

            <div className="romantic-card p-8 rounded-2xl bg-gradient-to-br from-[#F5F1E8] to-[#A8B69B]/5">
              <div className="flex items-center mb-4">
                <div className="flex text-[#D4B5A8] text-xl">
                  ⭐⭐⭐⭐⭐
                </div>
              </div>
                <p className="text-[#4A4A48]/80 leading-relaxed mb-6 italic text-sm">
                  "Tusen, tusen, tusen tack för all MAGISKA blommor igår!!!!!!!! ❤️❤️❤️ De förgyllde verkligen vår stora dag och var en riktig snackis bland gästerna - alla var helt betagna av dem. Jag ÄÄÄLSKADE min bukett, blev precis som jag hade drömt om MEN jag hade aldrig kunnat hoppas att min dröm skulle kunna bli verklighet så exakt och med extra flair!!! TACK!!!! Vilket hantverk, konstverk, med känsla all-around. TACK, TACK, TACK!! 🥰🥰🥰 Du är bäst!!"
              </p>
              <div className="text-sm">
                <p className="font-semibold text-[#8B956D]">— Marianna & Eric</p>
                <p className="text-[#4A4A48]/60">Bröllop September 2024</p>
              </div>
            </div>

            <div className="romantic-card p-8 rounded-2xl bg-gradient-to-br from-[#F5F1E8] to-[#D4B5A8]/10">
              <div className="flex items-center mb-4">
                <div className="flex text-[#D4B5A8] text-xl">
                  ⭐⭐⭐⭐⭐
                </div>
              </div>
              <p className="text-[#4A4A48]/80 leading-relaxed mb-6 italic">
                "Från första mötet till vår bröllopsdag - allt var perfekt planerat. Susanna är så professionell och kreativ. Våra blommor blev mer vackra än vi kunnat drömma om!"
              </p>
              <div className="text-sm">
                <p className="font-semibold text-[#8B956D]">— Ellinor & Marcus</p>
                <p className="text-[#4A4A48]/60">Bröllop juni 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="kontakt" className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-[#F5F1E8] to-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl sm:text-6xl text-[#4A4A48] mb-6">
            <span className="handwritten text-[#D4B5A8] block text-6xl sm:text-7xl mb-3">Redo att börja planera?</span>
            Låt oss skapa något vackert tillsammans
          </h2>
          <p className="text-[#4A4A48]/70 text-xl mb-10 leading-relaxed">
            Kontakta mig för en kostnadsfri konsultation där vi pratar om era drömmar, er stil och hur jag kan hjälpa till att förverkliga er vision
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="mailto:info@florabysusanna.se" className="inline-block px-12 py-5 bg-[#D4B5A8] text-white rounded-full hover:bg-[#C9A79E] transition-all shadow-lg hover:shadow-xl text-sm uppercase tracking-wider">
              Skicka Mail
            </a>
            <a href="tel:0737131884" className="inline-block px-12 py-5 border-2 border-[#D4B5A8] text-[#D4B5A8] rounded-full hover:bg-[#D4B5A8] hover:text-white transition-all text-sm uppercase tracking-wider">
              Ring: 073-713 18 84
            </a>
          </div>
          <p className="text-[#4A4A48]/60 text-sm mt-8">
            Boka minst 3-6 månader innan ert bröllop för bästa möjlighet att säkra era favoritblommor
          </p>
        </div>
      </section>
    </div>
  );
}
