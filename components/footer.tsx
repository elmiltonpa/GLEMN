import Link from "next/link"
import Image from "next/image"
import { Github, Linkedin, Twitter } from "lucide-react"

const footerLinks = {
  servicios: [
    { label: "Desarrollo Web", href: "#servicios" },
    { label: "Diseño UI/UX", href: "#servicios" },
    { label: "Apps Móviles", href: "#servicios" },
    { label: "Consultoría", href: "#servicios" },
  ],
  empresa: [
    { label: "Nosotros", href: "#nosotros" },
    { label: "Equipo", href: "#equipo" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Blog", href: "#" },
  ],
  legal: [
    { label: "Privacidad", href: "#" },
    { label: "Términos", href: "#" },
    { label: "Cookies", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <Image 
                src="/logo-glemn.png" 
                alt="GLEM Logo" 
                width={32} 
                height={32} 
                className="rounded-lg object-cover group-hover:scale-105 transition-transform duration-300" 
              />
              <span className="text-xl font-bold text-foreground">GLEM</span>
            </Link>
            <p className="mt-4 text-muted-foreground text-sm max-w-sm">
              Creando experiencias digitales excepcionales con las últimas tecnologías web.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-6">Servicios</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Desarrollo Web</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Aplicaciones Móviles</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Diseño UI/UX</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Consultoría Cloud</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-6">Empresa</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><a href="#nosotros" className="hover:text-primary transition-colors">Sobre Nosotros</a></li>
              <li><a href="#equipo" className="hover:text-primary transition-colors">El Equipo</a></li>
              <li><a href="#proyectos" className="hover:text-primary transition-colors">Proyectos</a></li>
              <li><a href="#contacto" className="hover:text-primary transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-6">Legal</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Términos de Servicio</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Política de Privacidad</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} GLEM. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
