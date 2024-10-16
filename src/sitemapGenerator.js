// sitemapGenerator.js

const { SitemapStream, streamToPromise } = require('sitemap');
const fs = require('fs');

// Create a writable stream
const sitemapStream = new SitemapStream({ hostname: 'https://idown.in' });

// Define your routes
const routes = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
  // Add more routes as needed
];

// Write each route to the stream
routes.forEach(route => sitemapStream.write(route));

// End the stream
sitemapStream.end();

// Convert the stream to a string and write it to a file
streamToPromise(sitemapStream).then((data) => {
  fs.writeFileSync('./public/sitemap.xml', data.toString());
}).catch(console.error);