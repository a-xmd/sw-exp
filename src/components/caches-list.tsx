import { type FC } from 'react'
import { type ServiceWorkerCache } from '../types'

interface CachesProps {
  list: ServiceWorkerCache
}

export const CachesList: FC<CachesProps> = ({ list }) => {
  return (
    <main className="mx-auto max-w-screen-md">
      <h1 className="mb-8 text-2xl font-bold">Caches</h1>
      {Object.keys(list).map((key) => {
        return (
          <div key={key} className="font-semibold">
            <h3 className="mb-1">
              cache <span className="font-mono">{key}</span>
            </h3>
            <ul>
              {list[key].map((file) => (
                <li className="ml-4 list-disc font-mono text-sm" key={file}>
                  <a href={file} className="text-blue-700">
                    {file}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )
      })}
    </main>
  )
}
