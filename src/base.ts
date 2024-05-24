import './react-root'

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register(
    // @ts-ignore
    new URL('service-worker.ts', import.meta.url),
    { type: 'module' },
  )
}
