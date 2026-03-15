"use client"

import { useState } from "react"

const technologies = [
  { name: "React" },
  { name: "Next.js" },
  { name: "TypeScript" },
  { name: "Tailwind CSS" },
  { name: "Node.js" },
  { name: "PostgreSQL" },
  { name: "Prisma" },
  { name: "Vercel" },
  { name: "GraphQL" },
  { name: "Docker" },
  { name: "AWS" },
  { name: "MongoDB" },
]

export function TechStack() {
  const [isPaused, setIsPaused] = useState(false)

  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <span className="text-primary text-sm font-medium uppercase tracking-wider">Tecnologías</span>
        <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground text-balance">
          Nuestro stack tecnológico
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-pretty">
          Utilizamos las herramientas más modernas y eficientes del mercado para 
          garantizar la calidad de nuestros proyectos.
        </p>
      </div>

      <div 
        className="relative max-w-[100vw]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        <div 
          className="flex w-max"
          style={{
            animation: "scroll 20s linear infinite",
            animationPlayState: isPaused ? "paused" : "running",
          }}
        >
          {[1, 2].map((i) => (
            <div key={i} className="flex gap-6 pr-6" aria-hidden={i === 2}>
              {technologies.map((tech, index) => (
                <div
                  key={`${tech.name}-${index}`}
                  className="flex-shrink-0 flex flex-col items-center justify-center p-6 rounded-xl bg-secondary/50 border border-border hover:border-primary/50 hover:bg-secondary transition-all min-w-[120px]"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                    <span className="text-lg font-bold text-primary">{tech.name.charAt(0)}</span>
                  </div>
                  <span className="text-sm font-medium text-foreground text-center whitespace-nowrap">{tech.name}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  )
}
