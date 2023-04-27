'use client';
import Image from 'next/image'
import { Inter } from 'next/font/google'
import TopNavBar from 'moodi_bot/components/top-nav-bar/top-nav-bar'
import MessageComposer from 'moodi_bot/components/Message-composer/message-composer'
import Chat from 'moodi_bot/components/chat-sceens/message-bubble'
import ChatThreads from 'moodi_bot/components/chat-sceens/chat-thread-section';

//const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className=" min-h-screen border flex-col items-center justify-between ">
      <div>
        <ChatThreads>
          <Chat userMessage="Hello" botMessage="Hi there 👋🏾.I'm Moodi, I'm here to make your life better" />
          <Chat userMessage="Can you help me with my account?" botMessage="Sure! What's your account number?" />
          <Chat userMessage="123456" botMessage="Thanks! Let me check that for you." />
          <Chat userMessage="Please which office is incharge of producing student Id cards?" botMessage="You can issue your student Id card at the Library. make sure you go there with your school fees payment reciept, a doccument that identifies your nationality, could be your national ID card, passport, birth certificate or resident permit. the library is open today from 8:00 am to 5:30pm." />
          <Chat userMessage="Thanks Moodi" botMessage="I'm just doing my job 🤗." />

          <Chat userMessage="Hello Moodi👋🏾" botMessage="" />
        </ChatThreads>
        <MessageComposer onSubmit={function (message: string): void {
          console.log("Submit method clicked");
        }}></MessageComposer>
      </div>
    </main>
  )
}
