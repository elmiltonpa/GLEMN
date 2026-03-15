"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Phone, Send } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("¡Mensaje enviado! Te contactaremos pronto.")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <section id="contacto" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Contacto</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground text-balance">
            ¿Listo para empezar tu proyecto?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-pretty">
            Cuéntanos sobre tu idea y te ayudaremos a hacerla realidad. 
            Estamos aquí para responder todas tus preguntas.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-8">
          <div className="lg:col-span-2">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-lg rounded-2xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground ml-1">
                        Tu Nombre
                      </label>
                      <Input
                        id="name"
                        placeholder="Ej. Juan Pérez"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="bg-background/50 border-border/50 h-12 rounded-xl focus-visible:ring-primary/50 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground ml-1">
                        Correo Electrónico
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="juan@ejemplo.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="bg-background/50 border-border/50 h-12 rounded-xl focus-visible:ring-primary/50 transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-foreground ml-1">
                      Asunto o tipo de proyecto
                    </label>
                    <Input
                      id="subject"
                      placeholder="¿En qué podemos ayudarte?"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                      className="bg-background/50 border-border/50 h-12 rounded-xl focus-visible:ring-primary/50 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground ml-1">
                      Mensaje
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Cuéntanos un poco más sobre tu idea..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="bg-background/50 border-border/50 p-4 rounded-xl resize-none focus-visible:ring-primary/50 transition-all"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full sm:w-auto h-12 px-8 rounded-xl gap-2 mt-4 hover:scale-[1.02] transition-transform">
                    <Send className="h-4 w-4" />
                    Enviar mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8 flex flex-col justify-center">
            <Card className="bg-card border-border/50 shadow-md rounded-2xl overflow-hidden relative group">
              {/* Decorative accent for the email card */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 transition-transform group-hover:scale-150 duration-500" />
              
              <CardContent className="p-8 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                  <Mail className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Nuestro Email</h3>
                  <p className="text-muted-foreground mt-2 mb-4">
                    Escríbenos directamente si prefieres no usar el formulario. ¡Respondemos rápido!
                  </p>
                  <a 
                    href="mailto:hola@devstudio.com" 
                    className="inline-flex items-center text-primary font-medium hover:underline underline-offset-4"
                  >
                    hola@devstudio.com
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* A subtle trust badge instead of the removed cards */}
            <div className="p-6 rounded-2xl bg-secondary/50 border border-border/50 flex gap-4 items-center">
              <span className="relative flex h-3 w-3 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <div>
                <p className="font-semibold text-foreground text-sm">Disponibles para trabajar</p>
                <p className="text-xs text-muted-foreground mt-0.5">Aceptando nuevos proyectos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
