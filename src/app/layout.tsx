import { JetBrains_Mono } from "next/font/google";

import type { Metadata } from "next";
import "./globals.scss";
import "./utils/colors.scss";
import { AppWrapper, PageContent } from "./styles";
import Taskbar from "./components/Taskbar";
import { AppContextProvider } from "./utils/context";

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
        url: "/og-image.png",
        width: 1528,
        height: 800,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/icons/computer.png",
  },
};

const jetBrains = JetBrains_Mono({
  subsets: ["latin-ext"],
  variable: "--jb-mono",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={jetBrains.className}>
        <AppContextProvider>
          <AppWrapper>
            <PageContent>{children}</PageContent>
            <Taskbar />
          </AppWrapper>
        </AppContextProvider>
      </body>
    </html>
  );
}
