import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Política de Privacidad | GLEMN",
  description: "Política de privacidad y manejo de datos de GLEMN.",
}

export default function PrivacidadPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-24 sm:px-6 lg:px-8 text-muted-foreground">
      <h1 className="text-4xl font-bold text-foreground mb-8 text-balance">
        Política de Privacidad
      </h1>
      
      <div className="space-y-8 text-pretty leading-relaxed">
        <section>
          <p className="text-sm">
            Última actualización: {new Date().toLocaleDateString('es-AR')}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Resumen
          </h2>
          <p>
            En GLEMN valoramos tu privacidad y nos comprometemos a proteger tus datos personales.
            Esta política explica cómo recopilamos, usamos y resguardamos la información que
            nos proporcionas a través de nuestro sitio web y durante la prestación de nuestros servicios.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            1. Información que Recopilamos
          </h2>
          <p>
            Podemos recopilar información personal (como tu nombre, correo electrónico, número
            de teléfono y detalles de la empresa o proyecto) cuando nos contactas a través de
            formularios en nuestro sitio web, por correo electrónico o mediante reuniones.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            2. Uso de la Información
          </h2>
          <p>
            Utilizamos la información recopilada exclusivamente para los siguientes propósitos:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Responder a consultas y proporcionar cotizaciones.</li>
            <li>Gestionar, desarrollar y entregar los proyectos acordados.</li>
            <li>Mejorar nuestros servicios y la experiencia del usuario en nuestro sitio web.</li>
            <li>Enviar comunicaciones comerciales o actualizaciones importantes sobre nuestros servicios.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            3. Protección de Datos
          </h2>
          <p>
            Implementamos medidas de seguridad técnicas y organizativas para proteger tu información
            personal contra accesos no autorizados, alteraciones, divulgación o destrucción accidental.
            No vendemos, comercializamos ni transferimos tus datos a terceros sin tu consentimiento,
            salvo cuando sea requerido por la ley.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            4. Uso de Cookies
          </h2>
          <p>
            Nuestro sitio web puede utilizar "cookies" para mejorar la experiencia del usuario,
            analizar el tráfico web y entender de dónde provienen nuestros visitantes. Puedes
            configurar tu navegador para rechazar las cookies, pero es posible que algunas partes
            del sitio no funcionen correctamente.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            5. Derechos del Usuario
          </h2>
          <p>
            Tienes derecho a solicitar el acceso, rectificación, cancelación u oposición al uso
            de tus datos personales. Para ejercer cualquiera de estos derechos, contáctanos a
            través de nuestros canales oficiales.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            6. Cambios en esta Política
          </h2>
          <p>
            GLEMN se reserva el derecho de actualizar esta Política de Privacidad en cualquier momento.
            Te recomendamos revisar esta página periódicamente para informarte sobre cómo protegemos tu información.
          </p>
        </section>
      </div>
    </div>
  )
}
