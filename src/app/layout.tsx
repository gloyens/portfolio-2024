import { JetBrains_Mono } from "next/font/google";

import type { Metadata } from "next";
import "./globals.scss";
import "./utils/colors.scss";
import { PageWrapper, PageContent } from "./styles";
import Taskbar from "./components/Taskbar";
import { AppContextProvider } from "./utils/context";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
          <PageWrapper>
            <PageContent>{children}</PageContent>
            <Taskbar />
          </PageWrapper>
        </AppContextProvider>
      </body>
    </html>
  );
}
