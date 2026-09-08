"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

// ... [SVG Components remain unchanged] ...

const SearchIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const MenuIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="4" y1="9" x2="20" y2="9" />
    <line x1="4" y1="15" x2="20" y2="15" />
  </svg>
);

const CloseIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= window.innerHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    if (isHomePage) {
      window.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll();
    } else {
      setIsScrolled(true); // Always solid on other pages
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHomePage]);

  useEffect(() => {
    if (isMenuOpen || isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen, isCartOpen]);

  // Determine styles based on state
  // On home page, it starts transparent and becomes white after scroll. 
  // On other pages, it is always white.
  const isWhiteBg = (isScrolled || !isHomePage) && !isMenuOpen;
  const navTextColor = isWhiteBg ? "text-black" : "text-white";
  const navBgColor = isWhiteBg ? "bg-white" : "bg-transparent";

  return (
    <>
      <motion.nav 
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-[45] transition-colors duration-300 ${navBgColor} ${navTextColor}`}
      >
        <div className="w-full px-4 lg:px-6 py-3 flex justify-between items-center">
          
          {/* Left Navigation (Desktop only) */}
          <div className="hidden lg:flex items-center space-x-6 text-[15px] flex-1">
            <Link href="/shop" className="hover:opacity-70 transition-opacity">
              Shop
            </Link>
            <Link href="/collections" className="hover:opacity-70 transition-opacity">
              Collections
            </Link>
            <Link href="/about" className="hover:opacity-70 transition-opacity">
              About
            </Link>
          </div>

          {/* Logo */}
          <div className="flex-1 flex justify-start lg:justify-center">
            <Link
              href="/"
              className="text-[28px] font-serif tracking-wide"
              onClick={() => setIsMenuOpen(false)}
            >
              pátákó
            </Link>
          </div>

          {/* Right Navigation */}
          <div className="flex items-center justify-end space-x-4 lg:space-x-6 text-[15px] flex-1">
            <button aria-label="Search" className="hover:opacity-70 transition-opacity">
              <SearchIcon className="w-5 h-5" />
            </button>
            
            <Link href="/login" className="hover:opacity-70 transition-opacity hidden sm:block">
              Login
            </Link>
            
            <Link href="/wishlist" className="hover:opacity-70 transition-opacity hidden sm:block">
              Wishlist
            </Link>
            
            <button 
              onClick={() => setIsCartOpen(true)}
              className="hover:opacity-70 transition-opacity flex items-start hidden sm:flex"
            >
              Cart
              <span className="text-[10px] ml-0.5 leading-none mt-0.5">0</span>
            </button>

            {/* Hamburger Icon - Hidden on desktop (lg) */}
            <button
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="hover:opacity-70 transition-opacity ml-3 lg:hidden"
            >
              {isMenuOpen ? (
                <CloseIcon className="w-6 h-6" />
              ) : (
                <MenuIcon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Full Screen Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black z-40 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="max-w-[1920px] mx-auto px-8 h-full flex flex-col justify-start pt-32">
          {/* Mobile only links */}
          <ul className="flex flex-col space-y-6 text-white text-[15px] sm:hidden mb-12">
              <li>
                <Link href="/login" onClick={() => setIsMenuOpen(false)}>Login</Link>
              </li>
              <li>
                <Link href="/wishlist" onClick={() => setIsMenuOpen(false)}>Wishlist</Link>
              </li>
              <li>
                <button onClick={() => { setIsCartOpen(true); setIsMenuOpen(false); }} className="hover:opacity-70">
                  Cart (0)
                </button>
              </li>
          </ul>
          
          <ul className="flex flex-col space-y-8 text-white text-3xl">
            <li>
              <Link href="/shop" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-400 transition-colors">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/collections" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-400 transition-colors">
                Collections
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-400 transition-colors">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Cart Drawer Overlay */}
      <div 
        className={`fixed inset-0 bg-black/40 z-50 transition-opacity duration-300 ${
          isCartOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Cart Drawer Panel */}
      <div 
        className={`fixed inset-y-0 right-0 w-full lg:w-[420px] xl:w-[480px] bg-black z-[60] transform transition-transform duration-300 ease-in-out flex flex-col ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Cart Header */}
        <div className="flex justify-between items-center p-6 lg:p-8">
          <h2 className="text-white font-bold text-sm tracking-widest uppercase">Cart</h2>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="text-white hover:opacity-70 transition-opacity"
            aria-label="Close cart"
          >
            <CloseIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Cart Body */}
        <div className="flex-1 flex items-center justify-center">
          <p className="text-white/80 text-sm">Your cart is empty</p>
        </div>
      </div>
    </>
  );
}
