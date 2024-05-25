import { useCallback, useEffect, useState } from 'react'
import { type ServiceWorkerCache } from '../../types'
import { CachesList } from '../../components/caches-list'
import { Countdown } from '../../components/countdown'

export const Caches = () => {
  const [storedCaches, setStoredCaches] = useState<ServiceWorkerCache>({})

  const getCaches = useCallback(async () => {
    const keys = await caches.keys()

    for (const key of keys) {
      const cache = await caches.open(key)
      const files = await cache.keys()
      setStoredCaches({ [key]: files.map((file) => file.url) })
    }
  }, [])

  useEffect(() => {
    ;(async () => {
      await getCaches()
    })()
  }, [])

  if (Object.keys(storedCaches).length) {
    return <CachesList list={storedCaches} />
  }

  return (
    <main className="mx-auto max-w-screen-md">
      <p>No cache found. Probably your first visit.</p>
      <p>
        Trying again in{' '}
        <Countdown
          startInSeconds={5}
          callback={async () => {
            await getCaches()
          }}
        />
      </p>
    </main>
  )
}
