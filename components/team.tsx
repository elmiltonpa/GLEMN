import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Twitter } from "lucide-react"

const team = [
  {
    name: "Milton Ibarra",
    role: "Full Stack Developer",
    bio: "Especialista en arquitecturas escalables y desarrollo de aplicaciones web de principio a fin.",
    avatar: "MI",
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Gonzalo Vaschchuk",
    role: "Frontend Developer",
    bio: "Apasionado por crear interfaces dinámicas, intuitivas y con un diseño que impacta.",
    avatar: "GV",
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Lucas Tabacchi",
    role: "Backend Developer",
    bio: "Experto en diseño de APIs, bases de datos y seguridad para sistemas robustos.",
    avatar: "LT",
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Nahuel Godoy",
    role: "UI/UX Designer",
    bio: "Enfocado en la experiencia de usuario y en crear productos digitales estéticamente memorables.",
    avatar: "NG",
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
]

export function Team() {
  return (
    <section id="equipo" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Equipo</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Conoce a nuestro equipo
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-pretty">
            Un grupo de profesionales apasionados por la tecnología y comprometidos 
            con la excelencia en cada proyecto.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <Card 
              key={member.name} 
              className="bg-card border-border hover:border-primary/50 transition-colors text-center"
            >
              <CardContent className="pt-8 pb-6">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">{member.avatar}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                <p className="text-primary text-sm mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                <div className="flex items-center justify-center gap-4">
                  <a 
                    href={member.social.github} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`GitHub de ${member.name}`}
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a 
                    href={member.social.linkedin} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`LinkedIn de ${member.name}`}
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a 
                    href={member.social.twitter} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`Twitter de ${member.name}`}
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
