"use client"

import { useEffect, useState } from "react"

/* Target: 03-Nov-2025 3:00 PM IST (+05:30) */
const TARGET_ISO = "2025-11-03T15:00:00+05:30"

function getRemaining(target: Date) {
  const diff = +target - Date.now()
  const clamp = Math.max(diff, 0)
  const s = Math.floor(clamp / 1000)
  const days = Math.floor(s / 86400)
  const hours = Math.floor((s % 86400) / 3600)
  const minutes = Math.floor((s % 3600) / 60)
  const seconds = s % 60
  return { diff: clamp, days, hours, minutes, seconds }
}

export default function Countdown() {
  const target = new Date(TARGET_ISO)
  const [t, setT] = useState(getRemaining(target))

  useEffect(() => {
    const id = setInterval(() => setT(getRemaining(target)), 1000)
    return () => clearInterval(id)
  }, [target])

  return (
    <div aria-live="polite" className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
      {[
        { label: "Days", value: t.days },
        { label: "Hours", value: t.hours },
        { label: "Minutes", value: t.minutes },
        { label: "Seconds", value: t.seconds },
      ].map((k) => (
        <div
          key={k.label}
          className="rounded-lg border border-[color-mix(in_oklab,var(--color-foreground)_10%,transparent)] bg-muted/50 px-3 py-4 sm:px-4 sm:py-5 text-center"
        >
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
            {String(k.value).padStart(2, "0")}
          </div>
          <div className="text-xs sm:text-sm text-foreground/70">{k.label}</div>
        </div>
      ))}
    </div>
  )
}
