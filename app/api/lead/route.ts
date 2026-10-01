import { NextResponse } from 'next/server';

// Receives the Contact and Pre-Order Questionnaire forms and forwards them to the GoHighLevel
// inbound webhook configured in GHL_WEBHOOK_URL. Keeping the webhook server-side keeps its URL out of the bundle.
type Lead = { form: string; page: string; fields: Record<string, string> };

const isLead = (v: unknown): v is Lead =>
  typeof v === 'object' &&
  v !== null &&
  typeof (v as Lead).form === 'string' &&
  typeof (v as Lead).fields === 'object' &&
  (v as Lead).fields !== null &&
  Object.values((v as Lead).fields).every((f) => typeof f === 'string');

export async function POST(req: Request) {
  const webhook = process.env.GHL_WEBHOOK_URL;
  if (!webhook) {
    console.error('GHL_WEBHOOK_URL is not set; lead not delivered');
    return NextResponse.json({ error: 'Lead delivery is not configured' }, { status: 503 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }
  if (!isLead(body)) return NextResponse.json({ error: 'Invalid lead' }, { status: 400 });

  const upstream = await fetch(webhook, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...body, source: 'miltonolave.com', submittedAt: new Date().toISOString() }),
  }).catch(() => null);

  if (!upstream?.ok) {
    console.error('GHL webhook rejected the lead', upstream?.status);
    return NextResponse.json({ error: 'Lead could not be delivered' }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
