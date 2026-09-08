export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans pt-24 lg:pt-32">
      <main className="flex-1 w-full">
        
        {/* Top Section */}
        <section className="w-full px-4 lg:px-6 py-12 md:py-24">
          <h1 className="text-3xl md:text-5xl lg:text-[56px] font-bold tracking-tight uppercase leading-[1.1] mb-12 lg:mb-24 max-w-6xl text-black">
            BETWEEN TRADITION AND TOMORROW, CRAFTWOOD FINDS BALANCE. FURNITURE ROOTED IN CRAFT, DESIGNED FOR NOW.
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-24">
            <div className="relative w-full aspect-square md:aspect-[4/5] bg-stone-200">
              <div className="absolute inset-0 bg-stone-200 transition-transform duration-700 hover:scale-[1.02] cursor-pointer"></div>
            </div>
            <div className="flex flex-col justify-end pb-8 lg:pb-12">
              <h2 className="text-2xl md:text-3xl lg:text-[32px] font-bold tracking-tight uppercase leading-snug max-w-lg text-black">
                CRAFTWOOD HONORS THE SLOW HAND AND THE PATIENT EYE. CREATING SPACES WHERE SIMPLICITY FEELS LIKE LUXURY.
              </h2>
            </div>
          </div>
        </section>

        {/* Middle Section 1: Wide Image */}
        <section className="w-full px-4 lg:px-6 py-16 md:py-24 bg-white">
          <h3 className="text-3xl md:text-4xl lg:text-[42px] leading-snug md:leading-[1.2] text-black mb-12 lg:mb-20 max-w-6xl font-normal">
            This is Craftwood. We honor the quiet dialogue between Japanese and Scandinavian form. Our work exists at the intersection of precision and simplicity, creating furniture that invites contemplation.
          </h3>
          <div className="relative w-full aspect-[16/9] lg:aspect-[2.5/1] bg-stone-200 overflow-hidden">
             <div className="absolute inset-0 bg-stone-300 transition-transform duration-700 hover:scale-[1.02] cursor-pointer"></div>
          </div>
        </section>

        {/* Middle Section 2: Text Columns */}
        <section className="w-full px-4 lg:px-6 py-16 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            <div>
              <h4 className="text-[11px] md:text-xs font-bold tracking-widest uppercase mb-6 md:mb-10 text-black">About</h4>
              <h3 className="text-3xl md:text-4xl lg:text-[42px] leading-snug md:leading-[1.2] text-black pr-4 lg:pr-12">
                Craftwood bridges Japanese precision and Scandinavian clarity, creating furniture that invites contemplation.
              </h3>
            </div>
            <div className="flex flex-col space-y-6 pt-0 md:pt-16 text-[15px] md:text-base text-black/80 leading-relaxed max-w-lg">
              <p>In the tension between emptiness and form, we find clarity. Each piece begins not with what we add, but with what we remove. Paring away until only essence remains.</p>
              <p>Japanese craft teaches patience. Scandinavian design demands honesty. We hold both truths: that beauty lives in the grain revealed, the joint perfected, the line unbroken. Wood does not hurry. Neither do we.</p>
            </div>
          </div>
        </section>

        {/* Bottom Section: Woodworking */}
        <section className="w-full px-4 lg:px-6 pb-24 md:pb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            <div className="flex flex-col justify-center order-2 md:order-1 lg:pl-12">
              <h4 className="text-lg md:text-xl font-bold uppercase tracking-tight mb-4 text-black">Form Follows Silence</h4>
              <p className="text-black/80 leading-relaxed text-[15px] md:text-base max-w-md">
                Every curve, every angle considered. Nothing arbitrary, nothing excessive. The wood speaks first, we listen, then shape what it was always meant to become.
              </p>
            </div>
            <div className="relative w-full aspect-square md:aspect-[4/5] bg-stone-200 order-1 md:order-2 overflow-hidden">
               <div className="absolute inset-0 bg-stone-300 transition-transform duration-700 hover:scale-[1.02] cursor-pointer"></div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
