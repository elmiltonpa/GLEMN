import { Code, Palette, Smartphone, Server, Zap, Shield } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: Code,
    title: "Desarrollo Web",
    description: "Aplicaciones web modernas con React, Next.js, y las últimas tecnologías del mercado.",
  },
  {
    icon: Palette,
    title: "Diseño UI/UX",
    description: "Interfaces intuitivas y atractivas que mejoran la experiencia de usuario y conversión.",
  },
  {
    icon: Smartphone,
    title: "Apps Responsivas",
    description: "Diseños que se adaptan perfectamente a cualquier dispositivo y tamaño de pantalla.",
  },
  {
    icon: Server,
    title: "Backend & APIs",
    description: "Arquitecturas robustas y APIs escalables con Node.js, Python y bases de datos modernas.",
  },
  {
    icon: Zap,
    title: "Optimización",
    description: "Mejoramos el rendimiento de tu web para una carga rápida y mejor posicionamiento SEO.",
  },
  {
    icon: Shield,
    title: "Seguridad",
    description: "Implementación de las mejores prácticas de seguridad para proteger tu aplicación.",
  },
]

export function Services() {
  return (
    <section id="servicios" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Servicios</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Soluciones tecnológicas a medida
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-pretty">
            Ofrecemos una gama completa de servicios de desarrollo para llevar tu idea 
            desde el concepto hasta la realidad.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card 
              key={service.title} 
              className="bg-card border-border hover:border-primary/50 transition-colors group"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
