'use client';
import Image from 'next/image'
import { Inter } from 'next/font/google'
import TopNavBar from 'moodi_bot/components/top-nav-bar/top-nav-bar'
import MessageComposer from 'moodi_bot/components/Message-composer/message-composer'
import Chat from 'moodi_bot/components/chat-sceens/message-bubble'
import ChatThreads from 'moodi_bot/components/chat-sceens/chat-thread-section';
import data from './chat.json';
import { IChatMessageProps } from 'moodi_bot/types/types';
import { store } from '../app/store';
import { Providers } from './provider';
import { useAppDispatch, useAppSelector } from './hooks';
import { SetStateAction, useCallback, useEffect, useRef, useState } from 'react';
import { userInference } from './api/hello/user_infere/route';



export default function Home() {
  const chatThreadsRef = useRef<HTMLDivElement>(null);
  
  const Chats = useAppSelector((state) => state.chatSlice).messages;
  const queryText = useAppSelector((state) => state.userQuerySlice).queryText;
  const [query, setQuery] = useState(queryText);


  function handlesubmits(queryText: SetStateAction<string>) {
    //userInference(queryText.valueOf)
  }

    //const threads = new IChatMessageProps(queryText, new Date())

  useEffect(() => {
    // This function will run every time `myVariable` changes
    handlesubmits(queryText)    
    console.log('myVariable has changed:', queryText);
  }, [queryText]);


useEffect(() => {
    // Scroll to the last message in the chat threads
    if (chatThreadsRef.current?.lastElementChild) {
      chatThreadsRef.current.lastElementChild.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start',
      });
    }
  }, [Chats]);
  return (
    <main className=" min-h-screen border flex-col items-center justify-between ">
      <div>
      <div ref={chatThreadsRef}>
        <ChatThreads >

          {Chats.map((chats: IChatMessageProps, index: number) => (
            <Chat Message={chats.message} bot={chats.bot}></Chat>
          ))}
        </ChatThreads>
        </div>
        <MessageComposer onSubmit={function (message: string): void {
          handlesubmits(queryText)
          console.log("🚀🚀🚀🚀🚀:",Chats);
        }} ></MessageComposer>
      </div>
    </main>
  )
}
