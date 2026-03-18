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
   {
    title: "AmargoYDulce - E-commerce de golosinas",
    description: "Amargo y Dulce es una tienda online de golosinas, donde los usuarios pueden encontrar una amplia variedad de productos para satisfacer sus antojos. Con un diseño moderno y una interfaz intuitiva, los usuarios pueden navegar por las diferentes categorías de productos, agregar productos al carrito y realizar pedidos de manera rápida y segura.",
    image: "/amargoydulce.png",
    tags: ["Nextjs", "Strapi","Supabase","Tailwind","Docker"],
    liveUrl: "https://amargo-y-dulce.vercel.app/",
    githubUrl: "https://github.com/LucasTabacchi/frontend-ecommerce-amargo-y-dulce/",
  },
  {
    title: "Project Flow - Gestión de proyectos",
    description: "Project Flow es una plataforma de gestión de proyectos diseñada para equipos que buscan optimizar su flujo de trabajo. Con una interfaz intuitiva y herramientas avanzadas, Project Flow permite a los usuarios gestionar sus proyectos de manera eficiente y colaborativa.",
    image: "/projectflow.jpg",
    tags: ["Nextjs", "Supabase", "Tailwind", "Prisma"],
    liveUrl: "https://project-flow-one.vercel.app/login",
    githubUrl: "https://github.com/LucasTabacchi/project-flow",
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
                    <Button asChild size="sm" variant="secondary" className="gap-2">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        Ver
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button asChild size="sm" variant="outline" className="gap-2">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        Código
                      </a>
                    </Button>
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
