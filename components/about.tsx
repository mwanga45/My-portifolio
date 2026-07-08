export function About() {
  return (
    <section id="about" className="scroll-mt-24" aria-label="About me">
      <h2 className="mb-8 text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
        About
      </h2>
      <div className="space-y-4 leading-relaxed text-muted-foreground">
        <p>
          {
            "I'm a freelance full-stack developer who enjoys turning complex problems into simple, reliable software. I work across the entire stack — from designing data models and building performant APIs to shipping polished, accessible interfaces."
          }
        </p>
        <p>
          My day-to-day spans{" "}
          <span className="font-medium text-foreground">Go</span> and{" "}
          <span className="font-medium text-foreground">Django</span> for
          backends and services,{" "}
          <span className="font-medium text-foreground">Express</span> for
          lightweight Node APIs, and{" "}
          <span className="font-medium text-foreground">React</span> with{" "}
          <span className="font-medium text-foreground">Next.js</span> on the
          frontend. I care about clean architecture, good tests, and shipping
          things that hold up in production.
        </p>
        <p>
          Currently available for freelance and contract work. If you have a
          project in mind, I&apos;d love to hear about it.
        </p>
      </div>
    </section>
  )
}
