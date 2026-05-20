import nodemailer from 'nodemailer';

const TURNSTILE_VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

function escapeHtml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { nome, cognome, email, telefono, tipo, messaggio, website, turnstileToken } = body;

    // Honeypot: se compilato, scarta subito (bot)
    if (website) {
      return Response.json({ success: true });
    }

    // Validazione campi obbligatori
    if (!nome || !cognome || !email || !telefono || !tipo || !messaggio || !turnstileToken) {
      return Response.json({ error: 'Campi mancanti' }, { status: 400 });
    }

    const secretKey = process.env.TURNSTILE_SECRET_KEY;
    if (!secretKey) {
      return Response.json({ error: 'Configurazione sicurezza mancante' }, { status: 500 });
    }

    const ip = request.headers.get('cf-connecting-ip')
      || request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
      || '';

    const verifyBody = new URLSearchParams({
      secret: secretKey,
      response: turnstileToken,
    });

    if (ip) verifyBody.append('remoteip', ip);

    const verifyRes = await fetch(TURNSTILE_VERIFY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: verifyBody,
      cache: 'no-store',
    });

    const verifyJson = await verifyRes.json();
    if (!verifyRes.ok || !verifyJson.success) {
      return Response.json({ error: 'Verifica antispam fallita' }, { status: 403 });
    }

    const safeNome = escapeHtml(nome);
    const safeCognome = escapeHtml(cognome);
    const safeEmail = escapeHtml(email);
    const safeTelefono = escapeHtml(telefono);
    const safeTipo = escapeHtml(tipo);
    const safeMessaggio = escapeHtml(messaggio).replace(/\n/g, '<br>');

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
      to: 'booking@hotellanghemonferrato.com',
      replyTo: email,
      subject: `Messaggio dal Modulo di contatto | ${safeTipo}`,
      html: `
        <div style="margin:0; padding:18px 8px; background:#F5EFE4; font-family:'Lato', Arial, sans-serif;">
          <div style="width:100%; max-width:860px; margin:0; background:#FFFFFF; border:1px solid #E6DBCC;">
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
                <td style="padding:14px 16px; border-top:1px solid #EFE2D3; border-bottom:1px solid #EFE2D3; color:#2C2520; font-size:15px;">${safeNome} ${safeCognome}</td>
              </tr>
              <tr>
                <td style="padding:14px 16px; background:#FAF7F2; font-weight:700; color:#7A6458; font-size:11px; text-transform:uppercase; letter-spacing:0.1em; width:190px; border-bottom:1px solid #EFE2D3;">Email</td>
                <td style="padding:14px 16px; border-bottom:1px solid #EFE2D3; color:#2C2520; font-size:15px;"><a href="mailto:${safeEmail}" style="color:#7A0013; text-decoration:none; font-weight:700;">${safeEmail}</a></td>
              </tr>
              <tr>
                <td style="padding:14px 16px; background:#FAF7F2; font-weight:700; color:#7A6458; font-size:11px; text-transform:uppercase; letter-spacing:0.1em; width:190px; border-bottom:1px solid #EFE2D3;">Telefono</td>
                <td style="padding:14px 16px; border-bottom:1px solid #EFE2D3; color:#2C2520; font-size:15px;"><a href="tel:${safeTelefono}" style="color:#7A0013; text-decoration:none; font-weight:700;">${safeTelefono}</a></td>
              </tr>
              <tr>
                <td style="padding:14px 16px; background:#FAF7F2; font-weight:700; color:#7A6458; font-size:11px; text-transform:uppercase; letter-spacing:0.1em; width:190px; border-bottom:1px solid #EFE2D3;">Tipo richiesta</td>
                <td style="padding:14px 16px; border-bottom:1px solid #EFE2D3; color:#2C2520; font-size:15px;">${safeTipo}</td>
              </tr>
              <tr>
                <td style="padding:14px 16px; background:#FAF7F2; font-weight:700; color:#7A6458; font-size:11px; text-transform:uppercase; letter-spacing:0.1em; width:190px; border-bottom:1px solid #EFE2D3; vertical-align:top;">Messaggio</td>
                <td style="padding:14px 16px; border-bottom:1px solid #EFE2D3; color:#2C2520; font-size:15px; line-height:1.75;">${safeMessaggio}</td>
              </tr>
            </table>

            <div style="padding:20px 24px 24px; text-align:left;">
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
