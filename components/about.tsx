import { CheckCircle2, Terminal, Layers, Cpu } from "lucide-react"

const features = [
  "Metodologías ágiles y entregas iterativas",
  "Comunicación constante y transparente",
  "Código limpio y escalable acorde a estándares",
  "Compromiso absoluto con cada detalle",
]

export function About() {
  return (
    <section id="nosotros" className="py-24 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Sobre nosotros</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance leading-tight">
            Diseñamos soluciones, no solo páginas web
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed text-pretty">
            Somos un equipo de desarrolladores apasionados por la tecnología y el buen diseño. 
            Nos enfocamos en entender a fondo las necesidades de cada cliente para construir 
            herramientas digitales tangibles que impulsen su crecimiento.
          </p>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed text-pretty">
            Desde la concepción de la idea hasta el despliegue final, trabajamos como 
            aliados estratégicos, asegurando calidad, velocidad y una arquitectura a prueba de futuro.
          </p>
          
          <ul className="mt-12 grid sm:grid-cols-2 gap-x-8 gap-y-4 text-left w-full max-w-2xl mx-auto">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-sm">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                <span className="text-foreground font-medium">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
