import { JetBrains_Mono } from "next/font/google";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "George Gloyens",
  description: "George Gloyens' personal portfolio",
  openGraph: {
    title: "George Gloyens",
    description: "George Gloyens' personal portfolio",
    url: "https://gloyens.co.uk",
    siteName: "George Gloyens",
    images: [
      {
        url: "https://www.gloyens.co.uk/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/icons/computer.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
