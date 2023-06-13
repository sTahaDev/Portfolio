import './globals.css'
import { Righteous } from 'next/font/google'

const righteous = Righteous({ subsets: ['latin'],weight:["400"]})

export const metadata = {
  title: 'TahaDev',
  description: 'TahaSahin Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={righteous.className}>{children}</body>
    </html>
  )
}
