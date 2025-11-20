'use client';
import Image from 'next/image'
import { useState } from 'react'

export default function BegravningPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    const formData = new FormData(e.currentTarget);
    
    const data = {
      name: formData.get('namn') as string,
      email: formData.get('email') as string,
      phone: formData.get('telefon') as string,
      funeralDate: formData.get('datum') as string,
      funeralType: formData.get('typ') as string,
      colors: formData.get('fargtema') as string,
      consultation: formData.get('konsultation') as string,
      message: formData.get('meddelande') as string,
      inquiryType: 'begravning'
    };

    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitMessage('Tack för din förfrågan! Vi återkommer inom 24 timmar.');
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitMessage(result.error || 'Något gick fel. Försök igen.');
      }
    } catch (error) {
      setSubmitMessage('Kunde inte skicka förfrågan. Kontrollera din internetanslutning.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center text-center px-4">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/flower/kistdeko.JPG')",
            opacity: 0.3
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F5F1E8]/80 via-[#F5F1E8]/70 to-[#E8F0E0]/60"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-serif mb-4 text-[#7A8B6F]">
            Begravningsblommor med omtanke
          </h1>
          <p className="text-lg sm:text-xl text-[#6B5B4F] mb-10 sm:mb-14 leading-relaxed max-w-2xl mx-auto">
            Personliga blomsterarrangemang som skapas med respekt, omsorg och stor hänsyn till vem personen var.
          </p>
          <a 
            href="#kontakt" 
            className="inline-block bg-[#8B956D] text-white px-10 py-4 rounded-full hover:bg-[#7A8B6F] transition-colors shadow-lg text-lg font-medium"
          >
            Planera arrangemang
          </a>
        </div>
      </section>

      {/* Introduktionstext */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#6B5B4F] text-lg sm:text-xl leading-relaxed mb-6">
            Att få skapa blommor till en begravning är ett stort förtroende. I min studio i Brottby skapar jag varje arrangemang för hand – med omtanke, tid, lyhördhet och säsongens vackraste blommor.
          </p>
          <p className="text-[#6B5B4F] text-lg sm:text-xl leading-relaxed mb-6">
            Mitt mål är att varje blomsterarrangemang ska spegla personen, minnena och stämningen ni vill förmedla vid avskedet.
          </p>
          <p className="text-[#6B5B4F] text-base italic">
            Jag skapar begravningsblommor i Brottby, Vallentuna, Åkersberga, Täby och Stockholm.
          </p>
        </div>
      </section>

      {/* Vad jag kan skapa */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-br from-[#F5F1E8] via-[#F0E8D8] to-[#EBE0CE]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl handwritten text-[#7A6B5D] mb-6">
              Arrangemang jag kan skapa till ceremonin
            </h2>
            <p className="text-[#6B5B4F] text-lg sm:text-xl max-w-3xl mx-auto">
              Jag skapar alla typer av begravningsarrangemang och anpassar dem efter personens stil, era önskemål och de känslor ni vill förmedla. Allt går att skräddarsy – färger, form, uttryck och storlek.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Liggande buketter */}
            <div className="romantic-card p-8 rounded-2xl bg-white">
              <h3 className="text-2xl font-bold text-[#8B956D] mb-3">Liggande buketter</h3>
              <p className="text-[#6B5B4F] text-lg leading-relaxed">
                Mjuk, vacker och harmonisk – placeras framför kistan.
              </p>
            </div>

            {/* Stående buketter */}
            <div className="romantic-card p-8 rounded-2xl bg-white">
              <h3 className="text-2xl font-bold text-[#8B956D] mb-3">Stående buketter</h3>
              <p className="text-[#6B5B4F] text-lg leading-relaxed">
                Ger höjd och uttryck – en fin sista hälsning från familj eller vänner.
              </p>
            </div>

            {/* Begravningskransar */}
            <div className="romantic-card p-8 rounded-2xl bg-white">
              <h3 className="text-2xl font-bold text-[#8B956D] mb-3">Begravningskransar</h3>
              <p className="text-[#6B5B4F] text-lg leading-relaxed">
                Traditionella eller personliga kransar som symboliserar evighet och minnen.
              </p>
            </div>

            {/* Hjärtan */}
            <div className="romantic-card p-8 rounded-2xl bg-white">
              <h3 className="text-2xl font-bold text-[#8B956D] mb-3">Hjärtan</h3>
              <p className="text-[#6B5B4F] text-lg leading-relaxed">
                Ett varmt och kärleksfullt arrangemang – ett personligt val för nära anhöriga.
              </p>
            </div>

            {/* Urndekorationer */}
            <div className="romantic-card p-8 rounded-2xl bg-white">
              <h3 className="text-2xl font-bold text-[#8B956D] mb-3">Urndekorationer</h3>
              <p className="text-[#6B5B4F] text-lg leading-relaxed">
                Mjuka, omslutande arrangemang som omfamnar och hedrar urnan.
              </p>
            </div>

            {/* Kistdekorationer */}
            <div className="romantic-card p-8 rounded-2xl bg-white">
              <h3 className="text-2xl font-bold text-[#8B956D] mb-3">Kistdekorationer</h3>
              <p className="text-[#6B5B4F] text-lg leading-relaxed">
                Stora personliga arrangemang som berättar något om personen och livet som levts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Band & kort */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl handwritten text-[#7A6B5D] mb-8 text-center">Band & hälsningskort</h2>
          <p className="text-[#6B5B4F] text-lg sm:text-xl leading-relaxed text-center mb-8">
            Till varje arrangemang kan ni lägga till en hälsning som gör avskedet extra personligt.<br />
            Jag hjälper gärna till att formulera texten om ni önskar.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="romantic-card p-6 rounded-2xl text-center">
              <h3 className="text-xl font-bold text-[#7A6B5D] mb-2">Begravningsband</h3>
              <p className="text-3xl font-bold text-[#8B956D]">299 kr</p>
            </div>
            <div className="romantic-card p-6 rounded-2xl text-center">
              <h3 className="text-xl font-bold text-[#7A6B5D] mb-2">Hälsningskort</h3>
              <p className="text-3xl font-bold text-[#8B956D]">39 kr</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bildgalleri */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-br from-[#F5F1E8] via-[#F0E8D8] to-[#EBE0CE]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl sm:text-6xl handwritten text-[#7A6B5D] mb-12 text-center">Exempel på mina arrangemang</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
              <Image 
                src="/flower/hjärta2.JPG"
                alt="Begravningshjärta"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
              <Image 
                src="/flower/kistdeko.JPG"
                alt="Kistdekoration"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
              <Image 
                src="/flower/kransblå.jpg"
                alt="Begravningskrans"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
              <Image 
                src="/flower/hjärta.jpg"
                alt="Blomsterhjärta"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
              <Image 
                src="/flower/ståendebukett.jpeg"
                alt="Stående begravningsbukett"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
              <Image 
                src="/flower/hjärta3.jpeg"
                alt="Blomsterhjärta arrangemang"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tidsramar */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-br from-[#F5F1E8] via-[#F0E8D8] to-[#EBE0CE]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl sm:text-6xl handwritten text-[#7A6B5D] mb-8 text-center">Tidsramar för beställning</h2>
          <p className="text-[#6B5B4F] text-lg sm:text-xl leading-relaxed mb-6 text-center">
            För att kunna skapa med omsorg och säkerställa att rätt blommor beställs behöver jag:
          </p>
          <div className="space-y-6 max-w-2xl mx-auto">
            <div className="romantic-card p-6 rounded-2xl bg-white">
              <h3 className="text-xl font-bold text-[#7A6B5D] mb-2">Minst 2 veckor</h3>
              <p className="text-[#6B5B4F] text-lg leading-relaxed">
                För större arrangemang (Arrangemang, kransar, hjärtan, kistdekorationer och urndekorationer)
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
            Behöver ni snabbare hjälp? Hör av er – jag gör alltid mitt bästa för att hitta en lösning.
          </p>
        </div>
      </section>

      {/* Helhetslösning */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-br from-[#F5F1E8] via-[#F0E8D8] to-[#EBE0CE]">
        <div className="max-w-5xl mx-auto">
          <div className="romantic-card p-10 sm:p-12 rounded-3xl">
            <h2 className="text-4xl sm:text-5xl handwritten text-[#7A6B5D] mb-6 text-center">En helhetslösning – om ni önskar</h2>
            <p className="text-[#6B5B4F] text-xl leading-relaxed mb-10 text-center max-w-2xl mx-auto">
              Jag kan även hjälpa till att skapa en komplett blomsterhelhet för hela begravningsceremonin:
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
              <div className="bg-white/50 p-6 rounded-xl border-2 border-[#8B956D]/20">
                <div className="flex items-start gap-3">
                  <span className="text-[#8B956D] text-2xl font-bold">✓</span>
                  <p className="text-[#6B5B4F] text-lg">Dekorationer i kyrkan eller kapellet</p>
                </div>
              </div>
              
              <div className="bg-white/50 p-6 rounded-xl border-2 border-[#8B956D]/20">
                <div className="flex items-start gap-3">
                  <span className="text-[#8B956D] text-2xl font-bold">✓</span>
                  <p className="text-[#6B5B4F] text-lg">Buketter och arrangemang till minnesstunden</p>
                </div>
              </div>
              
              <div className="bg-white/50 p-6 rounded-xl border-2 border-[#8B956D]/20">
                <div className="flex items-start gap-3">
                  <span className="text-[#8B956D] text-2xl font-bold">✓</span>
                  <p className="text-[#6B5B4F] text-lg">Blommor för urna, kista, altare och bord</p>
                </div>
              </div>
              
              <div className="bg-white/50 p-6 rounded-xl border-2 border-[#8B956D]/20">
                <div className="flex items-start gap-3">
                  <span className="text-[#8B956D] text-2xl font-bold">✓</span>
                  <p className="text-[#6B5B4F] text-lg">Färgtema efter personens stil eller favoritblommor</p>
                </div>
              </div>
              
              <div className="bg-white/50 p-6 rounded-xl border-2 border-[#8B956D]/20 sm:col-span-2 lg:col-span-1">
                <div className="flex items-start gap-3">
                  <span className="text-[#8B956D] text-2xl font-bold">✓</span>
                  <p className="text-[#6B5B4F] text-lg">Koordinering inför ceremonin</p>
                </div>
              </div>
            </div>
            
            <div className="text-center bg-[#8B956D]/10 p-6 rounded-xl">
              <p className="text-[#6B5B4F] text-lg sm:text-xl italic">
                Allt skräddarsys efter era önskemål för att skapa ett varmt, vackert och minnesvärt avsked.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gratis konsultation */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="romantic-card p-10 sm:p-12 rounded-3xl">
            <h2 className="text-4xl sm:text-5xl handwritten text-[#7A6B5D] mb-6 text-center">Gratis konsultation</h2>
            <p className="text-[#6B5B4F] text-xl leading-relaxed mb-10 text-center max-w-2xl mx-auto">
              Det kan kännas svårt att veta vad man ska välja.<br />
              Därför erbjuder jag kostnadsfri konsultation där vi tillsammans går igenom:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-10">
              <div className="bg-white/50 p-6 rounded-xl border-2 border-[#8B956D]/20">
                <div className="flex items-start gap-3">
                  <span className="text-[#8B956D] text-2xl font-bold">✓</span>
                  <p className="text-[#6B5B4F] text-lg">Personens stil, minnen och önskningar</p>
                </div>
              </div>
              
              <div className="bg-white/50 p-6 rounded-xl border-2 border-[#8B956D]/20">
                <div className="flex items-start gap-3">
                  <span className="text-[#8B956D] text-2xl font-bold">✓</span>
                  <p className="text-[#6B5B4F] text-lg">Vilka blommor och färger som passar</p>
                </div>
              </div>
              
              <div className="bg-white/50 p-6 rounded-xl border-2 border-[#8B956D]/20">
                <div className="flex items-start gap-3">
                  <span className="text-[#8B956D] text-2xl font-bold">✓</span>
                  <p className="text-[#6B5B4F] text-lg">Budget och tidsplan</p>
                </div>
              </div>
              
              <div className="bg-white/50 p-6 rounded-xl border-2 border-[#8B956D]/20">
                <div className="flex items-start gap-3">
                  <span className="text-[#8B956D] text-2xl font-bold">✓</span>
                  <p className="text-[#6B5B4F] text-lg">Om ni behöver en helhetslösning eller enstaka arrangemang</p>
                </div>
              </div>
            </div>
            
            <div className="text-center bg-[#8B956D]/10 p-6 rounded-xl">
              <p className="text-[#6B5B4F] text-lg sm:text-xl font-medium">
                Vi kan ses digitalt, via telefon eller på plats i Brottby – det som känns bäst för er.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Kontaktformulär */}
      <section id="kontakt" className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-br from-[#F5F1E8] via-[#F0E8D8] to-[#EBE0CE]">
        <div className="max-w-4xl mx-auto">
          <div className="romantic-card p-10 sm:p-12 rounded-3xl">
            <div className="text-center mb-10">
              <h2 className="text-4xl sm:text-5xl handwritten text-[#7A6B5D] mb-4">
                Skicka en förfrågan
              </h2>
              <p className="text-[#6B5B4F] text-xl mb-2">
                När ni är redo att beställa – eller vill diskutera idéer – fyll i formuläret nedan.
              </p>
              <p className="text-[#6B5B4F] text-lg font-medium">
                Jag svarar vanligen inom 24 timmar och finns här för att guida er genom varje steg.
              </p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="namn" className="block text-[#6B5B4F] font-medium mb-2">Namn *</label>
                  <input 
                    type="text" 
                    id="namn" 
                    name="namn"
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-lg border-2 border-[#8B956D]/20 bg-white focus:outline-none focus:border-[#8B956D] transition-colors disabled:opacity-50"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[#6B5B4F] font-medium mb-2">E-post *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-lg border-2 border-[#8B956D]/20 bg-white focus:outline-none focus:border-[#8B956D] transition-colors disabled:opacity-50"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="telefon" className="block text-[#6B5B4F] font-medium mb-2">Telefon *</label>
                  <input 
                    type="tel" 
                    id="telefon" 
                    name="telefon"
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-lg border-2 border-[#8B956D]/20 bg-white focus:outline-none focus:border-[#8B956D] transition-colors disabled:opacity-50"
                  />
                </div>
                <div>
                  <label htmlFor="typ" className="block text-[#6B5B4F] font-medium mb-2">Typ av arrangemang</label>
                  <select 
                    id="typ" 
                    name="typ"
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-lg border-2 border-[#8B956D]/20 bg-white focus:outline-none focus:border-[#8B956D] transition-colors disabled:opacity-50"
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
                    name="datum"
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-lg border-2 border-[#8B956D]/20 bg-white focus:outline-none focus:border-[#8B956D] transition-colors disabled:opacity-50"
                  />
                </div>
                <div>
                  <label htmlFor="fargtema" className="block text-[#6B5B4F] font-medium mb-2">Färgtema / Önskemål</label>
                  <input 
                    type="text" 
                    id="fargtema" 
                    name="fargtema"
                    placeholder="T.ex. vit, rosa, favoritblommor..."
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-lg border-2 border-[#8B956D]/20 bg-white focus:outline-none focus:border-[#8B956D] transition-colors disabled:opacity-50"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="konsultation" className="block text-[#6B5B4F] font-medium mb-2">Vill ni boka en konsultation?</label>
                <select 
                  id="konsultation" 
                  name="konsultation"
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg border-2 border-[#8B956D]/20 bg-white focus:outline-none focus:border-[#8B956D] transition-colors disabled:opacity-50"
                >
                  <option value="">Välj alternativ</option>
                  <option value="ja-digitalt">Ja, gärna digitalt</option>
                  <option value="ja-telefon">Ja, gärna via telefon</option>
                  <option value="ja-plats">Ja, gärna på plats i Brottby</option>
                  <option value="nej">Nej tack, jag vet vad jag vill ha</option>
                  <option value="kanske">Osäker, återkommer</option>
                </select>
              </div>

              <div>
                <label htmlFor="meddelande" className="block text-[#6B5B4F] font-medium mb-2">Meddelande</label>
                <textarea 
                  id="meddelande" 
                  name="meddelande"
                  rows={5}
                  placeholder="Berätta gärna om personen och era önskemål..."
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg border-2 border-[#8B956D]/20 bg-white focus:outline-none focus:border-[#8B956D] transition-colors resize-none disabled:opacity-50"
                ></textarea>
              </div>

              {submitMessage && (
                <div className={`text-center p-4 rounded-lg ${submitMessage.includes('Tack') ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                  {submitMessage}
                </div>
              )}

              <div className="text-center pt-4">
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-block px-12 py-4 bg-[#8B956D] text-white rounded-full hover:bg-[#7A8B6F] transition-all shadow-lg hover:shadow-xl text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? '⏳ Skickar...' : 'Skicka förfrågan'}
                </button>
                <p className="text-[#6B5B4F] text-sm mt-4 italic">
                  Alla förfrågningar och konsultationer är helt kostnadsfria
                </p>
              </div>
            </form>
          </div>
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
