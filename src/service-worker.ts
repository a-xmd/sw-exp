import { manifest, version } from '@parcel/service-worker'

async function install() {
  const cache = await caches.open(version)
  await cache.addAll([...manifest, '/', '/about', '/sample'])
}

self.addEventListener('install', async (event: ExtendableEvent) => {
  console.log('sw installed', { manifest, version })
  event.waitUntil(install())
})

async function activate() {
  const keys = await caches.keys()
  await Promise.all(keys.map((key) => key !== version && caches.delete(key)))
}

// Activate the Serivce Worker
self.addEventListener('activate', async (event: ExtendableEvent) => {
  event.waitUntil(activate())
})

async function cacheFirst(event: FetchEvent): Promise<Response> {
  const cache = await caches.open(version)
  const cachedResponse = await cache.match(event.request)

  if (cachedResponse) {
    return cachedResponse
  }

  try {
    const response = await fetch(event.request)
    return response
  } catch (err) {
    // parcel by default adds params to an image, probably because of their
    // image optimization (https://parceljs.org/recipes/image/).
    // strip the params and fetch the image url from cache.
    // example image url with params:
    // http://localhost:1234/cat1.ad583342.jpg?1716632336849
    if (event.request.url.includes('.webp')) {
      const imageUrlWithoutParams = event.request.url.split('?')[0]
      console.log({ imageUrlWithoutParams })

      const cachedImage = await cache.match(imageUrlWithoutParams)
      if (cachedImage) {
        return cachedImage
      }
    }

    return new Response('does not work offline 🥺')
  }
}

self.addEventListener('fetch', (event: FetchEvent) => {
  event.respondWith(cacheFirst(event))
})
