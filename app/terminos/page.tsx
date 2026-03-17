import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Términos de Servicio | GLEMN",
  description: "Términos y condiciones de uso de los servicios de GLEMN.",
}

export default function TerminosPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-24 sm:px-6 lg:px-8 text-muted-foreground">
      <h1 className="text-4xl font-bold text-foreground mb-8 text-balance">
        Términos de Servicio
      </h1>
      
      <div className="space-y-8 text-pretty leading-relaxed">
        <section>
          <p className="text-sm">
            Última actualización: {new Date().toLocaleDateString('es-AR')}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            1. Aceptación de los Términos
          </h2>
          <p>
            Al acceder y utilizar el sitio web de GLEMN y sus servicios, aceptas cumplir con
            estos términos y condiciones. Si no estás de acuerdo con alguna parte de ellos,
            te sugerimos no utilizar nuestros servicios.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            2. Servicios Ofrecidos
          </h2>
          <p>
            GLEMN proporciona servicios de desarrollo web, diseño UI/UX, desarrollo de aplicaciones
            móviles y consultoría tecnológica. Los detalles específicos de cada proyecto, plazos
            y presupuestos se acordarán mediante contratos o propuestas de servicios individuales.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            3. Propiedad Intelectual
          </h2>
          <p>
            Todo el contenido, diseños, código web y materiales generados por GLEMN permanecen
            bajo nuestra propiedad intelectual hasta que se acuerde la transferencia definitiva
            de derechos, la cual suele efectuarse tras el pago total del servicio prestado,
            según se estipule en el contrato de cada proyecto.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            4. Confidencialidad
          </h2>
          <p>
            Nos comprometemos a mantener en estricta confidencialidad toda la información,
            ideas de negocio y datos técnicos proporcionados por nuestros clientes y que sean
            necesarios para el desarrollo de los proyectos.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            5. Limitación de Responsabilidad
          </h2>
          <p>
            GLEMN se esfuerza por entregar productos de la más alta calidad y seguridad.
            No obstante, no nos hacemos responsables por daños indirectos, pérdida de datos
            o fallos de infraestructura de terceros (hosting, servicios de pago, etc.) una vez
            entregado el proyecto.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            6. Modificaciones a los Términos
          </h2>
          <p>
            Nos reservamos el derecho de actualizar, modificar o reemplazar cualquier parte
            de estos Términos de Servicio mediante la publicación de las actualizaciones en nuestro
            sitio web. Es tu responsabilidad revisar esta página periódicamente para verificar cambios.
          </p>
        </section>
      </div>
    </div>
  )
}
