import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//! metadata objesi ve generateMetadata fonksiyonu sadece Server Componentlerden export edilebilir.
export const metadata = {
  title: "Netflix",
  description: "a movie platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
