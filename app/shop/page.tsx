export default function Shop() {
  const categories = [
    { name: "All", active: true },
    { name: "Sofas", active: false },
    { name: "Chairs", active: false },
    { name: "Beds", active: false },
    { name: "Tables", active: false },
    { name: "Storage", active: false },
  ];

  const products = [
    { id: 1, name: "Nordholm 3-Seater Sofa", price: "$ 1450.00" },
    { id: 2, name: "Kyōto Modular Sofa", price: "$ 1980.00" },
    { id: 3, name: "Arendal Loveseat", price: "$ 980.00" },
    { id: 4, name: "Soma Daybed Sofa", price: "$ 1250.00" },
    { id: 5, name: "Osaka Sectional Sofa", price: "$ 2450.00" },
    { id: 6, name: "Haven Lounge Chair", price: "$ 620.00" },
    { id: 7, name: "Sundby Side Table", price: "$ 220.00" },
    { id: 8, name: "Kyōto Extendable Table", price: "$ 1580.00" },
    { id: 9, name: "Fjord Wall Table", price: "$ 680.00" },
    { id: 10, name: "Kyōto Wardrobe", price: "$ 2050.00" },
    { id: 11, name: "Skara Shelf", price: "$ 850.00" },
    { id: 12, name: "Haven Sideboard", price: "$ 1150.00" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans pt-24 lg:pt-32">
      <main className="flex-1 w-full max-w-[1920px] mx-auto px-4 lg:px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pt-8 pb-4 border-b border-zinc-100 mb-8 gap-4">
          <h1 className="text-4xl md:text-5xl font-sans tracking-tight text-black">
            Shop
          </h1>
          <div className="flex items-center text-sm text-black/70 cursor-pointer hover:text-black transition-colors">
            <span>Sort by <span className="text-black font-medium ml-1">Default</span></span>
            <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row lg:items-start pb-24 md:pb-32 gap-8 lg:gap-16">
          
          {/* Sidebar Navigation */}
          <aside className="w-full lg:w-48 shrink-0">
            {/* Mobile Horizontal Scroll */}
            <div className="flex lg:hidden overflow-x-auto no-scrollbar space-x-6 pb-2 -mx-4 px-4 border-b border-zinc-50 mb-6">
              {categories.map((cat) => (
                <button
                  key={cat.name}
                  className={`whitespace-nowrap text-[15px] pb-2 border-b-2 transition-colors ${
                    cat.active ? "text-black border-black" : "text-black/40 border-transparent hover:text-black"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Desktop Vertical List */}
            <div className="hidden lg:flex flex-col space-y-5">
              {categories.map((cat) => (
                <button
                  key={cat.name}
                  className={`text-left text-[15px] transition-colors ${
                    cat.active ? "text-black font-medium" : "text-black/40 hover:text-black"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {products.map((product) => (
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

        </div>
      </main>
    </div>
  );
}
