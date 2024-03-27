import { ThemeProvider } from "@/components/theme-provider";
import { Livvic } from "next/font/google";
import "./globals.css";

const inter = Livvic({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

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
