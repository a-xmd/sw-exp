import './react-root'

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register(
    // @ts-ignore
    new URL('service-worker.ts?q=1', import.meta.url),
    { type: 'module' },
  )
}
