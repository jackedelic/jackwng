CACHE_NAME = "jackwng-v1";

self.addEventListener("install", function (event) {
  // Perform install steps
  console.log(`${CACHE_NAME} installed.`);
  // Fetch other pages' resources
  event.waitUntil(
    Promise.all([
      fetch("/about.html").then((res) => console.log("Fetched about.html")),
      fetch("/work.html").then((res) => console.log("Fetched work.html")),
      fetch("/contact.html").then((res) => console.log("Fetched contact.html")),
    ])
  );
});
//s
//s
// Triggered only when the user makes subsequent network request
self.addEventListener("fetch", (event) => {
  console.log("fetch triggered");
  console.log("event request:");
  console.log(event.request);
  event.respondWith(
    // Promise of a response
    // intercepts request on browser
    caches.match(event.request).then((response) => {
      if (response) {
        console.log("cache hit");
        return response;
      }
      // request not yet in cache
      // resumes to make a network request
      return fetch(event.request).then(function (response) {
        // Check if we received a valid response
        if (!response || response.status !== 200 || response.type !== "basic") {
          return response;
        }

        var responseToCache = response.clone();

        caches.open(CACHE_NAME).then(function (cache) {
          cache.put(event.request, responseToCache);
        });

        return response;
      });
    })
  );
});

// Remove old caches
self.addEventListener("activate", function (event) {
  var cacheWhitelist = ["jackwng-v1"];
  console.log("activate triggered");
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
