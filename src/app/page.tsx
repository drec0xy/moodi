import Image from 'next/image'
import { Inter } from 'next/font/google'
import TopNavBar from 'moodi_bot/components/top-nav-bar/top-nav-bar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div>
        <TopNavBar></TopNavBar>
        <h1>Moodi Bot</h1>
      </div>
    </main>
  )
}
