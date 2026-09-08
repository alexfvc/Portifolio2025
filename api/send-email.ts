import { Resend } from 'resend';

export const config = { runtime: 'edge' };

const resend = new Resend(process.env.RESEND_API_KEY);

interface Body {
  nome: string;
  email: string;
  telefone: string;
  cidade?: string;
  empresa?: string;
  mensagem: string;
}

function buildHtml(b: Body): string {
  return `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#f5f5f5;border-radius:8px;">
      <h2 style="color:#1976d2;margin-bottom:16px;">📬 Nova mensagem do portfólio</h2>
      <table style="width:100%;border-collapse:collapse;background:#fff;border-radius:6px;overflow:hidden;">
        <tr style="border-bottom:1px solid #eee;">
          <td style="padding:12px 16px;font-weight:bold;color:#555;width:110px;">Nome</td>
          <td style="padding:12px 16px;">${b.nome}</td>
        </tr>
        <tr style="border-bottom:1px solid #eee;">
          <td style="padding:12px 16px;font-weight:bold;color:#555;">E-mail</td>
          <td style="padding:12px 16px;"><a href="mailto:${b.email}" style="color:#1976d2;">${b.email}</a></td>
        </tr>
        <tr style="border-bottom:1px solid #eee;">
          <td style="padding:12px 16px;font-weight:bold;color:#555;">Telefone</td>
          <td style="padding:12px 16px;">${b.telefone}</td>
        </tr>
        ${b.cidade ? `
        <tr style="border-bottom:1px solid #eee;">
          <td style="padding:12px 16px;font-weight:bold;color:#555;">Cidade</td>
          <td style="padding:12px 16px;">${b.cidade}</td>
        </tr>` : ''}
        ${b.empresa ? `
        <tr style="border-bottom:1px solid #eee;">
          <td style="padding:12px 16px;font-weight:bold;color:#555;">Empresa</td>
          <td style="padding:12px 16px;">${b.empresa}</td>
        </tr>` : ''}
      </table>
      <h3 style="margin-top:24px;color:#333;">Mensagem</h3>
      <div style="background:#fff;padding:16px;border-radius:6px;border-left:4px solid #1976d2;white-space:pre-wrap;line-height:1.6;">
        ${b.mensagem}
      </div>
    </div>
  `;
}

export default async function handler(request: Request): Promise<Response> {
  if (request.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  try {
    const body = await request.json() as Body;
    const { nome, email } = body;

    const { error } = await resend.emails.send({
      from: 'Portfólio <onboarding@resend.dev>',
      to: ['alexfvc@gmail.com'],
      replyTo: email,
      subject: `Contato via Portfólio — ${nome}`,
      html: buildHtml(body),
    });

    if (error) return Response.json({ error: error.message }, { status: 400 });
    return Response.json({ success: true });
  } catch {
    return Response.json({ error: 'Erro interno ao enviar e-mail' }, { status: 500 });
  }
}
