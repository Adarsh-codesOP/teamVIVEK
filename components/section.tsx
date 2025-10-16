import type React from "react"
type Props = {
  id?: string
  className?: string
  title?: string
  subtitle?: string
  children: React.ReactNode
}

export default function Section({ id, className, title, subtitle, children }: Props) {
  return (
    <section id={id} className={["section", className].filter(Boolean).join(" ")}>
      <div className="container">
        {title ? (
          <header className="mb-6 md:mb-8">
            <h2 className="text-balance text-2xl md:text-3xl font-semibold text-foreground">{title}</h2>
            {subtitle ? <p className="mt-2 text-foreground/70">{subtitle}</p> : null}
          </header>
        ) : null}
        {children}
      </div>
    </section>
  )
}
