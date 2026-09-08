"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-white px-4 lg:px-6 py-16 lg:py-24 border-t border-zinc-100 mt-auto">
      <div className="max-w-[1920px] mx-auto flex flex-col">
        
        {/* Massive Logo */}
        <div className="mb-12 lg:mb-20">
          <h2 className="text-[18vw] sm:text-[15vw] lg:text-[12vw] xl:text-[14rem] font-serif leading-none tracking-tight text-black">
            pátákó
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row justify-between lg:items-start gap-16 lg:gap-8">
          
          {/* Left Side: Mission & Mobile Links (on mobile, links come after mission, before newsletter) */}
          <div className="flex flex-col gap-12 lg:w-5/12 xl:w-1/3">
            <p className="text-black/80 text-[15px] sm:text-base leading-relaxed max-w-md">
              pátákó exists to bring calm design and natural warmth into modern homes through furniture crafted with balance, purpose, and quiet beauty.
            </p>

            {/* Links Grid - Visible here on Mobile, hidden on Desktop */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 lg:hidden">
              <div className="flex flex-col space-y-3 sm:space-y-4 text-[15px]">
                <h4 className="text-[11px] sm:text-xs font-semibold text-zinc-600 uppercase tracking-widest mb-1 sm:mb-2">Company</h4>
                <Link href="/about" className="text-black hover:opacity-70 transition-opacity">About</Link>
                <Link href="/faqs" className="text-black hover:opacity-70 transition-opacity">FAQs</Link>
                <Link href="/contact" className="text-black hover:opacity-70 transition-opacity">Contact</Link>
              </div>
              
              <div className="flex flex-col space-y-3 sm:space-y-4 text-[15px]">
                <h4 className="text-[11px] sm:text-xs font-semibold text-zinc-600 uppercase tracking-widest mb-1 sm:mb-2">Legal</h4>
                <Link href="/terms" className="text-black hover:opacity-70 transition-opacity">Terms of Service</Link>
                <Link href="/returns" className="text-black hover:opacity-70 transition-opacity">Return Policy</Link>
                <Link href="/privacy" className="text-black hover:opacity-70 transition-opacity">Privacy Policy</Link>
              </div>
              
              <div className="flex flex-col space-y-3 sm:space-y-4 text-[15px]">
                <h4 className="text-[11px] sm:text-xs font-semibold text-zinc-600 uppercase tracking-widest mb-1 sm:mb-2">Socials</h4>
                <a href="#" className="text-black hover:opacity-70 transition-opacity">Instagram</a>
                <a href="#" className="text-black hover:opacity-70 transition-opacity">Twitter</a>
                <a href="#" className="text-black hover:opacity-70 transition-opacity">Threads</a>
              </div>
            </div>

            {/* Newsletter */}
            <div className="flex flex-col mt-4 lg:mt-12">
              <h4 className="text-[13px] font-bold text-black uppercase tracking-widest mb-6">
                Sign up to our newsletter
              </h4>
              <form className="flex w-full max-w-md mb-4 border-b border-zinc-200" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="flex-1 bg-transparent py-3 px-2 outline-none text-[15px] placeholder:text-zinc-600"
                  required
                />
                <button 
                  type="submit" 
                  className="bg-black text-white px-8 py-3 text-[15px] hover:bg-black/80 transition-colors"
                >
                  Sign up
                </button>
              </form>
              <p className="text-zinc-600 text-[13px] leading-relaxed max-w-md">
                Join our list to receive new collections, design stories, and product launches from pátákó. Thoughtful pieces, serene spaces, and crafted living delivered to your inbox.
              </p>
            </div>
          </div>

          {/* Right Side: Links Grid - Visible on Desktop, hidden on Mobile */}
          <div className="hidden lg:grid grid-cols-3 gap-16 xl:gap-24 lg:w-1/2 justify-end">
            <div className="flex flex-col space-y-4 text-[15px]">
              <h4 className="text-xs font-semibold text-zinc-600 uppercase tracking-widest mb-2">Company</h4>
              <Link href="/about" className="text-black hover:opacity-70 transition-opacity">About</Link>
              <Link href="/faqs" className="text-black hover:opacity-70 transition-opacity">FAQs</Link>
              <Link href="/contact" className="text-black hover:opacity-70 transition-opacity">Contact</Link>
            </div>
            
            <div className="flex flex-col space-y-4 text-[15px]">
              <h4 className="text-xs font-semibold text-zinc-600 uppercase tracking-widest mb-2">Legal</h4>
              <Link href="/terms" className="text-black hover:opacity-70 transition-opacity">Terms of Service</Link>
              <Link href="/returns" className="text-black hover:opacity-70 transition-opacity">Return Policy</Link>
              <Link href="/privacy" className="text-black hover:opacity-70 transition-opacity">Privacy Policy</Link>
            </div>
            
            <div className="flex flex-col space-y-4 text-[15px]">
              <h4 className="text-xs font-semibold text-zinc-600 uppercase tracking-widest mb-2">Socials</h4>
              <a href="#" className="text-black hover:opacity-70 transition-opacity">Instagram</a>
              <a href="#" className="text-black hover:opacity-70 transition-opacity">Twitter</a>
              <a href="#" className="text-black hover:opacity-70 transition-opacity">Threads</a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
