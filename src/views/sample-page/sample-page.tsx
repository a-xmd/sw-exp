// @ts-ignore @todo fix tsconfig
const imageUrl1 = new URL('../../assets/cat1.jpg', import.meta.url)
// @ts-ignore @todo fix tsconfig
const imageUrl2 = new URL('../../assets/colombia1.jpg', import.meta.url)

const Image = ({ src, alt }: { src: string; alt?: string }) => {
  return (
    <div className=" inline-flex w-full bg-slate-200">
      <img src={src} alt={alt} className="aspect-4/3 w-full rounded" />
    </div>
  )
}

const Card = ({
  image,
  href,
}: {
  image: { alt: string; src: string }
  href: string
}) => {
  return (
    <a href={href} className="inline-flex w-full">
      <Image src={image.src} alt={image.alt} />
    </a>
  )
}

export const SamplePage = () => {
  return (
    <main className="mx-auto max-w-screen-md">
      <section className="flex gap-4">
        {/* @todo: add visually hidden heading!  */}
        <Card image={{ src: imageUrl1.href, alt: 'alt for #1' }} href="#1" />
        <Card image={{ src: imageUrl2.href, alt: 'alt for #2' }} href="#2" />
      </section>
    </main>
  )
}
