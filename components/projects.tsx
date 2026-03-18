import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const projects = [
  {
    title: "GYMMate - Aplicación de gestión de gimnasios",
    description: "Descubre GYMMate, el software de gestión integral diseñado para digitalizar tu gimnasio en minutos. Controla los accesos por QR en tiempo real, automatiza los avisos de vencimiento por WhatsApp y ofrece a tus alumnos una App exclusiva donde pueden seguir sus rutinas con videos, registrar sus récords personales (PR) y ver su evolución física. Menos administración, más resultados",
    image: "/gymmate.png",
    tags: ["TypeScript", "React", "PostgreSQL", "Tailwind", "Vite"],
    liveUrl: "",
    githubUrl: "https://github.com/GonzaProg/AleGymApp-FrontEnd",
  },
]

export function Projects() {
  return (
    <section id="proyectos" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Portafolio</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Proyectos destacados
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-pretty">
            Una selección de nuestros trabajos más recientes que demuestran nuestra 
            experiencia y capacidades técnicas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card 
              key={project.title} 
              className="bg-card border-border overflow-hidden group hover:border-primary/50 transition-all"
            >
              <div className="aspect-video bg-secondary relative overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="secondary" className="gap-2">
                        <ExternalLink className="h-4 w-4" />
                        Ver
                      </Button>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="outline" className="gap-2">
                        <Github className="h-4 w-4" />
                        Código
                      </Button>
                    </a>
                  )}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
