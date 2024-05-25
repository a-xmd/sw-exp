import { Image } from '../../components/image'

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
        <div>test</div>
      </section>
    </main>
  )
}
