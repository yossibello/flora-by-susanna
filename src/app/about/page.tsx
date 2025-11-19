import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-[#F5F1E8] via-[#F0E8D8] to-[#EBE0CE]">
        <div className="text-center px-4 sm:px-6 max-w-4xl mx-auto">
          <blockquote className="mb-8">
            <p className="text-xl sm:text-2xl handwritten text-[#7A6B5D] leading-relaxed mb-4">
              "Att få sprida blomsterglädje och känslor, har alltid varit min passion. 
            </p>
            <p className="text-xl sm:text-2xl handwritten text-[#8B7D6F] leading-relaxed mb-4">
              Hur från frö till stjälk, blomma till bukett - man kan skapa och förmedla från hjärtat.
            </p>
            <p className="text-xl sm:text-2xl handwritten text-[#8B7D6F] leading-relaxed">
              Det är det jag brinner för som florist."
            </p>
          </blockquote>
          
          <div className="text-center">
            <p className="text-lg font-medium text-[#6B5B4F]">- Susanna</p>
            <p className="text-sm text-[#8B7D6F]">Din personliga florist i Brottby, Stockholm</p>
          </div>
        </div>
      </section>

      {/* Personal Story Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
              <Image 
                src="/flower/FullSizeRender 3.jpg"
                alt="Susanna i sin blomsterstudio"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl handwritten text-[#7A6B5D] mb-6">Min resa till Blommor</h2>
              <div className="space-y-5 text-[#6B5B4F]">
                <p className="leading-relaxed text-base sm:text-lg">
                  Min resa började med en kärlek till naturen och växte till en passion för att skapa något 
                  vackert med mina händer. Jag tror att varje blomma har en berättelse att berätta, och 
                  mitt jobb är att hjälpa dig berätta din. Jag har  även alltid hittat lugn bland blommor och natur. 
                  Det började med små buketter jag plockade som barn, och idag skapar jag blomsterdesign för bröllop, 
                  företag och vardagsglädje i hela Stockholm.
                </p>
                <p className="leading-relaxed text-base sm:text-lg">
                  Min studio i Brottby är hjärtat av min verksamhet — här skapas varje bukett för hand, med omtanke 
                  och känsla. Jag älskar att lyssna på dina önskemål och förvandla dem till blomsterarrangemang som 
                  verkligen betyder något.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Me Unique Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#F5F1E8] via-[#F0E8D8] to-[#EBE0CE]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#7A6B5D] mb-6">Varför kunder väljer mig som florist</h2>
              <p className="text-[#6B5B4F] leading-relaxed text-base sm:text-lg mb-6">
                Jag tror på personlig service och att varje kund är unik. När du kontaktar mig får du 
                inte bara en florist – du får en kreativ partner som lyssnar på dina drömmar och 
                förvandlar dem till verklighet.
              </p>
              <div className="space-y-3">
                <p className="text-[#6B5B4F] flex items-start">
                  <span className="text-[#7A6B5D] mr-3 mt-1">•</span>
                  <span>Personlig design – inga standardbuketter</span>
                </p>
                <p className="text-[#6B5B4F] flex items-start">
                  <span className="text-[#7A6B5D] mr-3 mt-1">•</span>
                  <span>Handgjorda arrangemang skapade i min blomsterstudio</span>
                </p>
                <p className="text-[#6B5B4F] flex items-start">
                  <span className="text-[#7A6B5D] mr-3 mt-1">•</span>
                  <span>Lokalt odlat & noggrant utvalt när det är möjligt</span>
                </p>
                <p className="text-[#6B5B4F] flex items-start">
                  <span className="text-[#7A6B5D] mr-3 mt-1">•</span>
                  <span>Flexibel leverans i hela Norrort och Stockholm</span>
                </p>
                <p className="text-[#6B5B4F] flex items-start">
                  <span className="text-[#7A6B5D] mr-3 mt-1">•</span>
                  <span>Värme & omtanke i varje steg</span>
                </p>
                <p className="text-[#6B5B4F] flex items-start">
                  <span className="text-[#7A6B5D] mr-3 mt-1">•</span>
                  <span>Erfarenhet av både bröllop, event & vardagsbuketter</span>
                </p>
              </div>
              <div className="mt-8">
                <a 
                  href="/#kontakt" 
                  className="inline-block px-8 py-3 bg-[#7A6B5D] text-white rounded-full hover:bg-[#6B5B4F] transition-all shadow-lg hover:shadow-xl text-sm font-medium"
                >
                  Kontakta mig för ett blomsterförslag
                </a>
              </div>
            </div>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
              <Image 
                src="/flower/bukettjul.JPG"
                alt="Susannas blomsterarrangemang"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl handwritten text-[#7A6B5D] mb-4">
              Min Filosofi – Blomsterdesign med Omtanke & Hantverk
            </h2>
            <p className="text-[#6B5B4F] max-w-2xl mx-auto text-base sm:text-lg">
              Mina värderingar genomsyrar allt jag gör – från första intryck till slutlig leverans
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <div className="text-center bg-gradient-to-br from-[#F5F1E8] to-[#F0E8D8] p-8 rounded-2xl">
              <div className="mb-6 flex justify-center">
                <div className="relative w-20 h-20 rounded-full overflow-hidden">
                  <Image 
                    src="/flower/bukett.JPG"
                    alt="Bukett"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl handwritten text-[#7A6B5D] mb-4">Äkta Passion & Hantverk</h3>
              <p className="text-[#6B5B4F] leading-relaxed">
                Varje arrangemang skapas för hand i min blomsterstudio i Brottby – med noggrant utvalda blommor, omtanke och fingertoppskänsla.
              </p>
            </div>
            <div className="text-center bg-gradient-to-br from-[#F5F1E8] to-[#F0E8D8] p-8 rounded-2xl">
              <div className="mb-6 flex justify-center">
                <div className="relative w-20 h-20 rounded-full overflow-hidden">
                  <Image 
                    src="/flower/foretag.JPG"
                    alt="Service"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl handwritten text-[#7A6B5D] mb-4">Personlig & Varm Service</h3>
              <p className="text-[#6B5B4F] leading-relaxed">
                Du är inte bara en kund – jag lyssnar på din vision, dina färger och din stil för att skapa något som verkligen betyder något.
              </p>
            </div>
            <div className="text-center bg-gradient-to-br from-[#F5F1E8] to-[#F0E8D8] p-8 rounded-2xl">
              <div className="mb-6 flex justify-center">
                <div className="relative w-20 h-20 rounded-full overflow-hidden">
                  <Image 
                    src="/flower/evenemang.JPG"
                    alt="Naturlig stil"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl handwritten text-[#7A6B5D] mb-4">Naturlig Stil & Design</h3>
              <p className="text-[#6B5B4F] leading-relaxed">
                Jag inspireras av naturens och blommornas mjuka former och färger, och skapar arrangemang med en personlig, romantisk och tidlös känsla.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* My Process Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#F5F1E8] via-[#F0E8D8] to-[#EBE0CE]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl handwritten text-[#7A6B5D] mb-4">
              Så här Skapar jag dina Blommor – Min arbetsprocess
            </h2>
            <p className="text-[#6B5B4F] max-w-2xl mx-auto text-base sm:text-lg">
              Min process är skapad för att göra allt enkelt, tryggt och inspirerande. Här ser du hur vi tillsammans skapar buketter och arrangemang som känns – från första samtalet till leverans.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-[#7A6B5D] text-white rounded-full flex items-center justify-center text-xl font-medium flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#7A6B5D] mb-2">Första Kontakt</h3>
                  <p className="text-[#6B5B4F]">Vi börjar med ett samtal eller meddelande där du delar din vision, färger och stil. Jag lyssnar och ställer frågor för att förstå exakt vad du önskar.</p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-[#7A6B5D] text-white rounded-full flex items-center justify-center text-xl font-medium flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#7A6B5D] mb-2">Personlig Konsultation</h3>
                  <p className="text-[#6B5B4F]">Vi pratar mer detaljerat om eventet, bröllopet eller buketten: känsla, budget, blommor och helhet. Här formas grunden till ditt unika arrangemang.</p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-[#7A6B5D] text-white rounded-full flex items-center justify-center text-xl font-medium flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#7A6B5D] mb-2">Kreativ Process</h3>
                  <p className="text-[#6B5B4F]">I min blomsterstudio i Brottby skapar jag ditt arrangemang för hand – med omsorg, hantverk och noggrant utvalda blommor.</p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-[#7A6B5D] text-white rounded-full flex items-center justify-center text-xl font-medium flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#7A6B5D] mb-2">Leverans eller Upphämtning</h3>
                  <p className="text-[#6B5B4F]">Du kan hämta hos mig på gården eller få leverans i Brottby, Vallentuna, Åkersberga, Täby och Stockholm.</p>
                </div>
              </div>
            </div>
            
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
              <Image 
                src="/flower/FullSizeRender 2.jpg"
                alt="Arbete i blomsterstudion"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl handwritten text-[#7A6B5D] mb-6">
            Låt oss börja planera dina blommor
          </h2>
          <p className="text-[#6B5B4F] text-base sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Jag ser fram emot att höra om dina idéer, färger och drömmar. Oavsett om du vill beställa en bukett, planera bröllopsblommor eller skapa något vackert till ett event – jag finns här för att hjälpa dig.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <a href="tel:0737131884" className="bg-gradient-to-br from-[#F5F1E8] to-[#F0E8D8] p-8 rounded-2xl text-center hover:shadow-xl transition-all cursor-pointer">
              <div className="mb-4 flex justify-center">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image 
                    src="/flower/telefonikon.jpg"
                    alt="Ring mig"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <h3 className="font-semibold text-[#6B5B4F] mb-3 text-lg">Ring mig</h3>
              <p className="text-[#7A6B5D] text-lg font-medium mb-2">073-713 18 84</p>
              <p className="text-[#7A6B5D] text-sm">Klicka här för att ringa</p>
            </a>
            <a href="mailto:info@florabysusanna.se" className="bg-gradient-to-br from-[#F5F1E8] to-[#F0E8D8] p-8 rounded-2xl text-center hover:shadow-xl transition-all cursor-pointer">
              <div className="mb-4 flex justify-center">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image 
                    src="/flower/mailikon.jpg"
                    alt="Maila mig"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <h3 className="font-semibold text-[#6B5B4F] mb-3 text-lg">Maila mig</h3>
              <p className="text-[#7A6B5D] text-lg font-medium mb-2">info@florabysusanna.se</p>
              <p className="text-[#7A6B5D] text-sm">Klicka här för att maila</p>
            </a>
            <div className="bg-gradient-to-br from-[#F5F1E8] to-[#F0E8D8] p-8 rounded-2xl text-center">
              <div className="mb-4 flex justify-center">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image 
                    src="/flower/hittamig.jpg"
                    alt="Hitta mig"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <h3 className="font-semibold text-[#6B5B4F] mb-3 text-lg">Hitta mig</h3>
              <p className="text-[#7A6B5D] text-lg font-medium mb-2">Brottby, Stockholm</p>
              <p className="text-[#7A6B5D] text-sm">Leverans i: Brottby, Vallentuna, Täby, Åkersberga & Stockholm</p>
            </div>
          </div>
          
          <a 
            href="/#kontakt" 
            className="inline-block px-10 py-4 bg-[#7A6B5D] text-white rounded-full hover:bg-[#6B5B4F] transition-all shadow-lg hover:shadow-xl text-sm font-medium"
          >
            🌸 Skicka en förfrågan
          </a>
          <p className="text-[#6B5B4F] text-sm mt-6">
            Jag svarar vanligtvis inom 24 timmar och alla förfrågningar är helt kostnadsfria
          </p>
        </div>
      </section>
    </div>
  );
}
