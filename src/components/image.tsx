export const Image = ({
  image,
  title,
}: {
  image: { alt: string; src: string }
  href: string
  title: string
}) => {
  return (
    <figure className="flex w-full flex-col gap-2">
      <img
        src={image.src}
        alt={image.alt}
        className="aspect-4/3 rounded bg-slate-200"
      />
      <figcaption className="w-fit self-end text-sm">{title}</figcaption>
    </figure>
  )
}
