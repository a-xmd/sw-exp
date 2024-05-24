import { type FC } from 'react'
import { type ServiceWorkerCache } from '../types'

interface CachesProps {
  list: ServiceWorkerCache
}

export const Caches: FC<CachesProps> = ({ list }) => {
  return (
    <div>
      <h2 className="mb-2 text-lg font-bold">existing caches</h2>
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
    </div>
  )
}
