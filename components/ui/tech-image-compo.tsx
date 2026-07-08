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
  width = 40,
  height = 40,
}: TechImageComponentProps) {
  return (
    <div
      className="
        group flex items-center gap-3
        rounded-full border border-border/60
        bg-card/80 backdrop-blur-sm
        px-5 py-3
        shadow-sm hover:shadow-md
        transition-all duration-300 ease-out
        hover:-translate-y-0.5 hover:border-primary/40
      "
    >
      <div className="flex items-center justify-center rounded-full bg-background/60 p-1.5 ring-1 ring-border/50 group-hover:ring-primary/30 transition-colors">
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="object-contain"
        />
      </div>
      <span className="text-[15px] font-medium tracking-tight text-foreground/90 group-hover:text-foreground transition-colors">
        {alt}
      </span>
    </div>
  )
}