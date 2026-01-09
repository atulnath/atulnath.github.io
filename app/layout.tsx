import type React from "react";
import "@/app/globals.css";
import { Inter, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/shared/ThemeProvider";
import { CustomCursor } from "@/components/shared/CustomCursor";
import { LanguageProvider } from "@/contexts/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata = {
  title:
    "Atul Chandra Nath | Automotive Software Engineering Student | Master Student",
  description:
    "Automotive Software Graduate | Embedded Systems Enthusiast. Interests: Computer Vision, Machine Learning, Artificial Intelligence, Large Language Models.",
  keywords: [
    "Automotive Software Engineer",
    "Embedded Systems",
    "Computer Vision",
    "Machine Learning",
    "Artificial Intelligence",
    "Large Language Models",
    "Python",
    "Rust",
    "Vue.js",
    "Drone Technology",
  ],
  authors: [{ name: "Atul Chandra Nath" }],
  creator: "Atul Chandra Nath",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ateebshahid.com",
    title: "Atul Chandra Nath | Automotive Software Graduate",
    description:
      "Automotive Software Graduate | Embedded Systems Enthusiast. Interests: Computer Vision, Machine Learning, Artificial Intelligence, Large Language Models.",
    siteName: "Atul Chandra Nath Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atul Chandra Nath | Automotive Software Graduate",
    description:
      "Automotive Software Graduate | Embedded Systems Enthusiast. Interests: Computer Vision, Machine Learning, Artificial Intelligence, Large Language Models.",
  },
  icons: {
    icon: [
      // Next.js automatically serves files from public directory
      { url: `/favicon.ico`, sizes: "any" },
      { url: `/pfp-icon.ico`, sizes: "any", type: "image/x-icon" },
    ],
    apple: `/pfp-icon.ico`,
    shortcut: `/favicon.ico`,
  },
  manifest: `/site.webmanifest`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        <LanguageProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            disableTransitionOnChange
          >
            <CustomCursor />
            {children}
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
