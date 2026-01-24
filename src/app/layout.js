import Header from "@/app/components/Header";
import Script from 'next/script';
import { Poppins, Plus_Jakarta_Sans, Aclonica, Tiro_Bangla, Onest, Manrope } from 'next/font/google'
import "./globals.css";
import Cta from "@/app/components/Cta";
import Footer from "@/app/components/Footer";
import { Suspense } from "react";
import Image from "next/image";
import WhatsAppButton from "./components/WhatsAppButton";
import CookieConsent from "./components/CookieConsent";

// Keep only essential fonts, remove decorative fonts to improve LCP
const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  weight: ['400', '500', '600', '700'], // Reduced weights
  preload: true, // Preload critical font
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  preload: false, // Don't preload, load on demand
});

const plus_jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  preload: false,
});

// Optional fonts - not preloaded to improve initial load
const aclonica = Aclonica({
  subsets: ['latin'],
  variable: '--font-aclonica',
  display: 'optional', // Changed from 'swap' to 'optional'
  weight: '400',
});

const trio = Tiro_Bangla({
  subsets: ['latin'],
  variable: '--font-trio',
  display: 'optional', // Changed from 'swap' to 'optional'
  weight: '400',
});

const onest = Onest({
  subsets: ['latin'],
  variable: '--font-onest',
  display: 'optional', // Changed from 'swap' to 'optional'
  weight: '400',
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.giopio.com'),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Preconnect to external origins for performance */}
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://connect.facebook.net" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="theme-color" content="#ff9040" />
        <meta name="google-site-verification" content="JeD_buUp32AwdGxTiOUgURQj1f6QkPr-DLrz6AeGwOY" />

        {/* Favicon - optimized */}
        <link rel="icon" href="/assets/images/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/favicon-180.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Force Dark Mode - Critical, inline */}
        <Script id="force-dark-mode" strategy="beforeInteractive">
          {`
            (function() {
              document.documentElement.classList.add('dark');
              localStorage.setItem('darkMode', 'enabled');
            })();
          `}
        </Script>
      </head>

      <body className={`bg-main-body relative dark:bg-[#1B1C31] anim ${poppins.variable} ${plus_jakarta.variable} ${aclonica.variable} ${trio.variable} ${onest.variable} ${manrope.variable}`}>
        {/* Google Tag Manager - Deferred for performance */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-56WHWHNH"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-56WHWHNH');
            `,
          }}
        />

        {/* Facebook Pixel - Deferred for performance */}
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          defer
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1560540801473045');
              fbq('track', 'PageView');
            `
          }}
        />

        <Header />

        {/* whatsapp icon */}
        {/* <WhatsAppButton /> */}

        <Suspense>
          {children}
        </Suspense>

        {/* <CtaFooterJoin /> */}

        {/* cta start */}
        <main id="main-content">
          <Suspense fallback={null}>
            {children}
          </Suspense>
        </main>
        <Cta />
        <Footer />
        <WhatsAppButton />
        <CookieConsent />
      </body>
    </html>
  );
}
