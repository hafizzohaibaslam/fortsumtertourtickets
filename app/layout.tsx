import type { Metadata } from "next";
// import { viewport, themeColor } from "./viewport";
export { viewport } from "./viewport";
export { themeColor } from "./viewport";

import {
  Plus_Jakarta_Sans,
  Poppins,
  Outfit,
  Open_Sans,
} from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Providers from "@/providers";
import Script from "next/script";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plus-jakarta-sans",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.alcatrazislandticketing.com"),
  title: {
    default: "Alcatraz Island Tours | Book Ticket for Ferry to Alcatraz",
    template: "%s | Alcatraz Island Tours",
  },
  description:
    "Enjoy an Alcatraz Island tour with a ferry ride. Get your Alcatraz tickets in just 60 seconds with fast online booking and instant confirmation. Tickets start at only $34 — book now!",
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://www.alcatrazislandticketing.com/",
    siteName: "Alcatraz Island Tours",
    title: "Alcatraz Island Tours | Book Ticket for Ferry to Alcatraz",
    description:
      "Enjoy an Alcatraz Island tour with a ferry ride. Get your Alcatraz tickets in just 60 seconds with fast online booking and instant confirmation. Tickets start at only $34 — book now!",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Alcatraz Island Tours",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alcatraz Island Tours | Book Ticket for Ferry to Alcatraz",
    description:
      "Enjoy an Alcatraz Island tour with a ferry ride. Get your Alcatraz tickets in just 60 seconds with fast online booking and instant confirmation. Tickets start at only $34 — book now!",
    images: ["/opengraph-image.png"],
  },
  referrer: "strict-origin-when-cross-origin",

  // ✅ Single source of truth for icons (no <head> duplicates needed)
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-48x48.png", type: "image/png", sizes: "48x48" }, // important for Google
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
    shortcut: ["/favicon.ico"],
  },

  // ✅ Use metadata to declare manifest (avoid manual <link>)
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-head"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-KMZXDFMX');
            `,
          }}
        />

        {/* Google Ads (gtag) – keep only if not fired via GTM */}
        <Script
          id="gtag-src"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-17433430697"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17433430697');
            `,
          }}
        />
      </head>
      <body
        className={`${plusJakartaSans.variable} ${poppins.variable} ${outfit.variable} ${openSans.variable} antialiased`}
        suppressHydrationWarning
      >
        {/* GTM noscript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KMZXDFMX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Script
          id="tawk-to-widget"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/68a44bed1bc5fa1922bad463/1j30sh6la';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        />

        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  );
}
