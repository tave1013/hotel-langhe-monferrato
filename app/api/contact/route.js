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
      subject: `Nuovo Messaggio dal Modulo di contatto — ${tipo} — ${nome} ${cognome}`,
      html: `
        <div style="margin:0; padding:18px 8px; background:#F5EFE4; font-family:'Lato', Arial, sans-serif;">
          <div style="width:100%; max-width:860px; margin:0 auto; background:#FFFFFF; border:1px solid #E6DBCC;">
            <div style="background:#1A1714; padding:22px 24px 20px; border-bottom:3px solid #960018; text-align:left;">
              <div style="color:#C9A870; font-size:12px; letter-spacing:0.12em; text-transform:uppercase; font-weight:700; margin-bottom:8px;">Costigliole d'Asti, Piemonte</div>
              <h1 style="color:#FAF7F2; font-family:'Playfair Display', Georgia, serif; margin:0; font-size:28px; line-height:1.18; font-weight:600;">Hotel Langhe & Monferrato</h1>
              <p style="color:rgba(250,247,242,0.75); font-size:12px; letter-spacing:0.08em; text-transform:uppercase; margin:10px 0 0;">Nuovo messaggio dal modulo contatti</p>
            </div>

            <div style="padding:20px 24px 10px; color:#2C2520; font-size:16px; line-height:1.6;">
              Hai ricevuto una nuova richiesta dal sito web.
            </div>

            <table role="presentation" style="width:100%; border-collapse:collapse; margin:0;">
              <tr>
                <td style="padding:14px 16px; background:#FAF7F2; font-weight:700; color:#7A6458; font-size:11px; text-transform:uppercase; letter-spacing:0.1em; width:190px; border-top:1px solid #EFE2D3; border-bottom:1px solid #EFE2D3;">Nome</td>
                <td style="padding:14px 16px; border-top:1px solid #EFE2D3; border-bottom:1px solid #EFE2D3; color:#2C2520; font-size:15px;">${nome} ${cognome}</td>
              </tr>
              <tr>
                <td style="padding:14px 16px; background:#FAF7F2; font-weight:700; color:#7A6458; font-size:11px; text-transform:uppercase; letter-spacing:0.1em; width:190px; border-bottom:1px solid #EFE2D3;">Email</td>
                <td style="padding:14px 16px; border-bottom:1px solid #EFE2D3; color:#2C2520; font-size:15px;"><a href="mailto:${email}" style="color:#7A0013; text-decoration:none; font-weight:700;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding:14px 16px; background:#FAF7F2; font-weight:700; color:#7A6458; font-size:11px; text-transform:uppercase; letter-spacing:0.1em; width:190px; border-bottom:1px solid #EFE2D3;">Telefono</td>
                <td style="padding:14px 16px; border-bottom:1px solid #EFE2D3; color:#2C2520; font-size:15px;"><a href="tel:${telefono}" style="color:#7A0013; text-decoration:none; font-weight:700;">${telefono}</a></td>
              </tr>
              <tr>
                <td style="padding:14px 16px; background:#FAF7F2; font-weight:700; color:#7A6458; font-size:11px; text-transform:uppercase; letter-spacing:0.1em; width:190px; border-bottom:1px solid #EFE2D3;">Tipo richiesta</td>
                <td style="padding:14px 16px; border-bottom:1px solid #EFE2D3; color:#2C2520; font-size:15px;">${tipo}</td>
              </tr>
              <tr>
                <td style="padding:14px 16px; background:#FAF7F2; font-weight:700; color:#7A6458; font-size:11px; text-transform:uppercase; letter-spacing:0.1em; width:190px; border-bottom:1px solid #EFE2D3; vertical-align:top;">Messaggio</td>
                <td style="padding:14px 16px; border-bottom:1px solid #EFE2D3; color:#2C2520; font-size:15px; line-height:1.75;">${messaggio.replace(/\n/g, '<br>')}</td>
              </tr>
            </table>

            <div style="padding:20px 24px 24px; text-align:left;">
              <a href="mailto:${email}" style="display:inline-block; background:#7A0013; color:#FFFFFF; padding:12px 24px; text-decoration:none; font-size:12px; font-weight:700; letter-spacing:0.1em; text-transform:uppercase;">Rispondi a ${nome.toUpperCase()}</a>
              <p style="color:#9A8A7A; font-size:11px; margin:16px 0 0;">Messaggio inviato tramite il modulo contatti di hotellanghemonferrato.com</p>
            </div>
          </div>
        </div>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error('Errore invio email:', error);
    return Response.json({ error: 'Errore invio email' }, { status: 500 });
  }
}
