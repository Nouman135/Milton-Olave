'use client';

import {
  cloneElement,
  isValidElement,
  useState,
  type CSSProperties,
  type FormEvent,
  type ReactElement,
  type ReactNode,
} from 'react';

// Wraps the Webflow contact / pre-order questionnaire markup and posts it to /api/lead.
// Mirrors the Webflow form UX: the form hides on success and the .w-form-done / .w-form-fail blocks appear.
type Props = {
  wrapperClassName: string;
  formName: string;
  formClassName?: string;
  done: ReactNode;
  fail: ReactNode;
  children: ReactNode;
};
type Status = 'idle' | 'sending' | 'done' | 'fail';
const MESSAGE_LIMIT = 300;

const shown = (node: ReactNode) =>
  isValidElement(node)
    ? cloneElement(node as ReactElement<{ style?: CSSProperties }>, { style: { display: 'block' } })
    : node;

export default function LeadForm({ wrapperClassName, formName, formClassName, done, fail, children }: Props) {
  const [status, setStatus] = useState<Status>('idle');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const submit = form.querySelector<HTMLInputElement>('input[type="submit"]');
    const submitLabel = submit?.value;
    if (submit) submit.value = 'Please wait...';
    setStatus('sending');

    // Key each value by its label: the Webflow export reuses the same name attribute across fields.
    const fields: Record<string, string> = {};
    form
      .querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('input:not([type="submit"]), textarea')
      .forEach((el) => {
        const label = el.id ? form.querySelector<HTMLLabelElement>(`label[for="${el.id}"]`)?.innerText.trim() : '';
        fields[label || el.name] = el.value;
      });

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ form: formName, page: window.location.pathname, fields }),
      });
      setStatus(res.ok ? 'done' : 'fail');
    } catch {
      setStatus('fail');
    } finally {
      if (submit && submitLabel) submit.value = submitLabel;
    }
  }

  // Live "n/300" counter next to the message box.
  function onInput(e: FormEvent<HTMLFormElement>) {
    const target = e.target;
    if (!(target instanceof HTMLTextAreaElement)) return;
    const counter = target.parentElement?.querySelector('.udesly-text-area');
    if (counter) counter.textContent = `${target.value.length}/${MESSAGE_LIMIT}`;
  }

  return (
    <div className={wrapperClassName}>
      <form
        id="wf-form-Contact-Us"
        name="wf-form-Contact-Us"
        data-name={formName}
        method="post"
        className={formClassName}
        aria-label={formName}
        onSubmit={onSubmit}
        onInput={onInput}
        style={status === 'done' ? { display: 'none' } : undefined}
      >
        {children}
      </form>
      {status === 'done' && shown(done)}
      {status === 'fail' && shown(fail)}
    </div>
  );
}
