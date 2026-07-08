import React from 'react'

interface TechImageComponentProps {
  src: string
  alt: string
  width?: number
  height?: number
}

export default function TechImageComponent({
  src,
  alt,
}: TechImageComponentProps) {
  return (
    <div
      className="
        group flex items-center gap-2.5
        rounded-full border border-border/60
        bg-card/80 backdrop-blur-sm
        pl-2.5 pr-4 py-2
        shadow-sm hover:shadow-md
        transition-all duration-300 ease-out
        hover:-translate-y-0.5 hover:border-primary/40
        w-full sm:w-auto
      "
    >
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-background/60 ring-1 ring-border/50 group-hover:ring-primary/30 transition-colors overflow-hidden">
        <img
          src={src}
          alt={alt}
          className="h-5 w-5 object-contain"
        />
      </div>
      <span className="text-sm font-medium tracking-tight text-foreground/90 group-hover:text-foreground transition-colors whitespace-nowrap">
        {alt}
      </span>
    </div>
  )
}