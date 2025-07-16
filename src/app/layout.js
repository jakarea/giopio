import Header from "@/app/components/Header";
import Script from 'next/script';
import { Poppins, Plus_Jakarta_Sans, Aclonica, Tiro_Bangla } from 'next/font/google'
import "./globals.css";
import Cta from "@/app/components/Cta";
import Footer from "@/app/components/Footer";
import { Suspense } from "react";
import Image from "next/image";
import WhatsAppButton from "./components/WhatsAppButton";

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

const plus_jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
});

const aclonica = Aclonica({
  subsets: ['latin'],
  variable: '--font-aclonica',
  display: 'swap',
  weight: '400',
});
const trio = Tiro_Bangla({
  subsets: ['latin'],
  variable: '--font-trio',
  display: 'swap',
  weight: '400',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="theme-color" content="#ff9040" /> 
        <meta name="google-site-verification" content="JeD_buUp32AwdGxTiOUgURQj1f6QkPr-DLrz6AeGwOY" />
        <link rel="icon" href="/assets/images/favicon.svg" type="image/x-icon" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/favicon-180.png" />
        <link rel="icon" type="image/svg+xml" sizes="32x32" href="/assets/images/favicon-32.svg" />
        <link rel="icon" type="image/svg+xml" sizes="16x16" href="/assets/images/favicon-16.svg" />
        <link rel="shortcut icon" href="/assets/images/favicon.svg" type="image/x-icon" /> 
        <link rel="manifest" href="/site.webmanifest" />
 
        {/* Google Tag Manager (script) */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive" // Loads after the page is interactive
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

        {/* Google tag (gtag.js) - Removed as it conflicts with GTM */}

      </head>
      {/* Facebook Pixel Tracking Script */}
      <Script id="facebook-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1560540801473045');
          fbq('track', 'PageView');
        `}
      </Script>
      <body className={`bg-main-body relative dark:bg-[#1B1C31] anim ${poppins.variable} ${plus_jakarta.variable} ${aclonica.variable} ${trio.variable}`}>
        {/* Google Tag Manager (noscript) */}
            <noscript
              dangerouslySetInnerHTML={{
                __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-56WHWHNH" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
              }}
            />
      
        {/* header top  */}
        <div className="w-full absolute top-0 left-0 hidden xl:block">
          <Image
            src="/assets/images/header-bg.svg"
            alt="header top"
            layout="responsive"
            width={100}
            height={100}
            className="w-full ltd anim" />
          <Image
            src="/assets/images/header-bg-dark.svg"
            alt="header top"
            layout="responsive"
            width={100}
            height={100}
            className="w-full dtl anim" />
        </div>
        {/* header top  */}

        {/* header */}
        <Header />

        {/* whatsapp icon */}
        <WhatsAppButton />

        <Suspense>
          {children}
        </Suspense>

        {/* <CtaFooterJoin /> */}

        {/* cta start */}
        <Cta />

        {/* footer start */}
        <Footer />

        <Script src="/assets/js/custom.js" strategy="lazyOnload" />
        <Script src="/assets/js/ecommerce-custom.js" strategy="lazyOnload" />

      </body>
    </html>
  );
}
