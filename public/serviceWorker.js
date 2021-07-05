"use strict";

// const proofCacheName = "pwaCacheV1";
// const proofCacheFiles = [
//   "client/components/AllProducts.js",
//   "client/store/allProducts.js",
//   "client/store/index.js",
//   "client/App.js",
//   "client/index.js",
//   "client/Routes.js",
//   "client/swRegister.js",
//   "public/favicon.ico",
//   "public/index.html",
//   "public/style.css",
//   "script/seed.js",
//   "server/api/index.js",
//   "server/api/products.js",
//   "server/api/users.js",
//   "server/db/models/Product.js",
//   "server/db/models/User.js",
//   "server/db/db.js",
//   "server/db/index.js",
//   "server/app.js",
//   "server/index.js",
// ];
//Listen to install and activate events
self.addEventListener("install", (event) => {
  console.log("From SW: Install Event", event);
  // This is the best place to cache (install state & installing
  // event listener)
  // const preCache = async () => {
  //   const cache = await caches.open(proofCacheName);
  //   return cache.addAll(proofCacheFiles);
  // };
  // event.waitUntil(preCache());
});

self.addEventListener("activate", (event) => {
  console.log("From SW: Active Event", event);
});
