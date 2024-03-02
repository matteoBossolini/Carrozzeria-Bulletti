
const sitemap = require('sitemap');
const hostname = 'https://www.bulletticarrozzeria.it';

const urls = [
  { url: '/', changefreq: 'monthly', priority: 1 },
  { url: '/carrozzeria', changefreq: 'annually', priority: 0.8 },
  { url: '/officina', changefreq: 'annually', priority: 0.8 },
  { url: '/altri_servizi', changefreq: 'annually', priority: 0.8 },
  { url: '/tecnologia_e_sostenibilità', changefreq: 'annually', priority: 0.5 },
  { url: '/contatti', changefreq: 'annually', priority: 0.5 },
  // Add additional pages here
];

const sitemapInstance = sitemap.createSitemap({
  hostname,
  urls,
});

const fs = require('fs');

// Write sitemap to public directory
fs.writeFileSync('./public/sitemap.xml', sitemapInstance.toString());