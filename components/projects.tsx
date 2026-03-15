import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Plataforma de comercio electrónico completa con carrito de compras, pagos integrados y panel de administración.",
    image: "/placeholder-ecommerce.svg",
    tags: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "SaaS Dashboard",
    description: "Dashboard analítico para empresa SaaS con visualización de datos en tiempo real y gestión de usuarios.",
    image: "/placeholder-dashboard.svg",
    tags: ["React", "TypeScript", "Chart.js", "Node.js"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "App de Reservas",
    description: "Sistema de reservas online para restaurantes con calendario interactivo y notificaciones automáticas.",
    image: "/placeholder-booking.svg",
    tags: ["Next.js", "Prisma", "SendGrid", "Vercel"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Portal Inmobiliario",
    description: "Plataforma de listado de propiedades con búsqueda avanzada, mapas interactivos y tours virtuales.",
    image: "/placeholder-realestate.svg",
    tags: ["React", "Mapbox", "Node.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
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
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-xl bg-primary/20 flex items-center justify-center">
                    <span className="text-4xl font-bold text-primary">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <Button size="sm" variant="secondary" className="gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Ver proyecto
                  </Button>
                  <Button size="sm" variant="outline" className="gap-2">
                    <Github className="h-4 w-4" />
                    Código
                  </Button>
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
