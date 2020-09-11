const staticAmehApp = "ameh-weather-app-v1"
const assets = [
  "/",
  "/index.html",
  "/style.css",
  "/script.js",
  "/clear.jpg",
  "/cloudy.jpg",
  "/default.jpg",
  "/rain.jpg",
  "/snow.jpg",
  "/storm.jpg",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticAmehApp).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })