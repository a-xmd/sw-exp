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

const Image = ({ src, alt }: { src: string; alt?: string }) => {
  return (
    <div className=" inline-flex w-full rounded bg-slate-200">
      <img src={src} alt={alt} className="aspect-4/3 w-full rounded" />
    </div>
  )
}

const Card = ({
  image,
  href,
  title,
}: {
  image: { alt: string; src: string }
  href: string
  title: string
}) => {
  return (
    <a href={href} className="group flex w-full flex-col gap-2">
      <Image src={image.src} alt={image.alt} />
      <div className="text-xl font-semibold group-hover:underline">{title}</div>
    </a>
  )
}

export const Home = () => {
  return (
    <main className="mx-auto max-w-screen-md">
      <h1 className="mb-8 text-2xl font-bold">Service Worker Experiment</h1>
      <section className="flex gap-4">
        <Card
          image={{ src: imageUrl1.href, alt: 'alt for #1' }}
          href="#1"
          title="Link #1"
        />
        <Card
          image={{ src: imageUrl2.href, alt: 'alt for #2' }}
          href="#2"
          title="Link #2"
        />
      </section>
    </main>
  )
}
