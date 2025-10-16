"use client"

import Image from "next/image"
import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen((o) => !o)
  const close = () => setOpen(false)

  const links = [
    { href: "#home", label: "Home" },
    { href: "#countdown", label: "Schedule" },
    { href: "#memories", label: "Memories" },
    { href: "#sponsors", label: "Sponsors" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <header className="sticky top-0 z-50 nav-backdrop">
      <nav className="container flex items-center justify-between py-3">
        {/* Brand with placeholder logo and text */}
        <a href="#home" className="flex items-center gap-2" aria-label="Go to Home">
          <Image
            src="https://oekyvgwbhszuceneipak.supabase.co/storage/v1/object/public/team/teamvivek.svg"
            alt="Team Vivek logo"
            width={36}
            height={36}
            className="h-9 w-9 shrink-0 rounded-sm object-contain ring-1 ring-foreground/10 bg-background/80"
            priority
          />
          <span className="text-base font-semibold text-primary leading-none">Team Vivek</span>
        </a>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          className="md:hidden inline-flex items-center gap-2 rounded-md border border-[color-mix(in_oklab,var(--color-foreground)_12%,transparent)] px-3 py-2 text-foreground/90"
          onClick={toggle}
        >
          <span>{"≡"}</span>
        </button>

        <ul className="hidden md:flex items-center gap-6 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a className="text-foreground/80 hover:text-primary" href={l.href}>
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              className="inline-flex items-center rounded-md bg-primary/15 px-3 py-1.5 text-primary hover:bg-primary/25"
              href="https://instagram.com/teamvivek_sit"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
        </ul>
      </nav>

      {/* Subtle tiger stripes accent under navbar */}
      <div className="h-1 tiger-stripes" aria-hidden="true" />

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[color-mix(in_oklab,var(--color-foreground)_10%,transparent)]">
          <ul className="container py-3 grid gap-2">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  className="block rounded-md px-2 py-2 text-foreground/90 hover:bg-primary/10"
                  href={l.href}
                  onClick={close}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                className="mt-1 inline-flex w-full items-center justify-center rounded-md bg-primary/15 px-3 py-2 text-primary hover:bg-primary/25"
                href="https://instagram.com/teamvivek_sit"
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
