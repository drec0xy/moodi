import Image from 'next/image'
import { Inter } from 'next/font/google'
import TopNavBar from 'moodi_bot/components/top-nav-bar/top-nav-bar'
import MessageComposer from 'moodi_bot/components/Message-composer/message-composer'

//const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className=" min-h-screen flex-col items-center justify-between ">
      <div>
        <TopNavBar></TopNavBar>
        
        <h4>Body</h4>
        
        <MessageComposer></MessageComposer>
        <h1>Moodi Bot</h1>
      </div>
    </main>
  )
}
