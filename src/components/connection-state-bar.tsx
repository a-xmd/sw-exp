import { useEffect, useState } from 'react'
import { cn } from '../utils'

export const ConnectionStateBar = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine)
  function offlineHandler() {
    setIsOnline(false)
  }

  function onlineHandler() {
    setIsOnline(true)
  }

  useEffect(() => {
    window.addEventListener('offline', offlineHandler)
    window.addEventListener('online', onlineHandler)

    return () => {
      window.removeEventListener('offline', offlineHandler)
      window.removeEventListener('online', onlineHandler)
    }
  }, [])

  return (
    <div
      className={cn('flex justify-center border-b ', {
        'bg-green-300 text-green-900': isOnline,
        'bg-red-300 text-red-900': !isOnline,
      })}
    >
      <div className=" flex max-w-screen-md items-center gap-1.5 p-4 md:mx-auto">
        <div className="h-3 w-3 rounded-full bg-current"></div>
        <span className="font-bold">{isOnline ? 'online' : 'offline'}</span>
      </div>
    </div>
  )
}
