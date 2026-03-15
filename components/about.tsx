import { CheckCircle2 } from "lucide-react"

const features = [
  "Metodologías ágiles y entregas iterativas",
  "Comunicación constante y transparente",
  "Código limpio y mantenible",
  "Soporte post-lanzamiento incluido",
]

export function About() {
  return (
    <section id="nosotros" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary text-sm font-medium uppercase tracking-wider">Sobre nosotros</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground text-balance">
              Más que código, creamos soluciones
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-pretty">
              Somos un equipo de desarrolladores y diseñadores con más de 5 años de 
              experiencia creando productos digitales. Nos apasiona transformar ideas 
              en aplicaciones web que generan impacto real en los negocios de nuestros clientes.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed text-pretty">
              Trabajamos con startups y empresas establecidas, adaptándonos a las 
              necesidades específicas de cada proyecto. Desde landing pages hasta 
              aplicaciones complejas, ponemos el mismo nivel de dedicación y profesionalismo.
            </p>
            
            <ul className="mt-8 space-y-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-secondary/50 border border-border overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                    <span className="text-5xl font-bold text-primary">DS</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">DevStudio</h3>
                  <p className="text-muted-foreground">Desarrollo Web Profesional</p>
                </div>
              </div>
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary/20 border border-primary/30">
                <span className="text-xs text-primary font-medium">Desde 2019</span>
              </div>
              <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-secondary border border-border">
                <span className="text-xs text-muted-foreground">Buenos Aires, AR</span>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-xl blur-xl" />
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary/5 rounded-xl blur-xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
