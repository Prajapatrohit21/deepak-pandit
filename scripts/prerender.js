// ============================================================
// prerender.js — Post-build static route generator for GitHub Pages SPA
// Generates 404.html and static route folders ensuring clean HTTP 200
// responses without flashing unstyled/foreign static tables to visitors.
// ============================================================

import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');
const indexPath = path.join(distDir, 'index.html');

if (!fs.existsSync(indexPath)) {
  console.error('dist/index.html not found. Run vite build first.');
  process.exit(1);
}

let html = fs.readFileSync(indexPath, 'utf-8');

// Generate dist/404.html with the same bundle for GitHub Pages SPA fallback
const notFoundPath = path.join(distDir, '404.html');
fs.writeFileSync(notFoundPath, html, 'utf-8');
console.log('✓ Successfully created dist/404.html fallback for GitHub Pages');

// Static route folders generation for GitHub Pages (ensures HTTP 200 on all routes)
const staticRoutes = [
  'about',
  'services',
  'services/mangal-dosh-puja',
  'services/kaal-sarp-dosh',
  'services/pitru-dosh-nivaran',
  'services/navgrah-shanti',
  'services/mahamrityunjay',
  'services/rudrabhishek',
  'services/vastu-shanti',
  'services/navchandi-shatchandi',
  'kundli-analysis',
  'gallery',
  'testimonials',
  'booking',
  'contact',
  'blog',
  'blog/mangal-dosh-kya-hai',
  'blog/kaal-sarp-dosh-lakshan',
  'blog/pitru-dosh-karan-prabhav',
  'blog/navgrah-shanti-puja-ujjain',
  'blog/rudrabhishek-puja-mahakal-ujjain',
  'blog/mahamrityunjay-mantra-jaap-ujjain',
  'blog/mangalnath-mandir-ujjain',
  'blog/bahar-ke-shahar-se-ujjain-puja-booking',
  'blog/vastu-shanti-griha-pravesh-ujjain',
  'blog/kundli-vishleshan-kaise-hoti-hai',
  'mangalnath-mandir-ujjain',
  'bahar-ke-shahar-puja-booking',
  'terms-conditions',
  'privacy-policy',
  'disclaimer'
];

staticRoutes.forEach(route => {
  const routeDir = path.join(distDir, route);
  fs.mkdirSync(routeDir, { recursive: true });
  fs.writeFileSync(path.join(routeDir, 'index.html'), html, 'utf-8');
});
console.log('✓ Successfully generated static HTML folders for all routes (GitHub Pages 200 OK)');
