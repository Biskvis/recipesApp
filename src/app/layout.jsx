import { Inter } from "next/font/google";
import "./globals.css";
import Navlink from './components/Navlink.jsx'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Recipes Next.js",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <Navlink />
        {children}
        </body>
    </html>
  );
}