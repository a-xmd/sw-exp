import { Image } from '../../components/image'
import { useState } from 'react'
import { cn } from '../../utils'

const imageUrl1 = new URL(
  '../../assets/cat1.jpg?as=webp&width=800',
  // @ts-expect-error fix tsconfig
  import.meta.url,
)

const imageUrl2 = new URL(
  '../../assets/colombia1.jpg?as=webp&width=800',
  // @ts-expect-error fix tsconfig
  import.meta.url,
)

export const Home = () => {
  const [shouldIntercept, setShouldIntercept] = useState(false)
  const [jsonResponse, setJsonResponse] = useState(null)
  const [lastResponseTime, setLastResponseTime] = useState(null)

  return (
    <main className="mx-auto max-w-screen-md">
      <h1 className="mb-8 text-2xl font-bold">Service Worker Experiment</h1>
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-bold">Cached images</h2>
        <div className="flex gap-4">
          <Image
            image={{ src: imageUrl1.href, alt: 'alt for #1' }}
            href="#1"
            title="caption #1"
          />
          <Image
            image={{ src: imageUrl2.href, alt: 'alt for #2' }}
            href="#2"
            title="caption #2"
          />
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-bold">Intercepting fetch requests</h2>
        <p className="mb-8 leading-relaxed">
          Fetch some JSON from{' '}
          <a
            className="border-b-2 border-b-blue-800 text-blue-800"
            href="https://jsonplaceholder.typicode.com/todos/1"
          >
            JSONPlaceholder
          </a>{' '}
          and show the response. Check the network tab in devtools for the
          request url and response body. Fetching without intercepting in
          offline mode will give the same error message as visiting an uncached
          page when offline.
        </p>

        <div className="flex flex-col sm:flex-row sm:gap-4">
          <div className="sm:w-1/3">
            <label className="mb-4 flex cursor-pointer items-center gap-2">
              <input
                checked={shouldIntercept}
                className="h-5 w-5"
                type="checkbox"
                onChange={() => {
                  setShouldIntercept(!shouldIntercept)
                }}
              />
              <span>intercept request</span>
            </label>

            <button
              className="mb-4 w-full rounded bg-indigo-600 px-4 py-2 text-white"
              onClick={async () => {
                const res = await fetch(
                  'https://jsonplaceholder.typicode.com/todos/1',
                  {
                    headers: {
                      referer: window.location.href,
                      'x-intercept-fetch': shouldIntercept.toString(),
                    },
                  },
                )

                setJsonResponse(await res.text())
                setLastResponseTime(new Date().toLocaleTimeString())
              }}
            >
              fetch
            </button>
            <div className="mb-4 text-right text-sm">
              last response:{' '}
              {lastResponseTime ? (
                <span className="font-mono">{lastResponseTime}</span>
              ) : (
                'never'
              )}
            </div>
          </div>
          <div
            className={cn(
              'mb-8 min-h-60 rounded bg-indigo-100 p-8 text-sm sm:grow',
              {
                'flex items-center justify-center': !jsonResponse,
              },
            )}
          >
            {jsonResponse && <pre>{jsonResponse}</pre>}
            {!jsonResponse && (
              <div>Nothing fetched yet. Hit the fetch button.</div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
