import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const body = await request.json();
    const { nome, cognome, email, telefono, tipo, messaggio } = body;

    // Validazione campi obbligatori
    if (!nome || !cognome || !email || !telefono || !tipo || !messaggio) {
      return Response.json({ error: 'Campi mancanti' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.eu',
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Hotel Langhe & Monferrato - Sito Web" <${process.env.SMTP_USER}>`,
      to: 'prenota@hotellanghemonferrato.com',
      replyTo: email,
      subject: `Nuovo messaggio dal sito — ${tipo} — ${nome} ${cognome}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0d5c5;">
          <div style="background: #1A1714; padding: 20px; text-align: center; margin-bottom: 24px;">
            <h1 style="color: #C9A870; font-family: Georgia, serif; margin: 0; font-size: 22px;">Hotel Langhe & Monferrato</h1>
            <p style="color: rgba(255,255,255,0.5); font-size: 12px; margin: 6px 0 0;">Nuovo messaggio dal sito web</p>
          </div>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px; background: #f5efe4; font-weight: bold; color: #9A8A7A; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; width: 130px;">Nome</td>
              <td style="padding: 10px; border-bottom: 1px solid #e0d5c5;">${nome} ${cognome}</td>
            </tr>
            <tr>
              <td style="padding: 10px; background: #f5efe4; font-weight: bold; color: #9A8A7A; font-size: 11px; text-transform: uppercase; letter-spacing: 1px;">Email</td>
              <td style="padding: 10px; border-bottom: 1px solid #e0d5c5;"><a href="mailto:${email}" style="color: #C9A870;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; background: #f5efe4; font-weight: bold; color: #9A8A7A; font-size: 11px; text-transform: uppercase; letter-spacing: 1px;">Telefono</td>
              <td style="padding: 10px; border-bottom: 1px solid #e0d5c5;"><a href="tel:${telefono}" style="color: #C9A870;">${telefono}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; background: #f5efe4; font-weight: bold; color: #9A8A7A; font-size: 11px; text-transform: uppercase; letter-spacing: 1px;">Tipo richiesta</td>
              <td style="padding: 10px; border-bottom: 1px solid #e0d5c5;">${tipo}</td>
            </tr>
            <tr>
              <td style="padding: 10px; background: #f5efe4; font-weight: bold; color: #9A8A7A; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; vertical-align: top;">Messaggio</td>
              <td style="padding: 10px; line-height: 1.7;">${messaggio.replace(/\n/g, '<br>')}</td>
            </tr>
          </table>

          <div style="margin-top: 24px; padding: 16px; background: #f5efe4; text-align: center;">
            <a href="mailto:${email}" style="display: inline-block; background: #C9A870; color: #fff; padding: 12px 28px; text-decoration: none; font-size: 13px; font-weight: bold; letter-spacing: 1px;">RISPONDI A ${nome.toUpperCase()}</a>
          </div>

          <p style="color: #9A8A7A; font-size: 11px; text-align: center; margin-top: 20px;">Messaggio inviato tramite il modulo contatti di hotellanghemonferrato.com</p>
        </div>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error('Errore invio email:', error);
    return Response.json({ error: 'Errore invio email' }, { status: 500 });
  }
}
