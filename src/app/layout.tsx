import TopNavBar from 'moodi_bot/components/top-nav-bar/top-nav-bar'
import './globals.css'
import { Providers } from './provider'

export const metadata = {
  title: 'Moodi',
  description: 'Moodi chatbot',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon.png"></link>
          <meta name="theme-color" content="#fff" />
      </head>
      <body>
        <Providers>
      <TopNavBar></TopNavBar>

        {children}
     </Providers>
      </body>
    </html>
  )
}
