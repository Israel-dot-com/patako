const fs = require('fs');

// 1. Add aria-labels to heart buttons
function addAriaLabels(file) {
  let c = fs.readFileSync(file, 'utf-8');
  c = c.replace(
    /<button className="absolute top-4 right-4 z-10 text-white hover:opacity-70 transition-opacity">/g,
    '<button aria-label="Add to wishlist" className="absolute top-4 right-4 z-10 text-white hover:opacity-70 transition-opacity">'
  );
  
  // Fix contrast on prices
  c = c.replace(/text-zinc-500 text-sm font-serif/g, 'text-zinc-600 text-sm font-serif');
  
  fs.writeFileSync(file, c);
}

['app/page.tsx', 'app/shop/page.tsx', 'app/wishlist/page.tsx'].forEach(addAriaLabels);

// 2. Fix Header Hierarchy in app/page.tsx
let page = fs.readFileSync('app/page.tsx', 'utf-8');
// Fix "The Quiet Revolution of Less"
page = page.replace(
  /<h3 className="text-\[13px\] font-bold tracking-widest uppercase mb-4 text-black">The Quiet Revolution of Less<\/h3>/,
  '<p className="text-[13px] font-bold tracking-widest uppercase mb-4 text-black">The Quiet Revolution of Less</p>'
);
// Fix "Crimson Forms"
page = page.replace(
  /<h3 className="text-\[13px\] font-bold tracking-widest uppercase mb-12 md:mb-0 text-black">Crimson Forms<\/h3>/,
  '<p className="text-[13px] font-bold tracking-widest uppercase mb-12 md:mb-0 text-black">Crimson Forms</p>'
);
// Fix overlay contrast
page = page.replace(/bg-black\/10/, 'bg-black/30');
fs.writeFileSync('app/page.tsx', page);

// 3. Fix Header Hierarchy in app/about/page.tsx
let about = fs.readFileSync('app/about/page.tsx', 'utf-8');
// Fix "About" H4 to p
about = about.replace(
  /<h4 className="text-\[11px\] md:text-xs font-bold tracking-widest uppercase mb-6 md:mb-10 text-black">About<\/h4>/,
  '<p className="text-[11px] md:text-xs font-bold tracking-widest uppercase mb-6 md:mb-10 text-black">About</p>'
);
// Fix "Form Follows Silence" H4 to H2
about = about.replace(
  /<h4 className="text-lg md:text-xl font-bold uppercase tracking-tight mb-4 text-black">Form Follows Silence<\/h4>/,
  '<h2 className="text-lg md:text-xl font-bold uppercase tracking-tight mb-4 text-black">Form Follows Silence</h2>'
);
fs.writeFileSync('app/about/page.tsx', about);

// 4. Fix Contrast in Footer.tsx
let footer = fs.readFileSync('app/components/Footer.tsx', 'utf-8');
footer = footer.replace(/text-zinc-400/g, 'text-zinc-600');
footer = footer.replace(/text-zinc-500/g, 'text-zinc-600'); // placeholder and text
fs.writeFileSync('app/components/Footer.tsx', footer);

// 5. Fix Contrast in Shop sidebar
let shop = fs.readFileSync('app/shop/page.tsx', 'utf-8');
shop = shop.replace(/text-black\/40/g, 'text-black/60');
fs.writeFileSync('app/shop/page.tsx', shop);

