"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[200vh] font-sans bg-white">
      <main className="flex-1">
        
        {/* Hero Section */}
        <section className="relative h-screen w-full flex items-end justify-center pb-20 lg:pb-32">
          {/* Background Image */}
          <Image
            src="/hero.avif"
            alt="Ochre Elements Furniture"
            fill
            priority
            sizes="100vw"
            className="object-cover"
            quality={75}
          />

          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-black/30"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center text-center px-4 w-full">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-white uppercase tracking-[0.2em] text-[11px] sm:text-xs md:text-sm font-semibold mb-4 sm:mb-6"
            >
              Arriving in the fall
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="text-white text-[15vw] sm:text-7xl md:text-8xl lg:text-[130px] font-serif leading-none mb-6"
            >
              Osun Elements
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="text-white text-[15px] sm:text-base md:text-lg max-w-[320px] sm:max-w-md md:max-w-2xl leading-relaxed font-light"
            >
              Handcrafted furniture that honors the beauty of its materials, each piece a study in wood grain, leather patina, and deliberate craft.
            </motion.p>
            
            {/* Scroll Down Arrow (Visible on mobile as per reference) */}
            <button 
              className="mt-10 sm:mt-12 w-12 h-12 rounded-full border border-white/60 flex items-center justify-center text-white hover:bg-white/10 transition-colors lg:hidden"
              aria-label="Scroll down"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <polyline points="19 12 12 19 5 12"></polyline>
              </svg>
            </button>
          </div>
        </section>

        {/* Minimal Living Section */}
        <section className="w-full bg-white px-4 lg:px-6 py-16 md:py-24">
          
          {/* Section Header */}
          <div className="flex justify-between items-end mb-8 md:mb-12">
            <h2 className="text-black text-4xl sm:text-5xl md:text-6xl font-sans tracking-tight">
              Minimal Living
            </h2>
            <button className="text-black text-sm md:text-base hover:opacity-70 transition-opacity flex items-center gap-1 mb-1 md:mb-2">
              Explore collection <span>&#8594;</span>
            </button>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            
            {[
              { id: 1, name: "Nordic Rocking Chair", price: "$ 480.00" },
              { id: 2, name: "Sundby Side Table", price: "$ 220.00" },
              { id: 3, name: "Haven Daybed", price: "$ 980.00" },
              { id: 4, name: "Fjord Shoe Cabinet", price: "$ 720.00" },
            ].map((product) => (
              <div key={product.id} className="group cursor-pointer flex flex-col">
                
                {/* Image Container */}
                <div className="relative w-full aspect-[4/5] bg-zinc-200 overflow-hidden mb-4">
                  {/* Heart Icon Overlay */}
                  <button aria-label="Add to wishlist" className="absolute top-4 right-4 z-10 text-white hover:opacity-70 transition-opacity">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  </button>
                  
                  {/* Placeholder for the actual image, you can replace the div below with next/image */}
                  <Image src={`/src/${product.id}.jpg`} alt={product.name} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>

                {/* Product Info */}
                <div className="flex flex-col">
                  <h3 className="text-black text-[15px] mb-1">{product.name}</h3>
                  <p className="text-zinc-600 text-sm font-serif">{product.price}</p>
                </div>

              </div>
            ))}

          </div>
        </section>

        {/* Quote Section */}
        <section className="w-full bg-white flex items-center justify-center py-24 lg:py-40 px-6">
          <p className="max-w-[1000px] text-center text-3xl md:text-4xl lg:text-[42px] leading-snug md:leading-normal text-black font-sans tracking-tight">
            Wood remembers. We listen. Between grain and silence, we birth furniture that holds stories, creates sanctuary, and transforms rooms where less becomes infinitely more.
          </p>
        </section>

        {/* Alternating Features Section */}
        <section className="w-full bg-white px-4 lg:px-6 pb-24 lg:pb-40 space-y-24 lg:space-y-40">
          
          {/* Feature 1: Console Table */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-24">
            {/* Text Content */}
            <div className="flex flex-col justify-between order-1 h-full py-2 lg:py-12">
              <h2 className="text-5xl md:text-6xl lg:text-[80px] font-serif text-black leading-[1.1] mb-16 md:mb-0">
                In Defense of<br/>Empty Walls
              </h2>
              <div className="max-w-[420px]">
                <p className="text-[13px] font-bold tracking-widest uppercase mb-4 text-black">The Quiet Revolution of Less</p>
                <p className="text-black/70 leading-relaxed text-[15px] md:text-base">
                  There's something profound about spaces that whisper rather than shout. At pátákó, we understand that true sophistication lies not in excess, but in the careful curation of elements that speak to both heart and mind.
                </p>
              </div>
            </div>
            
            {/* Image */}
            <div className="relative w-full aspect-[4/5] bg-stone-300 order-2">
              <Image src="/src/5.jpg" alt="Console Table" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-700 hover:scale-[1.02] cursor-pointer" />
            </div>
          </div>

          {/* Feature 2: Accent Chair */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-24">
            {/* Image */}
            <div className="relative w-full aspect-[4/5] bg-stone-200 order-1">
              <Image src="/src/6.jpg" alt="Tokyo Accent Chair" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-700 hover:scale-[1.02] cursor-pointer" />
            </div>

            {/* Text Content */}
            <div className="flex flex-col justify-between order-2 h-full py-2 lg:py-12">
              <p className="text-[13px] font-bold tracking-widest uppercase mb-12 md:mb-0 text-black">Crimson Forms</p>
              <div className="max-w-[480px]">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-black leading-tight mb-6">
                  Tokyo Accent Chair
                </h2>
                <p className="text-black/70 leading-relaxed text-[15px] md:text-base mb-8">
                  In the language of form and function, some pieces speak in whispers that resonate louder than shouts. Each piece in our "Crimson Forms" collection is sculpted to honor both the wood's natural character and the space it inhabits.
                </p>
                <button className="text-black text-sm hover:opacity-70 transition-opacity flex items-center gap-2">
                  Shop Collection <span>&#8594;</span>
                </button>
              </div>
            </div>
          </div>

        </section>

        {/* New Arrivals Section */}
        <section className="w-full bg-white px-4 lg:px-6 py-16 md:py-24">
          
          {/* Section Header */}
          <div className="flex justify-between items-end mb-8 md:mb-12">
            <h2 className="text-black text-4xl sm:text-5xl md:text-6xl font-sans tracking-tight">
              New Arrivals
            </h2>
            <button className="text-black text-sm md:text-base hover:opacity-70 transition-opacity flex items-center gap-1 mb-1 md:mb-2">
              Explore collection <span>&#8594;</span>
            </button>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            
            {[
              { id: 1, name: "Mizu Armchair", price: "$ 540.00" },
              { id: 2, name: "Kyōto Extendable Table", price: "$ 1580.00" },
              { id: 3, name: "Soma Storage Bed", price: "$ 1750.00" },
              { id: 4, name: "Kyōto Wardrobe", price: "$ 2050.00" },
            ].map((product) => (
              <div key={product.id} className="group cursor-pointer flex flex-col">
                
                {/* Image Container */}
                <div className="relative w-full aspect-[4/5] bg-zinc-200 overflow-hidden mb-4">
                  {/* Heart Icon Overlay */}
                  <button aria-label="Add to wishlist" className="absolute top-4 right-4 z-10 text-white hover:opacity-70 transition-opacity">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  </button>
                  
                  {/* Placeholder for image */}
                  <Image src={`/src/${(product.id % 11) + 1}.jpg`} alt={product.name} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                </div>

                {/* Product Info */}
                <div className="flex flex-col">
                  <h3 className="text-black text-[15px] mb-1">{product.name}</h3>
                  <p className="text-zinc-600 text-sm font-serif">{product.price}</p>
                </div>

              </div>
            ))}

          </div>
        </section>

      </main>
    </div>
  );
}
