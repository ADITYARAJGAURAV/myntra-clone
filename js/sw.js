// sw.js - Service Worker File

const CACHE_NAME = 'my-site-cache-v1';
const ASSETS_TO_CACHE = [
    

'C:\COADING\web scripting\myntra clone\css',
'C:\COADING\web scripting\myntra clone\html',
'C:\COADING\web scripting\myntra clone\js',
'C:\COADING\web scripting\myntra clone\css\address.css',
'C:\COADING\web scripting\myntra clone\css\bag.css',
'C:\COADING\web scripting\myntra clone\css\home.css',
'C:\COADING\web scripting\myntra clone\css\login.css',
'C:\COADING\web scripting\myntra clone\css\mens.css',
'C:\COADING\web scripting\myntra clone\css\moda.css',
'C:\COADING\web scripting\myntra clone\css\payment.css',
'C:\COADING\web scripting\myntra clone\css\products.css',
'C:\COADING\web scripting\myntra clone\css\signup.css',
'C:\COADING\web scripting\myntra clone\css\successfulpayment.css',
'C:\COADING\web scripting\myntra clone\html\address.html',
'C:\COADING\web scripting\myntra clone\html\bag.html',
'C:\COADING\web scripting\myntra clone\html\home.html',
'C:\COADING\web scripting\myntra clone\html\login.html',
'C:\COADING\web scripting\myntra clone\html\mens.html',
'C:\COADING\web scripting\myntra clone\html\moda.html',
'C:\COADING\web scripting\myntra clone\html\payment.html',
'C:\COADING\web scripting\myntra clone\html\products.html',
'C:\COADING\web scripting\myntra clone\html\signin.html',
'C:\COADING\web scripting\myntra clone\html\successfulpayment.html',
'C:\COADING\web scripting\myntra clone\js\address.js',
'C:\COADING\web scripting\myntra clone\js\allfiles.js',
'C:\COADING\web scripting\myntra clone\js\bag.js',
'C:\COADING\web scripting\myntra clone\js\home.js',
'C:\COADING\web scripting\myntra clone\js\login.js',
'C:\COADING\web scripting\myntra clone\js\mens.js',
'C:\COADING\web scripting\myntra clone\js\moda.js',
'C:\COADING\web scripting\myntra clone\js\payment.js',
'C:\COADING\web scripting\myntra clone\js\product.js',
'C:\COADING\web scripting\myntra clone\js\signin.js'
  ];

// Install event - caches important files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(ASSETS_TO_CACHE);
      })
  );
});

// Fetch event - serves cached content when available
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        // Not in cache - fetch from network
        return fetch(event.request);
      })
  );
});