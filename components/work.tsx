import { ArrowUpRight } from "lucide-react"

const PROJECTS = [
  {
    title: "Real-Time Order & Shipment Tracking System",
    desc: "Real-time shipment tracking system handling thousands of concurrent updates. Built a Go backend with WebSocket streaming and a Next.js dashboard.",
    tags: ["Golang", "Next.js", "PostgreSQL", "Server-Sent Events"],
    href: "#",
  },
  {
    title: "Online  Booking Appointment Platform",
    desc: "Medque appointment platform with a Golang REST backend, role-based access, and a React patient portal.",
    tags: ["Golang", "Flutter", "PostgreSQL"],
    href: "#",
  },
  {
    title: "ShopApp",
    desc: "Analytics product for content creators. Nest.js API aggregating multi-platform metrics, visualized in a fast ReactVite frontend.",
    tags: ["Nest.js", "PostgreSQL", "React"],
    href: "#",
  },

]

export function Work() {
  return (
    <section id="work" className="scroll-mt-24" aria-label="Selected work">
      <h2 className="mb-8 text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
        Work
      </h2>
      <ul className="space-y-2">
        {PROJECTS.map((project) => (
          <li key={project.title}>
            <a
              href={project.href}
              className="group block rounded-lg border border-transparent p-5 transition-colors hover:border-border hover:bg-card"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-semibold text-foreground transition-colors group-hover:text-primary">
                  {project.title}
                </h3>
                <ArrowUpRight
                  className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                  aria-hidden="true"
                />
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {project.desc}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-primary/10 px-3 py-1 font-mono text-xs font-medium text-primary"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
