import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Projects } from "@/components/projects"
import { Team } from "@/components/team"
import { TechStack } from "@/components/tech-stack"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen relative z-10">
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <TechStack />
      <Team />
      <Contact />
      <Footer />
    </main>
  )
}
