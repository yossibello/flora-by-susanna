'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Flower } from '@/types';

export default function ShopPage() {
  const [flowers, setFlowers] = useState<Flower[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>('all');

  useEffect(() => {
    fetchFlowers();
  }, [filter]);

  const fetchFlowers = async () => {
    try {
      const url = filter === 'all' 
        ? '/api/flowers' 
        : `/api/flowers?category=${filter}`;
      const response = await fetch(url);
      const data = await response.json();
      // Ensure data is an array
      setFlowers(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Failed to fetch flowers:', error);
      setFlowers([]);
    } finally {
      setLoading(false);
    }
  };

  const categories = [
    { value: 'all', label: 'Alla' },
    { value: 'Bouquet', label: 'Bukett' },
    { value: 'Arrangement', label: 'Arrangemang' },
    { value: 'Single Stem', label: 'Enkel Stjälk' }
  ];

  return (
    <div className="min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-[#7A8B6F] text-sm uppercase tracking-[0.3em] mb-4">Handla Vår Kollektion</p>
          <h1 className="text-6xl md:text-7xl text-[#3D3D3D] mb-6">
            <span className="handwritten text-[#E8B4B8]">Handplockade</span> Buketter
          </h1>
          <p className="text-[#3D3D3D]/70 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Varje arrangemang skapas färskt på beställning och firar säsongens skönhet
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setFilter(category.value)}
              className={`px-6 py-2 rounded-full border-2 transition-all text-sm uppercase tracking-wider ${
                filter === category.value
                  ? 'bg-[#9CAF88] text-white border-[#9CAF88]'
                  : 'border-[#9CAF88] text-[#7A8B6F] hover:bg-[#9CAF88] hover:text-white'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Flowers Grid */}
        {loading ? (
          <div className="text-center py-12">
            <p className="text-[#3D3D3D]/60 text-lg">Laddar våra vackra blommor...</p>
          </div>
        ) : flowers.length === 0 ? (
          <div className="text-center py-12 romantic-card p-16 rounded-2xl">
            <p className="text-[#3D3D3D]/70 text-xl font-light mb-6">Inga blommor tillgängliga för tillfället.</p>
            <p className="text-[#7A8B6F]">Kom tillbaka snart för nya säsongsarrangemang!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {flowers.map((flower) => (
              <div
                key={flower.id}
                className="romantic-card rounded-xl overflow-hidden group"
              >
                <div className="aspect-[4/5] bg-gradient-to-br from-[#9CAF88]/20 via-[#E8B4B8]/20 to-[#FFF8F0] relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-8xl opacity-30">🌸</span>
                  </div>
                  {!flower.availability && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-[#E8B4B8] px-4 py-1 rounded-full text-white text-xs uppercase tracking-wider">
                        Slutsåld
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-8">
                  <h3 className="text-3xl handwritten text-[#3D3D3D] mb-2">
                    {flower.name}
                  </h3>
                  <p className="text-[#3D3D3D]/60 text-sm leading-relaxed mb-6 line-clamp-2">
                    {flower.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-light text-[#9CAF88]">
                      {flower.price} SEK
                    </span>
                    <button
                      disabled={!flower.availability}
                      className={`px-8 py-3 rounded-full transition-all shadow-md text-sm uppercase tracking-wider ${
                        flower.availability
                          ? 'bg-[#E8B4B8] text-white hover:bg-[#D4A59A] hover:shadow-lg'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      {flower.availability ? 'Beställ Nu' : 'Ej Tillgänglig'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Custom Orders CTA */}
        <div className="mt-24 text-center romantic-card p-16 rounded-2xl">
          <h2 className="text-5xl text-[#3D3D3D] mb-4">
            <span className="handwritten text-[#9CAF88]">Något Specifikt</span> i Tankarna?
          </h2>
          <p className="text-[#3D3D3D]/70 text-lg mb-8 max-w-2xl mx-auto font-light">
            Vi älskar att skapa skräddarsydda arrangemang anpassade efter din vision. Hör av dig så designar vi något vackert tillsammans.
          </p>
          <button className="px-10 py-4 border-2 border-[#9CAF88] text-[#7A8B6F] rounded-full hover:bg-[#9CAF88] hover:text-white transition-all text-sm uppercase tracking-wider">
            Beställ Anpassad Bukett
          </button>
        </div>
      </div>
    </div>
  );
}
