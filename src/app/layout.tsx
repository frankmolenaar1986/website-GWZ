import './globals.css'
import { Open_Sans } from 'next/font/google'
import Navbar from "./components/Navbar"

const open_sans = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Geintegreerde Wijkzorg',
  description: 'Hier vindt u alle informatie rondom het Geintegreerde Wijkzorg initiatief van Mieke Verberg en Janet Riezebos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={open_sans.className}>
        <header>
          <Navbar />
        </header>

        <main className="pt-24">
          <div className="container mx-auto px-4 content-container">
            {children}
          </div>
        </main>

      </body>
    </html>
  )
}
