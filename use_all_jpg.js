const fs = require('fs');

function fixFile(filePath) {
  let c = fs.readFileSync(filePath, 'utf-8');
  
  // Replace complex interpolations
  c = c.replace(/\.\$\{\(\(product\.id \% 11\) \+ 1\) \<\= 3 \? 'jpg' : 'avif'\}/g, '.jpg');
  c = c.replace(/\.\$\{product\.id \<\= 3 \? 'jpg' : 'avif'\}/g, '.jpg');
  
  // Just in case any raw .avif are left
  c = c.replace(/\.avif/g, '.jpg');

  fs.writeFileSync(filePath, c);
}

fixFile('app/page.tsx');
fixFile('app/shop/page.tsx');
fixFile('app/wishlist/page.tsx');
fixFile('app/about/page.tsx');
