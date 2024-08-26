import type { Metadata } from "next";
import "../../../public/static/css/globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Providers } from "../../providers";
import Script from "next/script";

export const metadata: Metadata = {
  title: "NextJs Typescript Portfolio",
  description: "NextJs Typescript Portfolio",
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
        <Script
          src="https://connect.soundcloud.com/sdk/sdk-3.3.2.js"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}
