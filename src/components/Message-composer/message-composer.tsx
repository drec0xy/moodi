'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { IChatMessageProps, MessageComposerProps } from 'moodi_bot/types/types';
import styles from "./message-composer.module.css";
import { userInference } from 'moodi_bot/app/api/hello/user_infere/route';
import { useAppSelector, useAppDispatch } from 'moodi_bot/app/hooks';
import { getQueryText } from 'moodi_bot/features/userQuery/userQuery-slice';
import { addMessage } from 'moodi_bot/features/chatsState/chatstate-slice';


const MessageComposer: React.FC<MessageComposerProps> = ({ onSubmit }) => {

    const query = useAppSelector((state) => state.userQuerySlice.queryText);
    const dispatch = useAppDispatch();
  
  
    const [message, setMessage] = useState("");

    async function updateThreads(){
        const botresponse = await userInference(message);
        console.log(botresponse)
        dispatch(addMessage(botresponse));
    }
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(message);
        const m = new IChatMessageProps(message)
        dispatch(addMessage(m))
        console.log(m);
        setMessage("");
        updateThreads();
    };
       

    return (

        <div className="fixed bottom-0 left-0 z-50 w-full pb-2 pt-2 bg-white border-t border-gray-100">
            <form className={` w-full ${styles.flexrow}`} onSubmit={handleSubmit}>
                <input
                    type="text"
                    className={`${styles.inputBox}`}
                    placeholder="Type your message"
                    value={message}
                    onChange={(e) => {setMessage(e.target.value);
                                    setMessage(e.target.value);
                                    console.log(message);
                                     getQueryText(message)}}
                />
                <button className={`${styles.sendbutton}`} type="submit">
                    <i className={` fi-br-paper-plane ${styles.sendIcon}`}></i>
                </button>
            </form>
        </div>

    )
}

export default MessageComposer
