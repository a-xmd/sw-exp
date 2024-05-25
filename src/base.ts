import './react-root'

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register(
    // @ts-expect-error fix tsconfig
    new URL('service-worker.ts', import.meta.url),
    { type: 'module' },
  )
}
