import type { Metadata } from "next";
import "../../../public/static/css/globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Providers } from "../../providers";

export const metadata: Metadata = {
  title: "Léopold Assogba - Portfolio",
  description: 'Portfolio professionnel de Léopold Assogba, développeur web full stack basé à Lyon, France. Spécialisé en React, NextJS, TypeScript et NodeJS.',
  keywords: "Léopold Assogba, Portfolio, Web Developer, Front-end Developer, Full-stack Developer, React, NextJs, Typescript, JavaScript, HTML, CSS, GSAP, NodeJs, Portfolio, Lyon, France, ",
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://leopold-assogba.dev',
    siteName: 'Portfolio de Léopold Assogba',
    title: 'Léopold Assogba - Développeur Web Full Stack',
    description: 'Portfolio professionnel de Léopold Assogba, développeur web full stack basé à Lyon, France. Spécialisé en React, NextJS, TypeScript et NodeJS.',
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
