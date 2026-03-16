import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios" },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: "Agencia GLEM <onboarding@resend.dev>", // Cambiar por tu dominio verificado cuando esté en producción
      to: "glemnsoftware@gmail.com", // Pon aquí el correo donde quieres recibir los mensajes (debe estar verificado en Resend si usas onboarding@resend.dev)
      replyTo: email,
      subject: `Nuevo contacto: ${subject} - de ${name}`,
      html: `
        <h2>Nuevo mensaje desde el formulario de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Asunto:</strong> ${subject}</p>
        <br/>
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    if (data.error) {
      return NextResponse.json({ error: data.error }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error enviando email:", error);
    return NextResponse.json(
      { error: "Error interno enviando el email" },
      { status: 500 }
    );
  }
}
