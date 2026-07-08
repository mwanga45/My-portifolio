"use client"

import type { SVGProps } from "react"
import { useEffect, useState } from "react"
import TechImageComponent from "./ui/tech-image-compo"

const NAV = [
  { id: "about", label: "About" },
  { id: "stack", label: "Tech Stack" },
  { id: "services", label: "Services" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
]

function GithubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.39 1.24-3.23-.12-.31-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.18.77.84 1.24 1.91 1.24 3.23 0 4.63-2.8 5.65-5.48 5.95.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z" />
    </svg>
  )
}

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  )
}

function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.46l8.6-9.83L0 1.15h7.6l5.24 6.93 6.06-6.93zm-1.29 19.5h2.04L6.48 3.24H4.29L17.61 20.65z" />
    </svg>
  )
}

function MailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/mwanga45", icon: GithubIcon },
  { label: "LinkedIn", href: "https://linkedin.com", icon: LinkedinIcon },
  { label: "Email", href: "issamwanga02@gmail.com", icon: MailIcon },
]

export function Sidebar() {
  const [active, setActive] = useState("about")

  useEffect(() => {
    const sections = NAV.map((n) => document.getElementById(n.id)).filter(
      Boolean,
    ) as HTMLElement[]

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: "-40% 0px -55% 0px" },
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[42%] lg:max-w-md lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Issa Mwanga
        </h1>
        <h4 className="text-balance  text-xs font-bold tracking-tight text-foreground sm:text-xs text-blue">
           SokoniKwetu Founder
        </h4>
        <h2 className="mt-3 text-lg font-medium text-foreground sm:text-xl">
          Full-Stack Developer
        </h2>
        <p className="mt-4 max-w-xs leading-relaxed text-muted-foreground">
          Freelance engineer building fast, reliable web apps and APIs across the
          stack.
        </p>

        <nav className="mt-16 hidden lg:block" aria-label="In-page navigation">
          <ul className="space-y-4">
            {NAV.map((item) => {
              const isActive = active === item.id
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="group flex items-center gap-4 py-1"
                  >
                    <span
                      className={`h-px transition-all ${
                        isActive
                          ? "w-16 bg-foreground"
                          : "w-8 bg-muted-foreground/40 group-hover:w-16 group-hover:bg-foreground"
                      }`}
                    />
                    <span
                      className={`text-xs font-semibold uppercase tracking-widest transition-colors ${
                        isActive
                          ? "text-foreground"
                          : "text-muted-foreground group-hover:text-foreground"
                      }`}
                    >
                      {item.label}
                    </span>
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-w-3xl">
  <TechImageComponent src="/docker-removebg-preview.png" alt="Docker" />
  <TechImageComponent src="/react-removebg-preview.png" alt="React" />
  <TechImageComponent src="/nextjs-removebg-preview.png" alt="Next.js" />
  <TechImageComponent src="/node-removebg-preview.png" alt="Node.js" />
  <TechImageComponent src="/mysql-removebg-preview.png" alt="MySQL" />
  <TechImageComponent src="/python-removebg-preview.png" alt="Python" />
  <TechImageComponent src="/go-removebg-preview.png" alt="Go" />
  <TechImageComponent src="/flutter-removebg-preview.png" alt="Flutter" />
</div>

      <ul className="mt-12 flex items-center gap-5" aria-label="Social links">
        {SOCIALS.map((s) => {
          const Icon = s.icon
          return (
            <li key={s.label}>
              <a
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="block text-muted-foreground transition-colors hover:text-primary"
              >
                <span className="sr-only">{s.label}</span>
                <Icon className="size-5" aria-hidden="true" />
              </a>
            </li>
          )
        })}
      </ul>
    </header>
  )
}
