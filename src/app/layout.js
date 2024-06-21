import { Inter } from "next/font/google";
import "./styles/globals.css";
import Header from "@/components/header.js";
import Footer from "@/components/footer.js";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Insta",
  description: "Instagram bildeanalyse",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col">
        <Header />
        {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
