import { ThemeProvider } from "@/components/theme-provider";
import { Livvic } from "next/font/google";
import "./globals.css";

const inter = Livvic({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "NFVCb DataDeck Demo",
  description: "This is a demo app for NFVCB staff data portal.",

  openGraph: {
    title: "NFVCb DataDeck Demo",
    description: "This is a demo app for NFVCB staff data portal.",
    author: ["Matthew Chukwu"],
    developer: ["Matthew Chukwu"],
    url: "https://nfvcb-staff-data.vercel.app",
    siteName: "NFVCb DataDeck Demo",
    images: [
      {
        url: "https://res.cloudinary.com/mctony17/image/upload/v1711528221/nfvcb/nfvcb_logo.jpg",
        width: 400,
        height: 400,
      },
      {
        url: "https://res.cloudinary.com/mctony17/image/upload/v1711528221/nfvcb/nfvcb_logo.jpg",
        width: 600,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

// https://res.cloudinary.com/mctony17/image/upload/v1711528221/nfvcb/nfvcb_logo.jpg

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ThemeProvider attribute='class'>
          <main className='text-2xl'>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
