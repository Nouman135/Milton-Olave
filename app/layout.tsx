import type { Metadata } from 'next';
import Script from 'next/script';
import ScrollReveal from '@/components/ScrollReveal';
import { FB_PIXEL_ID, GHL_FORM_EMBED_SRC, SITE_NAME, SITE_URL } from '@/lib/site';
import './webflow.css';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_NAME,
  icons: {
    icon: '/images/32-milton.png',
    apple: '/images/256-milton.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // The Webflow stylesheet keys a few rules off html.w-mod-js / html.w-mod-touch, added by the script below.
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="w-mod" strategy="beforeInteractive">
          {`!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);`}
        </Script>
        <noscript>
          <style>{`[data-anim]{opacity:1;translate:none}`}</style>
        </noscript>
      </head>
      <body>
        {children}
        <ScrollReveal />
        <Script src={GHL_FORM_EMBED_SRC} strategy="lazyOnload" />
        {FB_PIXEL_ID && (
          <>
            <Script id="fb-pixel" strategy="afterInteractive">
              {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${FB_PIXEL_ID}');fbq('track','PageView');`}
            </Script>
            <noscript>
              <img
                height="1"
                width="1"
                style={{ display: 'none' }}
                src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
                alt=""
              />
            </noscript>
          </>
        )}
      </body>
    </html>
  );
}
