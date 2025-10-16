import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Instagram } from "lucide-react"
import Navbar from "@/components/navbar"
import Countdown from "@/components/countdown"
import RollingGallery from "@/components/RollingGallery"

const sponsors = [
  { name: "Sponsor One", logo: "/images/sponsors/logo-1.jpg" },
  { name: "Sponsor Two", logo: "/images/sponsors/logo-2.jpg" },
  { name: "Sponsor Three", logo: "/images/sponsors/logo-3.jpg" },
  { name: "Sponsor Four", logo: "/images/sponsors/logo-4.jpg" },
  { name: "Sponsor Five", logo: "/images/sponsors/logo-5.jpg" },
  { name: "Sponsor Six", logo: "/images/sponsors/logo-6.jpg" },
  { name: "Sponsor Six", logo: "/images/sponsors/logo-6.jpg" },
  { name: "Sponsor Six", logo: "/images/sponsors/logo-6.jpg" },
  { name: "Sponsor Six", logo: "/images/sponsors/logo-6.jpg" },
  // Add more sponsors by appending new objects here:
  // { name: "Your New Sponsor", logo: "/images/sponsors/your-logo.jpg" },
]

export default function Home() {
  return (
    <main className="min-h-dvh">
      <Navbar />

      {/* Hero */}
      <section
        id="home"
        className="relative isolate w-full border-b border-border bg-background/30 backdrop-blur-sm overflow-hidden section"
      >
        <div className="relative z-10 mx-auto max-w-6xl px-4">
          <div className="flex flex-col items-center text-center">
            {/* Secondary strapline (priority 2) */}
            <p className="animate-fade-up text-xs font-semibold tracking-wide text-muted-foreground sm:text-sm">
              TEAM VIVEK — <span className="text-foreground">Create, Don’t Hate</span>
            </p>

            {/* Center tiger cutout, smaller and integrated */}
            <div className="mt-3 animate-fade-up">
              <Image
                src="/images/tiger-head-cutout.jpg"
                alt="Tiger head emblem"
                width={120}
                height={120}
                className="tiger-cutout mx-auto h-20 w-20 sm:h-24 sm:w-24 lg:h-28 lg:w-28 object-cover animate-float-slow"
                priority
              />
            </div>

            {/* Primary focus title */}
            <h1 className="mt-4 text-pretty text-5xl font-extrabold leading-tight sm:text-6xl lg:text-7xl">
              <span className="tiger-text">PILINALIKE</span> <span className="text-foreground">2025</span>
            </h1>

            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground animate-fade-up">
              Experience the spirit, rhythm, and unity — bold gold and fiery accents over a refined charcoal canvas.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 animate-fade-up">
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <a href="#countdown">Witness the Strike</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
              >
                <a href="#memories">Highlights</a>
              </Button>
              <Button asChild variant="outline" className="border-border hover:bg-secondary bg-transparent">
                <a
                  href="https://instagram.com/teamvivek_sit"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Instagram"
                  className="flex items-center gap-2"
                >
                  <Instagram className="h-4 w-4" />
                  Instagram
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About + Countdown */}
      <section id="countdown" className="section">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:shadow-[0_0_0_2px_var(--color-primary)] animate-in fade-in-50 slide-in-from-bottom-2">
              <h2 className="mb-2 text-xl font-bold text-primary">The Tiger’s Den</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Metallic gold primary with fiery orange and deep red accents, grounded by a near‑black charcoal canvas.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:shadow-[0_0_0_2px_var(--color-accent)] animate-in fade-in-50 slide-in-from-bottom-3">
              <h2 className="mb-3 text-xl font-bold text-primary">Event Countdown</h2>
              <Countdown />
            </div>
          </div>
        </div>
      </section>

      {/* Memories */}
      <section id="memories" className="section">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-6 text-center text-2xl font-bold text-primary">Memories</h2>
          <RollingGallery autoplay pauseOnHover />
        </div>
      </section>

      {/* Sponsors */}
      <section id="sponsors" className="section">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-6 text-center text-2xl font-bold text-primary">Our Pride: Sponsors</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {sponsors.map((s, i) => (
              <figure
                key={s.name + i}
                className="flex flex-col items-center justify-center rounded-lg border border-border bg-card p-6 transition-transform hover:-translate-y-0.5 hover:shadow-[0_0_0_2px_var(--color-accent)]"
                aria-label={`Sponsor: ${s.name}`}
              >
                <img
                  src={s.logo || "/placeholder.svg"}
                  alt={`${s.name} logo`}
                  className="h-10 w-auto opacity-90"
                  loading="lazy"
                />
                <figcaption className="mt-2 text-center text-xs text-muted-foreground">{s.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-border section">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 text-xs text-muted-foreground sm:flex-row">
          <span>© {new Date().getFullYear()} Team Vivek</span>
          <a
            href="https://instagram.com/teamvivek_sit"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
          >
            Follow on Instagram
          </a>
          <span>Made by Adarsh AS</span>
        </div>
      </footer>
    </main>
  )
}
