import { Code2, Server, Layout, Wrench } from "lucide-react"

const SERVICES = [
  {
    icon: Layout,
    title: "Web Applications",
    desc: "End-to-end web apps with React and Next.js — from marketing sites to data-heavy dashboards.",
  },
  {
    icon: Server,
    title: "APIs & Backends",
    desc: "Scalable REST and real-time APIs built with Go, Django, or Express, backed by solid data models.",
  },
  {
    icon: Code2,
    title: "Full-Stack Builds",
    desc: "Greenfield products taken from idea to launch, including auth, payments, and deployment.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Consulting",
    desc: "Code reviews, performance tuning, and ongoing support for existing codebases.",
  },
]

export function Services() {
  return (
    <section id="services" className="scroll-mt-24" aria-label="Services">
      <h2 className="mb-8 text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
        Services
      </h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {SERVICES.map((service) => {
          const Icon = service.icon
          return (
            <div
              key={service.title}
              className="rounded-lg border border-border bg-card p-6"
            >
              <div className="flex size-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                <Icon className="size-5" aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.desc}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
