const STACK = [
  {
    name: "Go",
    role: "Backend & Services",
    desc: "High-performance APIs, concurrent workers, and CLI tooling with the standard library and Gin.",
  },
  {
    name: "Django",
    role: "Backend & APIs",
    desc: "Robust REST APIs and admin-driven products using Django REST Framework and PostgreSQL.",
  },
  {
    name: "Express",
    role: "Node Backend",
    desc: "Lightweight Node.js services, middleware pipelines, and real-time endpoints.",
  },
  {
    name: "React",
    role: "Frontend",
    desc: "Component-driven UIs with hooks, accessible patterns, and predictable state.",
  },
  {
    name: "Next.js",
    role: "Full-Stack Web",
    desc: "Server components, App Router, edge rendering, and end-to-end TypeScript apps.",
  },
  {
    name: "PostgreSQL",
    role: "Data",
    desc: "Schema design, query optimization, and migrations for relational data.",
  },
]

export function TechStack() {
  return (
    <section id="stack" className="scroll-mt-24" aria-label="Tech stack">
      <h2 className="mb-8 text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
        Tech Stack
      </h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {STACK.map((item) => (
          <div
            key={item.name}
            className="rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/50"
          >
            <div className="flex items-baseline justify-between gap-2">
              <h3 className="font-mono text-base font-semibold text-foreground">
                {item.name}
              </h3>
              <span className="text-xs font-medium uppercase tracking-wider text-primary">
                {item.role}
              </span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
