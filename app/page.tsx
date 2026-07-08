import { Sidebar } from "@/components/sidebar"
import { About } from "@/components/about"
import { TechStack } from "@/components/tech-stack"
import { Services } from "@/components/services"
import { Work } from "@/components/work"
import { Contact } from "@/components/contact"

export default function Page() {
  return (
    <div className="mx-auto min-h-screen max-w-6xl px-6 md:px-12 lg:px-16">
      <div className="lg:flex lg:justify-between lg:gap-12">
        <Sidebar />
        <main className="space-y-24 py-16 lg:w-[58%] lg:py-24">
          <About />
          <TechStack />
          <Services />
          <Work />
          <Contact />
          <footer className="pt-8 text-sm text-muted-foreground">
            Designed &amp; built by Alex Rivera. Built with Next.js, React, and
            Tailwind CSS.
          </footer>
        </main>
      </div>
    </div>
  )
}
