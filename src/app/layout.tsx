import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children,
  parallel,
  parallelsecond
}: {
  children: React.ReactNode
  parallel: React.ReactNode
  parallelsecond: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div>{children}</div>
          <div>{parallel}</div>
          <div>{parallelsecond}</div>
        </Providers>
      </body>
    </html>
  )
}
