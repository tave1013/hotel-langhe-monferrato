const TURNSTILE_VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

export async function POST(request) {
  try {
    const body = await request.json();
    const { turnstileToken, website } = body || {};

    // Honeypot: bot -> scarta subito
    if (website) {
      return Response.json({ success: true });
    }

    if (!turnstileToken) {
      return Response.json({ error: 'Token mancante' }, { status: 400 });
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

    return Response.json({ success: true });
  } catch (error) {
    console.error('Errore booking-guard:', error);
    return Response.json({ error: 'Errore verifica antispam' }, { status: 500 });
  }
}
