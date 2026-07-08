import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24" aria-label="Contact">
      <h2 className="mb-8 text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
        Contact
      </h2>
      <div className="rounded-lg border border-border bg-card p-8">
        <h3 className="text-balance text-2xl font-bold text-foreground">
          Let&apos;s build something together
        </h3>
        <p className="mt-3 max-w-md leading-relaxed text-muted-foreground">
          I&apos;m currently available for freelance projects and contract work.
          Tell me about what you&apos;re building and I&apos;ll get back to you
          within a day.
        </p>
 <Button
  variant="outline"
  className="
    mt-6 gap-2 font-medium
    rounded-full px-5 py-5
    border-border/60 bg-card/60 backdrop-blur-sm
    shadow-sm hover:shadow-md
    hover:bg-primary/10 hover:border-primary/40 hover:text-primary
    transition-all duration-300 ease-out
    hover:-translate-y-0.5
  "
>
  <a href="mailto:issamwanga02@gmail.com">
    <Mail className="size-4" aria-hidden="true" />
    Get in touch
  </a>
</Button>
      </div>
    </section>
  )
}
