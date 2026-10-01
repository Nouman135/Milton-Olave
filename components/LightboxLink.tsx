'use client';

import { useEffect, useState, type ReactNode } from 'react';

// Port of the Webflow lightbox for single images (photo page). Renders the same DOM the Webflow
// runtime builds, so the .w-lightbox-* rules in webflow.css style it.
type Props = {
  image: { src: string; width: number; height: number };
  className?: string;
  id?: string;
  children: ReactNode;
};

export default function LightboxLink({ image, className, id, children }: Props) {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!open) return;
    document.body.classList.add('w-lightbox-noscroll');
    const frame = requestAnimationFrame(() => setVisible(true));
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => {
      cancelAnimationFrame(frame);
      setVisible(false);
      document.body.classList.remove('w-lightbox-noscroll');
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <>
      <a
        href="#"
        id={id}
        className={className}
        onClick={(e) => {
          e.preventDefault();
          setOpen(true);
        }}
      >
        {children}
      </a>
      {open && (
        <div
          className="w-lightbox-backdrop"
          style={{ opacity: visible ? 1 : 0 }}
          onClick={(e) => {
            // Clicks on the image itself keep the lightbox open; anywhere else closes it.
            if (!(e.target as HTMLElement).closest('.w-lightbox-figure')) setOpen(false);
          }}
        >
          <div className="w-lightbox-container">
            <div className="w-lightbox-content">
              <div className="w-lightbox-view" tabIndex={0} style={{ opacity: 1 }}>
                <div className="w-lightbox-frame">
                  <figure className="w-lightbox-figure">
                    <img
                      className="w-lightbox-img w-lightbox-image"
                      src={image.src}
                      width={image.width}
                      height={image.height}
                      alt=""
                    />
                  </figure>
                </div>
              </div>
              <div className="w-lightbox-control w-lightbox-close" role="button" aria-label="close lightbox"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
