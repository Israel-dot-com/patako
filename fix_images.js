const fs = require('fs');

function fixPage() {
  let c = fs.readFileSync('app/page.tsx', 'utf-8');
  // Hero Image
  c = c.replace(/src="\/hero\.avif"[\s\S]*?quality=\{100\}/, 'src="/hero.avif"\n            alt="Ochre Elements Furniture"\n            fill\n            priority\n            sizes="100vw"\n            className="object-cover"\n            quality={100}');
  // Minimal Living grid
  c = c.replace(
    /className="object-cover transition-transform duration-700 group-hover:scale-105" \/>/g,
    'sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />'
  );
  // Alternating Features
  c = c.replace(
    /className="object-cover transition-transform duration-700 hover:scale-\[1.02\] cursor-pointer" \/>/g,
    'sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-700 hover:scale-[1.02] cursor-pointer" />'
  );
  // New Arrivals
  c = c.replace(
    /className="object-cover transition-transform duration-700 group-hover:scale-\[1.03\]" \/>/g,
    'sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />'
  );
  // Replace .avif with .jpg for ids 1, 2, 3
  c = c.replace(/\/src\/1\.avif/g, '/src/1.jpg');
  c = c.replace(/\/src\/2\.avif/g, '/src/2.jpg');
  c = c.replace(/\/src\/3\.avif/g, '/src/3.jpg');
  
  fs.writeFileSync('app/page.tsx', c);
}

function fixShop() {
  let c = fs.readFileSync('app/shop/page.tsx', 'utf-8');
  c = c.replace(
    /className="object-cover transition-transform duration-700 group-hover:scale-\[1.03\]" \/>/g,
    'sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />'
  );
  c = c.replace(/\/src\/1\.avif/g, '/src/1.jpg');
  c = c.replace(/\/src\/2\.avif/g, '/src/2.jpg');
  c = c.replace(/\/src\/3\.avif/g, '/src/3.jpg');
  fs.writeFileSync('app/shop/page.tsx', c);
}

function fixWishlist() {
  let c = fs.readFileSync('app/wishlist/page.tsx', 'utf-8');
  c = c.replace(
    /className="object-cover transition-transform duration-700 group-hover:scale-\[1.03\]" \/>/g,
    'sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />'
  );
  c = c.replace(/\/src\/1\.avif/g, '/src/1.jpg');
  c = c.replace(/\/src\/2\.avif/g, '/src/2.jpg');
  c = c.replace(/\/src\/3\.avif/g, '/src/3.jpg');
  fs.writeFileSync('app/wishlist/page.tsx', c);
}

function fixAbout() {
  let c = fs.readFileSync('app/about/page.tsx', 'utf-8');
  c = c.replace(
    /alt="Craftwood Chair" fill className=/g,
    'alt="Craftwood Chair" fill sizes="(max-width: 768px) 100vw, 50vw" className='
  );
  c = c.replace(
    /alt="Craftwood Furniture" fill className=/g,
    'alt="Craftwood Furniture" fill sizes="100vw" className='
  );
  c = c.replace(
    /alt="Crafting Process" fill className=/g,
    'alt="Crafting Process" fill sizes="(max-width: 768px) 100vw, 50vw" className='
  );
  c = c.replace(/\/src\/1\.avif/g, '/src/1.jpg');
  c = c.replace(/\/src\/2\.avif/g, '/src/2.jpg');
  c = c.replace(/\/src\/3\.avif/g, '/src/3.jpg');
  fs.writeFileSync('app/about/page.tsx', c);
}

fixPage();
fixShop();
fixWishlist();
fixAbout();
