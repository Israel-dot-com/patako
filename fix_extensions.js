const fs = require('fs');

function fixPage() {
  let c = fs.readFileSync('app/page.tsx', 'utf-8');
  c = c.replace(/src=\{\`\/src\/\$\{product\.id\}\.avif\`\}/g, "src={`/src/${product.id}.${product.id <= 3 ? 'jpg' : 'avif'}`}");
  c = c.replace(/src=\{\`\/src\/\$\{\(product\.id \% 11\) \+ 1\}\.avif\`\}/g, "src={`/src/${(product.id % 11) + 1}.${((product.id % 11) + 1) <= 3 ? 'jpg' : 'avif'}`}");
  fs.writeFileSync('app/page.tsx', c);
}

function fixShop() {
  let c = fs.readFileSync('app/shop/page.tsx', 'utf-8');
  c = c.replace(/src=\{\`\/src\/\$\{\(product\.id \% 11\) \+ 1\}\.avif\`\}/g, "src={`/src/${(product.id % 11) + 1}.${((product.id % 11) + 1) <= 3 ? 'jpg' : 'avif'}`}");
  fs.writeFileSync('app/shop/page.tsx', c);
}

function fixWishlist() {
  let c = fs.readFileSync('app/wishlist/page.tsx', 'utf-8');
  c = c.replace(/src=\{\`\/src\/\$\{\(product\.id \% 11\) \+ 1\}\.avif\`\}/g, "src={`/src/${(product.id % 11) + 1}.${((product.id % 11) + 1) <= 3 ? 'jpg' : 'avif'}`}");
  fs.writeFileSync('app/wishlist/page.tsx', c);
}

fixPage();
fixShop();
fixWishlist();
