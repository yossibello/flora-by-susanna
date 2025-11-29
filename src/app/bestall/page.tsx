'use client';

import Image from 'next/image'
import { useState } from 'react';

export default function BestallPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('namn'),
      email: formData.get('email'),
      phone: formData.get('telefon'),
      preferredDate: formData.get('datum'),
      budget: formData.get('budget'),
      colors: formData.get('farger'),
      style: formData.get('stil'),
      deliveryMethod: formData.get('leverans'),
      deliveryAddress: formData.get('adress'),
      message: formData.get('meddelande'),
      inquiryType: 'bukett',
    };

    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitMessage('Tack för din beställning! Vi återkommer inom 24 timmar.');
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitMessage('Ett fel uppstod. Vänligen försök igen eller kontakta oss direkt på info@florabysusanna.se');
      }
    } catch (error) {
      setSubmitMessage('Ett fel uppstod. Vänligen försök igen eller kontakta oss direkt på info@florabysusanna.se');
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
            backgroundImage: "url('/flower/brölloppuder.JPG')",
            opacity: 0.4
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F5F1E8]/70 via-[#F5F1E8]/60 to-[#E8F0E0]/50"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-serif mb-6 text-[#7A8B6F]">
            Beställ din personliga bukett
          </h1>
          <p className="text-lg sm:text-xl text-[#6B5B4F] mb-6 leading-relaxed max-w-2xl mx-auto font-normal">
            Handgjorda buketter skapade efter säsong, dina önskemål och dina färger. Perfekt för födelsedagar, gåvor, helger eller när du vill överraska någon du tycker om.
          </p>
          <p className="text-base sm:text-lg text-[#6B5B4F] mb-10 sm:mb-14 leading-relaxed max-w-2xl mx-auto font-semibold">
            Beställning med leverans i Vallentuna, Täby, Norrort & Stockholm.
          </p>
          <a 
            href="#kontakt" 
            className="inline-block bg-[#8B956D] text-white px-8 py-3 rounded hover:bg-[#7A8B6F] transition-colors shadow-lg"
          >
            Beställ din bukett
          </a>
        </div>
      </section>

      {/* Storlekar & Priser */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-br from-[#F5F1E8] via-[#F0E8D8] to-[#EBE0CE]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl text-[#4A4A48] mb-4">
              <span className="handwritten text-[#8B956D]">Storlekar</span> & Priser
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Liten bukett */}
            <div className="romantic-card p-8 rounded-2xl bg-gradient-to-br from-[#F5F1E8] to-[#A8B69B]/10">
              <div className="relative aspect-square rounded-xl overflow-hidden mb-6">
                <Image 
                  src="/flower/bukettliten.jpg"
                  alt="Liten bukett"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl handwritten text-[#7A6B5D] mb-3 text-center">Liten bukett – 399 kr</h3>
              <p className="text-[#6B5B4F] leading-relaxed text-center mb-4">
                Perfekt som en liten gåva eller för att lysa upp hemmet.
              </p>
              <p className="text-[#6B5B4F] text-sm text-center italic">
                Bilderna visar exempel – varje bukett skapas unikt efter säsong.
              </p>
            </div>

            {/* Mellan bukett */}
            <div className="romantic-card p-8 rounded-2xl bg-gradient-to-br from-[#F5F1E8] to-[#A8B69B]/5 border-2 border-[#8B956D]">
              <div className="text-center mb-4">
                <span className="inline-block bg-[#8B956D] text-white px-4 py-1 rounded-full text-sm">Mest populär</span>
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden mb-6">
                <Image 
                  src="/flower/bukettmellanhortensia.JPG"
                  alt="Mellan bukett"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl handwritten text-[#7A6B5D] mb-3 text-center">Mellan bukett – 599 kr</h3>
              <p className="text-[#6B5B4F] leading-relaxed text-center mb-4">
                En av mina mest populära buketter – lagom stor och full av säsongens blommor.
              </p>
              <p className="text-[#6B5B4F] text-sm text-center italic">
                Bilderna visar exempel – varje bukett skapas unikt efter säsong.
              </p>
            </div>

            {/* Stor bukett */}
            <div className="romantic-card p-8 rounded-2xl bg-gradient-to-br from-[#F5F1E8] to-[#D4B5A8]/10">
              <div className="relative aspect-square rounded-xl overflow-hidden mb-6">
                <Image 
                  src="/flower/Roslyxbukett.JPG"
                  alt="Stor bukett"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl handwritten text-[#7A6B5D] mb-3 text-center">Stor bukett – från 899 kr</h3>
              <p className="text-[#6B5B4F] leading-relaxed text-center mb-2">
                Lyxig och generös bukett fylld med volym och variation.
              </p>
              <p className="text-[#6B5B4F] leading-relaxed text-center mb-4">
                Pris från 899 kr beroende på säsongens blommor och dina önskemål.
              </p>
              <p className="text-[#6B5B4F] text-sm text-center italic">
                Bilderna visar exempel – varje bukett skapas unikt efter säsong.
              </p>
            </div>
          </div>

          <p className="text-center text-[#6B5B4F] italic text-lg">
            Alla buketter skapas utefter säsong, dina önskemål och stil och inkluderar finpackning som matchar buketten.
          </p>
        </div>
      </section>

      {/* Så gör du en beställning */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl handwritten text-[#7A6B5D] mb-4">
              Så går det till
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="flex gap-6">
              <div className="w-14 h-14 bg-[#8B956D] text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#7A6B5D] mb-2">Skicka din förfrågan</h3>
                <p className="text-[#6B5B4F] text-lg">Via formuläret, Mobil eller Instagram/mejl.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-14 h-14 bg-[#8B956D] text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#7A6B5D] mb-2">Beskriv vad du önskar</h3>
                <p className="text-[#6B5B4F] text-lg">Färger, känsla, storlek – eller låt mig överraska dig.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-14 h-14 bg-[#8B956D] text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#7A6B5D] mb-2">Bekräftelse & betalning</h3>
                <p className="text-[#6B5B4F] text-lg">Du får pris, leveranstid och Swishinfo.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-14 h-14 bg-[#8B956D] text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#7A6B5D] mb-2">Skapande & leverans</h3>
                <p className="text-[#6B5B4F] text-lg">Jag skapar din bukett för hand och du hämtar eller får den levererad.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leverans & Upphämtning */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-br from-[#F5F1E8] via-[#F0E8D8] to-[#EBE0CE]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl handwritten text-[#7A6B5D] mb-6">🚚 Leverans eller upphämtning</h2>
          <p className="text-[#6B5B4F] text-lg sm:text-xl leading-relaxed mb-4">
            Gör din beställning 3 dagar i förväg för att rätt blommor ska beställas.
          </p>
          <p className="text-[#6B5B4F] text-lg sm:text-xl leading-relaxed mb-4">
            Du kan hämta din bukett hos mig i Brottby eller få den levererad till <strong>Brottby, Vallentuna, Åkersberga, Täby och Stockholm</strong>.
          </p>
          <p className="text-[#6B5B4F] text-lg sm:text-xl leading-relaxed">
            Leveranspriset beror på avstånd – jag återkommer med exakt kostnad när du gör din förfrågan.
          </p>
        </div>
      </section>

      {/* Kontaktformulär */}
      <section id="kontakt" className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl handwritten text-[#7A6B5D] mb-4">
              ✨ Beställ din bukett här
            </h2>
            <p className="text-[#6B5B4F] text-xl mb-2 leading-relaxed">
              Gör din beställning 3 dagar i förväg för att rätt blommor ska beställas.
            </p>
            <p className="text-[#6B5B4F] text-xl mb-2 leading-relaxed">
              Det går även att ringa <a href="tel:0737131884" className="font-semibold text-[#8B956D] hover:underline">073-713 18 84</a> för beställning.
            </p>
            <p className="text-[#6B5B4F] text-xl mb-2 leading-relaxed">
              Jag svarar vanligen inom 24 timmar – alla förfrågningar är kostnadsfria
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
                  className="w-full px-4 py-3 rounded-lg border border-[#D4B5A8] focus:outline-none focus:border-[#8B956D] disabled:opacity-50"
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
                  className="w-full px-4 py-3 rounded-lg border border-[#D4B5A8] focus:outline-none focus:border-[#8B956D] disabled:opacity-50"
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
                  className="w-full px-4 py-3 rounded-lg border border-[#D4B5A8] focus:outline-none focus:border-[#8B956D] disabled:opacity-50"
                />
              </div>
              <div>
                <label htmlFor="budget" className="block text-[#6B5B4F] font-medium mb-2">Välj storlek *</label>
                <select 
                  id="budget" 
                  name="budget"
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg border border-[#D4B5A8] focus:outline-none focus:border-[#8B956D] disabled:opacity-50"
                >
                  <option value="">Välj storlek</option>
                  <option value="liten">Liten – 399 kr</option>
                  <option value="mellan">Mellan – 599 kr</option>
                  <option value="stor">Stor – från 899 kr</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="farger" className="block text-[#6B5B4F] font-medium mb-2">Färgtema / Stil</label>
              <input 
                type="text" 
                id="farger" 
                name="farger"
                placeholder="T.ex. romantisk rosa, vit & grön, överraska mig..."
                disabled={isSubmitting}
                className="w-full px-4 py-3 rounded-lg border border-[#D4B5A8] focus:outline-none focus:border-[#8B956D] disabled:opacity-50"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="leverans" className="block text-[#6B5B4F] font-medium mb-2">Leverans eller upphämtning? *</label>
                <select 
                  id="leverans" 
                  name="leverans"
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg border border-[#D4B5A8] focus:outline-none focus:border-[#8B956D] disabled:opacity-50"
                >
                  <option value="">Välj alternativ</option>
                  <option value="upphamtning">Upphämtning i Brottby</option>
                  <option value="leverans">Leverans</option>
                </select>
              </div>
              <div>
                <label htmlFor="datum" className="block text-[#6B5B4F] font-medium mb-2">Datum för buketten *</label>
                <input 
                  type="date" 
                  id="datum" 
                  name="datum"
                  min={new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg border border-[#D4B5A8] focus:outline-none focus:border-[#8B956D] disabled:opacity-50"
                />
              </div>
            </div>

            <div>
              <label htmlFor="adress" className="block text-[#6B5B4F] font-medium mb-2">Adress (om du valt leverans)</label>
              <input 
                type="text"
                name="adress"
                disabled={isSubmitting} 
                id="adress" 
                placeholder="Gatuadress, postnummer och ort"
                className="w-full px-4 py-3 rounded-lg border border-[#D4B5A8] focus:outline-none focus:border-[#8B956D] disabled:opacity-50"
              />
            </div>

            <div>
              <label htmlFor="meddelande" className="block text-[#6B5B4F] font-medium mb-2">Meddelande</label>
              <textarea 
                id="meddelande" 
                name="meddelande"
                rows={5}
                disabled={isSubmitting}
                placeholder="Berätta gärna mer om vad du önskar, eller om det är en speciell gåva..."
                className="w-full px-4 py-3 rounded-lg border border-[#D4B5A8] focus:outline-none focus:border-[#8B956D] disabled:opacity-50"
              ></textarea>
            </div>

            {submitMessage && (
              <div className={`text-center p-4 rounded-lg ${submitMessage.includes('Tack') ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                {submitMessage}
              </div>
            )}

            <div className="text-center">
              <button 
                type="submit"
                disabled={isSubmitting}
                className="inline-block px-12 py-4 bg-[#8B956D] text-white rounded-full hover:bg-[#7A8B6F] transition-all shadow-lg hover:shadow-xl text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? '⏳ Skickar...' : '🌸 Skicka förfrågan'}
              </button>
              <p className="text-[#6B5B4F] text-sm mt-4">
                Jag svarar vanligtvis inom 24 timmar och alla förfrågningar är helt kostnadsfria
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Säsongens blommor */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-br from-[#F5F1E8] via-[#F0E8D8] to-[#EBE0CE]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl handwritten text-[#7A6B5D] mb-6">🌼 Jag jobbar med säsongens blommor</h2>
              <div className="space-y-4 text-[#6B5B4F] text-lg leading-relaxed">
                <p className="font-medium text-[#8B956D]">
                  Jag skapar alltid med det som är allra vackrast just nu – varje bukett blir därför helt unik.
                </p>
                <p>
                  Blommor förändras med årstiderna, och det gör också mina buketter. Jag arbetar alltid utifrån det som är vackrast just nu – som tulpaner på våren, dahlior på sensommaren och amaryllis under vintern.
                </p>
                <p>
                  Det betyder att varje bukett blir unik, och att färger och blomsorter kan variera beroende på säsong.
                </p>
                <p className="font-semibold text-[#8B956D]">
                  💡 Tips: Följ mig på Instagram för att se veckans bukett och få inspiration!
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
              <Image 
                src="/flower/syrenbukett.JPG"
                alt="Säsongens blommor"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-br from-[#F5F1E8] via-[#F0E8D8] to-[#EBE0CE]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl handwritten text-[#7A6B5D] mb-4">
              Vanliga frågor
            </h2>
          </div>

          <div className="space-y-6">
            <div className="romantic-card p-6 rounded-2xl bg-white">
              <h3 className="text-xl font-bold text-[#7A6B5D] mb-3">Hur lång framförhållning behöver du?</h3>
              <p className="text-[#6B5B4F] leading-relaxed">
                Minst 3 dagar – för att hinna köpa hem rätt blommor och skapa något unikt för just dig.
              </p>
            </div>

            <div className="romantic-card p-6 rounded-2xl bg-white">
              <h3 className="text-xl font-bold text-[#7A6B5D] mb-3">Kan jag önska specifika blommor?</h3>
              <p className="text-[#6B5B4F] leading-relaxed">
                Ja, men jag arbetar alltid utifrån säsong. Det betyder att jag kan skapa efter dina önskemål, men använder det som är vackrast och fräschast just nu.
              </p>
            </div>

            <div className="romantic-card p-6 rounded-2xl bg-white">
              <h3 className="text-xl font-bold text-[#7A6B5D] mb-3">Kan du göra buketter i en viss färg?</h3>
              <p className="text-[#6B5B4F] leading-relaxed">
                Självklart! Jag älskar att skapa unika färgteman – berätta bara vilka färger du drömmer om.
              </p>
            </div>

            <div className="romantic-card p-6 rounded-2xl bg-white">
              <h3 className="text-xl font-bold text-[#7A6B5D] mb-3">Kan jag skicka buketten som gåva?</h3>
              <p className="text-[#6B5B4F] leading-relaxed">
                Ja – ange adress och eventuell hälsning i formuläret så ordnar jag resten.
              </p>
            </div>

            <div className="romantic-card p-6 rounded-2xl bg-white">
              <h3 className="text-xl font-bold text-[#7A6B5D] mb-3">Vad kostar leverans?</h3>
              <p className="text-[#6B5B4F] leading-relaxed">
                Priset beror på avstånd. Jag återkommer alltid med exakt pris när du skickat din förfrågan.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
