export default function Wishlist() {
  const wishlistItems = [
    { id: 1, name: "Nordholm 3-Seater Sofa", price: "$ 1450.00" },
    { id: 2, name: "Kyōto Modular Sofa", price: "$ 1980.00" },
    { id: 3, name: "Arendal Loveseat", price: "$ 980.00" },
    { id: 4, name: "Soma Daybed Sofa", price: "$ 1250.00" },
    { id: 5, name: "Sundby Side Table", price: "$ 220.00" },
    { id: 6, name: "Kyōto Extendable Table", price: "$ 1580.00" },
    { id: 7, name: "Fjord Wall Table", price: "$ 680.00" },
    { id: 8, name: "Oslo Platform Bed", price: "$ 1450.00" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans pt-32">
      <main className="flex-1 w-full">
        
        {/* Page Header */}
        <div className="w-full flex items-center justify-center py-12 md:py-16">
          <h1 className="text-black text-4xl md:text-5xl lg:text-6xl font-sans tracking-tight">
            Wishlist
          </h1>
        </div>

        {/* Product Grid */}
        <div className="w-full px-4 lg:px-6 pb-24 md:pb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {wishlistItems.map((product) => (
              <div key={product.id} className="group cursor-pointer flex flex-col">
                
                {/* Image Container */}
                <div className="relative w-full aspect-[4/5] bg-zinc-200 overflow-hidden mb-4">
                  {/* Heart Icon Overlay */}
                  <button className="absolute top-4 right-4 z-10 text-white hover:opacity-70 transition-opacity">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  </button>
                  
                  {/* Placeholder for image */}
                  <div className="absolute inset-0 bg-stone-200 transition-transform duration-700 group-hover:scale-[1.03]"></div>
                </div>

                {/* Product Info */}
                <div className="flex flex-col">
                  <h3 className="text-black text-[15px] mb-1">{product.name}</h3>
                  <p className="text-zinc-500 text-sm font-serif">{product.price}</p>
                </div>

              </div>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
}
