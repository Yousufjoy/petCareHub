import { Inter } from "next/font/google";
import "./globals.css";

import Footer from "@/components/Shared/Footer";
import AuthProvider from "@/services/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "petCareHub",
  description: "A Pet Store & Pet loving place",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={inter.className}>
          {children}
          <Footer />
        </body>
      </AuthProvider>
    </html>
  );
}
