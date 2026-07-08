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
        <Button  className="mt-6 font-medium">
          <a href="issamwanga02@gmail.com" target="_blank" rel="noopener noreferrer">
            <Mail className="size-4" aria-hidden="true" />
            Get in touch
          </a>
        </Button>
      </div>
    </section>
  )
}
