import "./globals.css";
import { profile } from "../data/projects";
import Providers from "../components/Providers";

export const metadata = {
  metadataBase: new URL("https://davronbek-portfolio.vercel.app"),
  title: `${profile.name} | ${profile.title} | ${profile.setName}`,
  description: profile.tagline,
  openGraph: {
    title: `${profile.name} | ${profile.title} | ${profile.setName}`,
    description: profile.tagline,
    type: "website",
  },
};

export const viewport = {
  themeColor: "#07090f",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&family=Noto+Sans+KR:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body><Providers>{children}</Providers></body>
    </html>
  );
}
