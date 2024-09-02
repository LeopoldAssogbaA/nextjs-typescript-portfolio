import type { Metadata } from "next";
import "../../../public/static/css/globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Providers } from "../../providers";

export const metadata: Metadata = {
  title: "Léopold Assogba - Portfolio",
  description: 'Léopold Assogba, fullstack JavaScript and TypeScript developer based in Lyon, France.',
  keywords: "Léopold Assogba, Portfolio, Web Developer, Front-end Developer, Full-stack Developer Back-end Developer, React, NextJs, Typescript, JavaScript, HTML, CSS, GSAP, NodeJs, Portfolio, Lyon, France",
  openGraph: {
    type: 'website',
    url: 'https://leopold-assogba.dev',
    siteName: 'Léopold Assogba - Portfolio',
    title: 'Léopold Assogba - Fullstack JavaScript and TypeScript developer',
    description: 'Léopold Assogba, fullstack JavaScript and TypeScript developer based in Lyon, France.',
    images: [
      {
        url: 'https://leopoldassogba.com/static/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Léopold Assogba - Portfolio',
      },
    ],
  },
  icons: [
    { rel: 'apple-touch-icon', sizes: '180x180', url: '/static/icon/apple-touch-icon.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', url: '/static/icon/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', url: '/static/icon/favicon-16x16.png' },
    { rel: 'manifest', url: '/static/icon/site.webmanifest' },
    { rel: 'mask-icon', url: '/static/icon/safari-pinned-tab.svg', color: '#0000a3' },
  ],
  themeColor: '#fff9e8',
};

export default async function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string }
}>) {

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body suppressHydrationWarning={true}>
        <Providers>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
