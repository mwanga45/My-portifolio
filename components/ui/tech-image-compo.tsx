import React from 'react'

interface TechImageComponentProps {
  src: string
  alt: string
  width?: number
  height?: number
}
export default function TechImageComponent({ src, alt, width, height }: TechImageComponentProps) {
  return (
    <div className="flex items-center justify-center rounded-full border border-border bg-card p-4">
      <img src={src} alt={alt} width={width} height={height} />
      <span className="sr-only">{alt}</span>
    </div>
  )
}
