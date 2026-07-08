import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost'
}

export function Button({
  variant = 'default',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ease-out shadow-sm hover:shadow-md hover:-translate-y-0.5 disabled:opacity-50 disabled:pointer-events-none'

  const variants = {
    default:
      'bg-primary text-primary-foreground hover:bg-primary/90',
    outline:
      'border border-border/60 bg-card/60 backdrop-blur-sm hover:bg-primary/10 hover:border-primary/40 hover:text-primary',
    ghost:
      'hover:bg-primary/10 hover:text-primary',
  }

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}