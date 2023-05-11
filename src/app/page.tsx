'use client';
import Image from 'next/image'
import { Inter } from 'next/font/google'
import TopNavBar from 'moodi_bot/components/top-nav-bar/top-nav-bar'
import MessageComposer from 'moodi_bot/components/Message-composer/message-composer'
import Chat from 'moodi_bot/components/chat-sceens/message-bubble'
import ChatThreads from 'moodi_bot/components/chat-sceens/chat-thread-section';
import data from './chat.json';
import { IChatMessageProps } from 'moodi_bot/types/types';
import { Provider } from 'react-redux/es/exports'; 
import { store } from '../app/store';

//const inter = Inter({ subsets: ['latin'] })

var Chats = data.chatsthread as unknown as IChatMessageProps[];

//const [qurey, setQuery] = useState("");

//const parsQuery = (queryContent: String) =>{
  //setQuery(queryContent);
//}


export default function Home() {

  return (
    <Provider store={ store }>
    <main className=" min-h-screen border flex-col items-center justify-between ">
      <div>
        <ChatThreads>
         
          {Chats.map((chats:IChatMessageProps, index:number) =>(
            <Chat userMessage={chats.userQuery} botMessage={chats.botResponds}></Chat>
          ))}       
        </ChatThreads>
        <MessageComposer onSubmit={function (message: string): void {
          console.log("🚀🚀🚀🚀🚀");
        } } ></MessageComposer>
      </div>
    </main>
    </Provider>
  )
}
