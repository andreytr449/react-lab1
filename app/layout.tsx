import "./globals.css";
import {Poppins} from "next/font/google";

const popins = Poppins({
  weight: ['700', '800', '500', '600'],
  variable: "--font-geist-sans",
    subsets: ['latin']
})



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${popins.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
