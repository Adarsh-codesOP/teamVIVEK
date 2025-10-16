type Photo = { id: number; src: string; alt: string }

const photos: Photo[] = [
  {
    id: 1,
    src: "/pilinalike-traditional-tiger-dance-crowd-shot.jpg",
    alt: "Pilinalike traditional tiger dance crowd shot",
  },
  {
    id: 2,
    src: "/pilinalike-performers-stage-action.jpg",
    alt: "Pilinalike performers on stage in action",
  },
  {
    id: 3,
    src: "/pilinalike-drums-closeup-energy.jpg",
    alt: "Pilinalike drums close-up with energy",
  },
  {
    id: 4,
    src: "/pilinalike-festival-night-lights.jpg",
    alt: "Pilinalike festival under night lights",
  },
  {
    id: 5,
    src: "/pilinalike-tiger-face-paint-details.jpg",
    alt: "Pilinalike tiger face paint details",
  },
  {
    id: 6,
    src: "/pilinalike-audience-cheering-silhouettes.jpg",
    alt: "Pilinalike audience cheering silhouettes",
  },
]

export default function Gallery() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
      {photos.map((p) => (
        <figure
          key={p.id}
          className="overflow-hidden rounded-lg border border-[color-mix(in_oklab,var(--color-foreground)_10%,transparent)]"
        >
          <img
            src={p.src || "/placeholder.svg"}
            alt={p.alt}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
          />
        </figure>
      ))}
    </div>
  )
}
