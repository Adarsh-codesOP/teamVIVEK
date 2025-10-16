import Image from "next/image"
import { cn } from "@/lib/utils"

type Props = {
  size?: number
  className?: string
  decorative?: boolean
}

export function TigerBadge({ size = 64, className, decorative = true }: Props) {
  return (
    <div
      className={cn(
        "tiger-badge relative inline-flex items-center justify-center rounded-full border border-primary bg-card shadow-lg",
        "ring-1 ring-primary/30 transition-transform hover:scale-[1.03] will-change-transform",
        "tiger-glow",
        className,
      )}
      aria-hidden={decorative ? true : undefined}
    >
      <Image
        src="/images/tiger-mark.jpg"
        alt={decorative ? "" : "Tiger emblem"}
        width={size}
        height={size}
        className="pointer-events-none select-none"
        priority
      />
    </div>
  )
}
