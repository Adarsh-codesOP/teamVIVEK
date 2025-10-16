import { cn } from "@/lib/utils"

type Props = {
  className?: string
  direction?: "left" | "right"
}

export function TigerStripes({ className, direction = "right" }: Props) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 opacity-[0.08]",
        "tiger-stripes",
        direction === "left" ? "animate-stripes-left" : "animate-stripes-right",
        className,
      )}
      aria-hidden="true"
    />
  )
}
