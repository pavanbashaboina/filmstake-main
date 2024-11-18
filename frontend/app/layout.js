import ThemeProvider from "@/components/ui/theme-provider";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import ToastManager from "@/lib/utils/ToastManager";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "FilmStake",
  description: "A public production",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={montserrat.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          suppressHydrationWarning
        >
          <ToastManager />
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}