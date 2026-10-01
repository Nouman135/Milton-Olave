'use client';

import { useEffect } from 'react';

// Replays the Webflow IX2 "scroll into view" interactions for elements tagged by the port:
//   data-anim        which action list to play
//   data-anim-delay  ms to wait after the element comes into view
//   data-anim-offset % of the viewport (from the bottom) the element must cross before it triggers
const EASE_OUT_QUART = 'cubic-bezier(0.165, 0.84, 0.44, 1)';
const ANIMS: Record<string, { from: Keyframe; duration: number; easing: string; delay?: number }> = {
  'slide-in-bottom': { from: { opacity: 0, translate: '0 100px' }, duration: 1000, easing: EASE_OUT_QUART },
  'slide-in-top': { from: { opacity: 0, translate: '0 -100px' }, duration: 1000, easing: EASE_OUT_QUART },
  'slide-in-left': { from: { opacity: 0, translate: '-100px 0' }, duration: 1000, easing: EASE_OUT_QUART },
  'slide-in-right': { from: { opacity: 0, translate: '100px 0' }, duration: 1000, easing: EASE_OUT_QUART },
  // "From Up / 0.6s" on the contact forms
  'from-up': { from: { opacity: 0, translate: '0 -15px' }, duration: 700, easing: 'ease', delay: 600 },
};

export default function ScrollReveal() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const observers = new Map<number, IntersectionObserver>();
    const timers: number[] = [];

    const reveal = (el: HTMLElement) => {
      const spec = ANIMS[el.dataset.anim ?? ''];
      // Dropping the attribute hands the element back to the stylesheet (visible, untransformed).
      const finish = () => el.removeAttribute('data-anim');
      if (!spec || reduceMotion) return finish();
      const delay = spec.delay ?? Number(el.dataset.animDelay || 0);
      timers.push(
        window.setTimeout(() => {
          const anim = el.animate([spec.from, { opacity: 1, translate: '0 0' }], {
            duration: spec.duration,
            easing: spec.easing,
            fill: 'forwards',
          });
          anim.onfinish = () => {
            finish();
            anim.cancel();
          };
        }, delay),
      );
    };

    for (const el of Array.from(document.querySelectorAll<HTMLElement>('[data-anim]'))) {
      const offset = Number(el.dataset.animOffset || 0);
      let io = observers.get(offset);
      if (!io) {
        io = new IntersectionObserver(
          (entries, observer) => {
            for (const entry of entries) {
              if (!entry.isIntersecting) continue;
              observer.unobserve(entry.target);
              reveal(entry.target as HTMLElement);
            }
          },
          // Huge top margin: anything already scrolled past counts as "in view", like IX2.
          { rootMargin: `10000px 0px -${offset}% 0px` },
        );
        observers.set(offset, io);
      }
      io.observe(el);
    }

    return () => {
      observers.forEach((io) => io.disconnect());
      timers.forEach((t) => window.clearTimeout(t));
    };
  }, []);

  return null;
}
