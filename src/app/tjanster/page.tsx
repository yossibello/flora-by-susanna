'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function ForetagstjansterPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    const formData = new FormData(e.currentTarget);
    const data = {
      companyName: formData.get('foretagsnamn'),
      contactPerson: formData.get('kontaktperson'),
      email: formData.get('email'),
      phone: formData.get('telefon'),
      serviceType: formData.get('tjanst'),
      deliveryInterval: formData.get('leverans'),
      address: formData.get('adress'),
      style: formData.get('onskemal'),
      message: formData.get('meddelande'),
      inquiryType: 'foretag',
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
        setSubmitMessage('Tack för din förfrågan! Vi återkommer inom 24 timmar.');
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
            backgroundImage: "url('/flower/bukettliten.jpg')",
            opacity: 0.3
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F5F1E8]/80 via-[#F5F1E8]/70 to-[#E8F0E0]/60"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif mb-4 text-[#7A8B6F]">
            Företagsblommor & blomsterdekorationer
          </h1>
          <p className="text-lg sm:text-xl text-[#6B5B4F] mb-6 font-medium italic">
            "Skapa en välkomnande, inspirerande och professionell miljö med handgjorda blomsterarrangemang – anpassade efter ert varumärke."
          </p>
          <p className="text-base sm:text-xl text-black mb-8 sm:mb-12 leading-relaxed max-w-2xl mx-auto font-normal" style={{ textShadow: '2px 2px 5px rgba(255,255,255,0.95)' }}>
            Blommor gör mer än att dekorera – de skapar känsla, välkomnar kunder och lyfter både varumärke och arbetsmiljö.
          </p>
          <a 
            href="#kontakt"
            className="inline-block bg-[#8B956D] text-white px-8 py-3 rounded hover:bg-[#7A8B6F] transition-colors shadow-lg"
          >
            Skicka förfrågan
          </a>
        </div>
      </section>

      {/* Intro Text */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#6B5B4F] text-lg sm:text-xl leading-relaxed mb-4">
            Jag hjälper företag i Brottby, Vallentuna, Täby, Åkersberga och Stockholm med skräddarsydda blomsterlösningar som <span className="font-semibold">stärker varumärket, skapar trivsel och ger ett professionellt första intryck</span>.
          </p>
          <p className="text-[#6B5B4F] text-lg sm:text-xl leading-relaxed">
            Alla arrangemang skapas för hand, med omtanke och säsongens vackraste blommor.
          </p>
        </div>
      </section>

      {/* Vad jag erbjuder företag */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-br from-[#F5F1E8] via-[#F0E8D8] to-[#EBE0CE]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl handwritten text-[#7A6B5D] mb-16 text-center">
            Vad jag erbjuder företag
          </h2>

          <div className="space-y-12">
            {/* Säsongsanpassade buketter */}
            <div className="romantic-card p-10 sm:p-12 rounded-3xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-16 h-16 flex-shrink-0">
                  <Image
                    src="/flower/foretag.JPG"
                    alt="Företagsbuketter"
                    fill
                    className="object-cover rounded-full border-2 border-[#8B956D]/30"
                  />
                </div>
                <h3 className="text-3xl font-bold text-[#8B956D]">Säsongsanpassade företagsbuketter (prenumeration)</h3>
              </div>
              <p className="text-[#6B5B4F] text-lg leading-relaxed mb-8">
                Fräscha, handgjorda buketter levererade regelbundet till ert kontor, butik eller reception – perfekt för att skapa ett varmt och professionellt intryck.
              </p>
              
              <h4 className="text-xl font-semibold text-[#7A8B6F] mb-4">Fördelar:</h4>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-white/70 p-5 rounded-xl border-2 border-[#8B956D]/30 shadow-sm">
                  <div className="flex items-start gap-3">
                    <span className="text-[#8B956D] text-2xl font-bold">✔</span>
                    <div>
                      <p className="text-[#6B5B4F] font-semibold mb-1">Slipp tänka på blommor</p>
                      <p className="text-[#6B5B4F] text-sm">Leverans sker automatiskt</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/70 p-5 rounded-xl border-2 border-[#8B956D]/30 shadow-sm">
                  <div className="flex items-start gap-3">
                    <span className="text-[#8B956D] text-2xl font-bold">✔</span>
                    <div>
                      <p className="text-[#6B5B4F] font-semibold mb-1">Anpassas efter önskade färger och säsong</p>
                      <p className="text-[#6B5B4F] text-sm">Vi skapar buketter som passar er profil</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/70 p-5 rounded-xl border-2 border-[#8B956D]/30 shadow-sm">
                  <div className="flex items-start gap-3">
                    <span className="text-[#8B956D] text-2xl font-bold">✔</span>
                    <div>
                      <p className="text-[#6B5B4F] font-semibold mb-1">Höjer trivseln</p>
                      <p className="text-[#6B5B4F] text-sm">För både kunder och personal</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/70 p-5 rounded-xl border-2 border-[#8B956D]/30 shadow-sm">
                  <div className="flex items-start gap-3">
                    <span className="text-[#8B956D] text-2xl font-bold">✔</span>
                    <div>
                      <p className="text-[#6B5B4F] font-semibold mb-1">Flexibelt</p>
                      <p className="text-[#6B5B4F] text-sm">Ingen bindningstid</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-[#8B956D]/10 to-[#7A8B6F]/5 p-6 rounded-2xl border-2 border-[#8B956D]/20">
                <p className="text-[#8B956D] text-2xl font-bold text-center">Från 399 kr/bukett</p>
                <p className="text-[#6B5B4F] text-center text-sm mt-2">(beroende på storlek och önskemål)</p>
              </div>
            </div>

            {/* Dekoration av reception */}
            <div className="romantic-card p-10 sm:p-12 rounded-3xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-16 h-16 flex-shrink-0">
                  <Image
                    src="/flower/hogtider.JPG"
                    alt="Högtider och dekoration"
                    fill
                    className="object-cover rounded-full border-2 border-[#8B956D]/30"
                  />
                </div>
                <h3 className="text-3xl font-bold text-[#8B956D]">Dekoration av reception, entré & lokaler</h3>
              </div>
              <p className="text-[#6B5B4F] text-lg leading-relaxed mb-6">
                För företag som vill skapa ett stilrent och välkomnande intryck varje dag. Jag tar hand om allt från:
              </p>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                <div className="bg-white/70 p-5 rounded-xl border-2 border-[#8B956D]/30 shadow-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-[#8B956D] text-xl font-bold">✔</span>
                    <p className="text-[#6B5B4F]">Blomsterarrangemang i reception</p>
                  </div>
                </div>
                <div className="bg-white/70 p-5 rounded-xl border-2 border-[#8B956D]/30 shadow-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-[#8B956D] text-xl font-bold">✔</span>
                    <p className="text-[#6B5B4F]">Säsongsdekorationer (jul, högtider, vår, höst)</p>
                  </div>
                </div>
                <div className="bg-white/70 p-5 rounded-xl border-2 border-[#8B956D]/30 shadow-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-[#8B956D] text-xl font-bold">✔</span>
                    <p className="text-[#6B5B4F]">Gröna växter och planteringar</p>
                  </div>
                </div>
                <div className="bg-white/70 p-5 rounded-xl border-2 border-[#8B956D]/30 shadow-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-[#8B956D] text-xl font-bold">✔</span>
                    <p className="text-[#6B5B4F]">Utomhuskrukor för entréer</p>
                  </div>
                </div>
                <div className="bg-white/70 p-5 rounded-xl border-2 border-[#8B956D]/30 shadow-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-[#8B956D] text-xl font-bold">✔</span>
                    <p className="text-[#6B5B4F]">Lobbys, väntrum och gemensamma ytor</p>
                  </div>
                </div>
              </div>
              
              <p className="text-[#6B5B4F] text-lg font-semibold">Vi tar fram ett koncept som speglar ert varumärke – från färgval till känsla.</p>
            </div>

            {/* Event & företagsarrangemang */}
            <div className="romantic-card p-10 sm:p-12 rounded-3xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-16 h-16 flex-shrink-0">
                  <Image
                    src="/flower/bukett.JPG"
                    alt="Event och arrangemang"
                    fill
                    className="object-cover rounded-full border-2 border-[#8B956D]/30"
                  />
                </div>
                <h3 className="text-3xl font-bold text-[#8B956D]">Event & företagsarrangemang</h3>
              </div>
              <p className="text-[#6B5B4F] text-lg leading-relaxed mb-6">
                Jag hjälper er skapa blomsterupplevelser för:
              </p>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="bg-white/70 p-4 rounded-xl border-2 border-[#8B956D]/30 shadow-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-[#8B956D] text-xl font-bold">✔</span>
                    <p className="text-[#6B5B4F]">Konferenser</p>
                  </div>
                </div>
                <div className="bg-white/70 p-4 rounded-xl border-2 border-[#8B956D]/30 shadow-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-[#8B956D] text-xl font-bold">✔</span>
                    <p className="text-[#6B5B4F]">Kundevent</p>
                  </div>
                </div>
                <div className="bg-white/70 p-4 rounded-xl border-2 border-[#8B956D]/30 shadow-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-[#8B956D] text-xl font-bold">✔</span>
                    <p className="text-[#6B5B4F]">Butiksöppningar</p>
                  </div>
                </div>
                <div className="bg-white/70 p-4 rounded-xl border-2 border-[#8B956D]/30 shadow-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-[#8B956D] text-xl font-bold">✔</span>
                    <p className="text-[#6B5B4F]">Företagsfester</p>
                  </div>
                </div>
                <div className="bg-white/70 p-4 rounded-xl border-2 border-[#8B956D]/30 shadow-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-[#8B956D] text-xl font-bold">✔</span>
                    <p className="text-[#6B5B4F]">Produktlanseringar</p>
                  </div>
                </div>
                <div className="bg-white/70 p-4 rounded-xl border-2 border-[#8B956D]/30 shadow-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-[#8B956D] text-xl font-bold">✔</span>
                    <p className="text-[#6B5B4F]">Fotograferingar</p>
                  </div>
                </div>
                <div className="bg-white/70 p-4 rounded-xl border-2 border-[#8B956D]/30 shadow-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-[#8B956D] text-xl font-bold">✔</span>
                    <p className="text-[#6B5B4F]">PR-event</p>
                  </div>
                </div>
                <div className="bg-white/70 p-4 rounded-xl border-2 border-[#8B956D]/30 shadow-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-[#8B956D] text-xl font-bold">✔</span>
                    <p className="text-[#6B5B4F]">Kurser på plats (julkransar, midsommarkransar, bukettbinderi)</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <p className="text-[#6B5B4F] text-lg font-semibold">Stilrent, elegant, lantligt – eller helt efter ert tema och varumärke.</p>
                <p className="text-[#6B5B4F] text-lg">Allt kan levereras och installeras på plats för ett elegant och proffsigt resultat.</p>
              </div>
            </div>

            {/* Gåvor */}
            <div className="romantic-card p-10 sm:p-12 rounded-3xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-16 h-16 flex-shrink-0">
                  <Image
                    src="/flower/begravning.JPG"
                    alt="Gåvor och presenter"
                    fill
                    className="object-cover rounded-full border-2 border-[#8B956D]/30"
                  />
                </div>
                <h3 className="text-3xl font-bold text-[#8B956D]">Gåvor till personal & kunder</h3>
              </div>
              <p className="text-[#6B5B4F] text-lg leading-relaxed mb-6">
                Perfekt för högtider, födelsedagar, kundrelationer, avtackningar och uppskattning i vardagen.
              </p>
              
              <p className="text-[#6B5B4F] text-lg leading-relaxed mb-4">
                Jag erbjuder:
              </p>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="bg-white/70 p-4 rounded-xl border-2 border-[#8B956D]/30 shadow-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-[#8B956D] text-xl font-bold">✔</span>
                    <p className="text-[#6B5B4F]">Buketter</p>
                  </div>
                </div>
                <div className="bg-white/70 p-4 rounded-xl border-2 border-[#8B956D]/30 shadow-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-[#8B956D] text-xl font-bold">✔</span>
                    <p className="text-[#6B5B4F]">Presentpaket</p>
                  </div>
                </div>
                <div className="bg-white/70 p-4 rounded-xl border-2 border-[#8B956D]/30 shadow-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-[#8B956D] text-xl font-bold">✔</span>
                    <p className="text-[#6B5B4F]">Personliga blomsterarrangemang</p>
                  </div>
                </div>
                <div className="bg-white/70 p-4 rounded-xl border-2 border-[#8B956D]/30 shadow-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-[#8B956D] text-xl font-bold">✔</span>
                    <p className="text-[#6B5B4F]">Säsongsblommor (tulpanbox, sommarbox, julblommor)</p>
                  </div>
                </div>
              </div>
              
              <p className="text-[#6B5B4F] text-lg font-semibold">Möjlighet att skicka direkt till mottagaren.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Varför företag väljer mig */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="romantic-card p-10 sm:p-12 rounded-3xl">
            <h2 className="text-4xl sm:text-5xl handwritten text-[#7A6B5D] mb-12 text-center">
              Varför företag väljer mig
            </h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-white to-[#F5F1E8]/30 p-6 rounded-xl border-2 border-[#8B956D]/30 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3">
                  <span className="text-[#8B956D] text-2xl font-bold">✔</span>
                  <p className="text-[#6B5B4F] text-lg font-semibold">Handgjorda arrangemang med omtanke</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-white to-[#F5F1E8]/30 p-6 rounded-xl border-2 border-[#8B956D]/30 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3">
                  <span className="text-[#8B956D] text-2xl font-bold">✔</span>
                  <p className="text-[#6B5B4F] text-lg font-semibold">Hög kvalitet och personlig service</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-white to-[#F5F1E8]/30 p-6 rounded-xl border-2 border-[#8B956D]/30 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3">
                  <span className="text-[#8B956D] text-2xl font-bold">✔</span>
                  <p className="text-[#6B5B4F] text-lg font-semibold">Säsongens absolut bästa blommor</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-white to-[#F5F1E8]/30 p-6 rounded-xl border-2 border-[#8B956D]/30 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3">
                  <span className="text-[#8B956D] text-2xl font-bold">✔</span>
                  <p className="text-[#6B5B4F] text-lg font-semibold">Flexibla upplägg utan bindningstid</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-white to-[#F5F1E8]/30 p-6 rounded-xl border-2 border-[#8B956D]/30 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3">
                  <span className="text-[#8B956D] text-2xl font-bold">✔</span>
                  <p className="text-[#6B5B4F] text-lg font-semibold">Lokal florist i Brottby – snabb och pålitlig service</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-white to-[#F5F1E8]/30 p-6 rounded-xl border-2 border-[#8B956D]/30 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3">
                  <span className="text-[#8B956D] text-2xl font-bold">✔</span>
                  <p className="text-[#6B5B4F] text-lg font-semibold">Möjlighet att skapa en hel dekorationsplan för ert företag</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-white to-[#F5F1E8]/30 p-6 rounded-xl border-2 border-[#8B956D]/30 shadow-md hover:shadow-lg transition-shadow sm:col-span-2 lg:col-span-3">
                <div className="flex items-start gap-3 justify-center">
                  <span className="text-[#8B956D] text-2xl font-bold">✔</span>
                  <p className="text-[#6B5B4F] text-lg font-semibold">Anpassas efter varumärke, stil och kundupplevelse</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bildgalleri */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-br from-[#F5F1E8] via-[#F0E8D8] to-[#EBE0CE]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl handwritten text-[#7A6B5D] mb-12 text-center">Exempel på företagsarrangemang</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
              <Image 
                src="/flower/bukettmellanhortensia.JPG"
                alt="Företagsbukett"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
              <Image 
                src="/flower/roslyxbukett.JPG"
                alt="Reception arrangemang"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
              <Image 
                src="/flower/bukettliten.jpg"
                alt="Event dekoration"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
              <Image 
                src="/flower/brölloppuder.JPG"
                alt="Företagsevent"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
              <Image 
                src="/flower/Julbukettanemon.JPG"
                alt="Julbukett"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
              <Image 
                src="/flower/bukettjul.JPG"
                alt="Julbukett"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gratis konsultation */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-br from-white via-[#F5F1E8]/20 to-white">
        <div className="max-w-5xl mx-auto">
          <div className="romantic-card p-10 sm:p-14 rounded-3xl bg-gradient-to-br from-white to-[#F5F1E8]/30">
            <h2 className="text-4xl sm:text-5xl handwritten text-[#7A6B5D] mb-6 text-center">Gratis konsultation</h2>
            <p className="text-[#6B5B4F] text-xl leading-relaxed mb-12 text-center max-w-2xl mx-auto">
              <span className="font-semibold">Osäker på vad som passar ert företag?</span><br />
              Jag erbjuder en kostnadsfri konsultation där vi går igenom:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-10">
              <div className="bg-white/70 p-6 rounded-xl border-2 border-[#8B956D]/30 shadow-sm">
                <div className="flex items-start gap-3">
                  <span className="text-[#8B956D] text-2xl font-bold">✔</span>
                  <p className="text-[#6B5B4F] text-lg">Stil och känsla som matchar ert varumärke</p>
                </div>
              </div>
              
              <div className="bg-white/70 p-6 rounded-xl border-2 border-[#8B956D]/30 shadow-sm">
                <div className="flex items-start gap-3">
                  <span className="text-[#8B956D] text-2xl font-bold">✔</span>
                  <p className="text-[#6B5B4F] text-lg">Färgval och säsong</p>
                </div>
              </div>
              
              <div className="bg-white/70 p-6 rounded-xl border-2 border-[#8B956D]/30 shadow-sm">
                <div className="flex items-start gap-3">
                  <span className="text-[#8B956D] text-2xl font-bold">✔</span>
                  <p className="text-[#6B5B4F] text-lg">Lokaler och behov</p>
                </div>
              </div>
              
              <div className="bg-white/70 p-6 rounded-xl border-2 border-[#8B956D]/30 shadow-sm">
                <div className="flex items-start gap-3">
                  <span className="text-[#8B956D] text-2xl font-bold">✔</span>
                  <p className="text-[#6B5B4F] text-lg">Budget</p>
                </div>
              </div>
              
              <div className="bg-white/70 p-6 rounded-xl border-2 border-[#8B956D]/30 shadow-sm">
                <div className="flex items-start gap-3">
                  <span className="text-[#8B956D] text-2xl font-bold">✔</span>
                  <p className="text-[#6B5B4F] text-lg">Leveransintervall</p>
                </div>
              </div>
              
              <div className="bg-white/70 p-6 rounded-xl border-2 border-[#8B956D]/30 shadow-sm">
                <div className="flex items-start gap-3">
                  <span className="text-[#8B956D] text-2xl font-bold">✔</span>
                  <p className="text-[#6B5B4F] text-lg">Engångsdekor eller helhetslösning</p>
                </div>
              </div>
            </div>
            
            <div className="text-center bg-gradient-to-br from-[#8B956D]/10 to-[#7A8B6F]/5 p-6 rounded-xl border-2 border-[#8B956D]/20">
              <p className="text-[#6B5B4F] text-lg sm:text-xl font-semibold">
                Vi kan ses digitalt, via telefon eller på plats hos er.
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
              <h2 className="text-4xl sm:text-5xl handwritten text-[#7A6B5D] mb-6">
                Skicka en förfrågan
              </h2>
              <p className="text-[#6B5B4F] text-xl leading-relaxed mb-3">
                Låt mig hjälpa er skapa en vackrare och mer välkomnande arbetsplats.
              </p>
              <p className="text-[#6B5B4F] text-lg mb-3">
                Jag svarar vanligen inom 24 timmar.
              </p>
              <p className="text-[#8B956D] text-lg font-semibold">
                → Alla förfrågningar och konsultationer är kostnadsfria.
              </p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="foretagsnamn" className="block text-[#6B5B4F] font-medium mb-2">Företagsnamn *</label>
                  <input 
                    type="text" 
                    id="foretagsnamn"
                    name="foretagsnamn"
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-lg border-2 border-[#8B956D]/20 bg-white focus:outline-none focus:border-[#8B956D] transition-colors disabled:opacity-50"
                  />
                </div>
                <div>
                  <label htmlFor="kontaktperson" className="block text-[#6B5B4F] font-medium mb-2">Kontaktperson *</label>
                  <input 
                    type="text" 
                    id="kontaktperson"
                    name="kontaktperson"
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-lg border-2 border-[#8B956D]/20 bg-white focus:outline-none focus:border-[#8B956D] transition-colors disabled:opacity-50"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
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
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="tjanst" className="block text-[#6B5B4F] font-medium mb-2">Vilken tjänst är ni intresserade av?</label>
                  <select 
                    id="tjanst"
                    name="tjanst"
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-lg border-2 border-[#8B956D]/20 bg-white focus:outline-none focus:border-[#8B956D] transition-colors disabled:opacity-50"
                  >
                    <option value="">Välj tjänst</option>
                    <option value="prenumeration">Bukettprenumeration</option>
                    <option value="reception">Reception/Entré-dekoration</option>
                    <option value="event">Event</option>
                    <option value="gavor">Gåvor</option>
                    <option value="annat">Annat</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="leverans" className="block text-[#6B5B4F] font-medium mb-2">Hur ofta önskar ni leverans?</label>
                  <select 
                    id="leverans"
                    name="leverans"
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-lg border-2 border-[#8B956D]/20 bg-white focus:outline-none focus:border-[#8B956D] transition-colors disabled:opacity-50"
                  >
                    <option value="">Välj intervall</option>
                    <option value="vecka">Varje vecka</option>
                    <option value="varannan">Varannan vecka</option>
                    <option value="manad">Varje månad</option>
                    <option value="engangsevent">Engångsevent</option>
                    <option value="ej-relevant">Ej relevant</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="adress" className="block text-[#6B5B4F] font-medium mb-2">Adress</label>
                <input 
                  type="text" 
                  id="adress"
                  name="adress"
                  placeholder="Företagets adress"
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg border-2 border-[#8B956D]/20 bg-white focus:outline-none focus:border-[#8B956D] transition-colors disabled:opacity-50"
                />
              </div>

              <div>
                <label htmlFor="onskemal" className="block text-[#6B5B4F] font-medium mb-2">Önskemål / Stil / Färger</label>
                <input 
                  type="text" 
                  id="onskemal"
                  name="onskemal"
                  placeholder="T.ex. moderna, färger enligt varumärke, säsongsanpassat..."
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg border-2 border-[#8B956D]/20 bg-white focus:outline-none focus:border-[#8B956D] transition-colors disabled:opacity-50"
                />
              </div>

              <div>
                <label htmlFor="meddelande" className="block text-[#6B5B4F] font-medium mb-2">Meddelande</label>
                <textarea 
                  id="meddelande"
                  name="meddelande"
                  rows={5}
                  placeholder="Berätta mer om era önskemål och behov..."
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg border-2 border-[#8B956D]/20 bg-white focus:outline-none focus:border-[#8B956D] transition-colors resize-none disabled:opacity-50"
                ></textarea>
              </div>

              {submitMessage && (
                <div className={`p-4 rounded-lg ${submitMessage.includes('Tack') ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
                  {submitMessage}
                </div>
              )}

              <div className="text-center pt-4">
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-block px-12 py-4 bg-[#8B956D] text-white rounded-full hover:bg-[#7A8B6F] transition-all shadow-lg hover:shadow-xl text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Skickar...' : 'Skicka förfrågan'}
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
        <h2>Blomsterlösningar till företag i Brottby, Vallentuna, Täby, Åkersberga, Stockholm</h2>
        <p>
          Jag erbjuder blomsterlösningar till företag i Brottby, Vallentuna, Täby, Åkersberga, Stockholm – med fokus på reception, entré, event och kontorsmiljöer.
          Specialiserad på lantlig, romantisk och färgstark design med modern känsla.
        </p>
      </section>
    </div>
  );
}
