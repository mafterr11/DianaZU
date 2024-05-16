import "./globals.css";
import { Poppins } from "next/font/google";
import { constructMetadata } from "@/lib/utils";


export const metadata = constructMetadata();

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "400", "500", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
