import { Outfit } from "next/font/google"; // You can remove Geist if you aren't using them
import "./globals.css";
import ClientProviders from "@/components/providers/ClientProviders";

// 1. Initialize Outfit (It is a Sans Serif font, not Mono)
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit", // This is the CSS variable name we will use in Tailwind
  weight: ["300", "400", "500", "600", "700"], // Optional: Specify weights if you want specific ones
});

export const metadata = {
  title: "Elysyal",
  description: "Elysyal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        
        className={`${outfit.variable} font-sans antialiased`}
      >
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
