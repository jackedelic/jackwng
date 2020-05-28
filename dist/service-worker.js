CACHE_NAME = "jackwng-v1";

self.addEventListener("install", function (event) {
  // Perform install steps
  console.log(`${CACHE_NAME} installed.`);
  // Fetch other pages' resources
  event.waitUntil(
    Promise.all([
      fetch("/index.html").then((res) => console.log("Fetched about.html")),
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
  event.respondWith(
    // check if we are able to fetch
    fetch(event.request)
      .then(function (response) {
        // If response does not meet these conditions, we dun wan to cache. We do nothing.
        if (!response || response.status !== 200 || response.type !== "basic") {
          return response;
        }
        var responseToCache = response.clone();
        caches.open(CACHE_NAME).then(function (cache) {
          cache.put(event.request, responseToCache);
        });
        return response;
      })
      .catch((err) => {
        // unable to fetch, so we get the resource from the cache, if possible.
        return caches.match(event.request).then((response) => {
          if (response) {
            return response;
          } else {
            throw new Error(
              "Unable to fetch fro server. Cache does not have the requested resource."
            );
          }
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
