'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { MessageComposerProps } from 'moodi_bot/types/types';
import styles from "./message-composer.module.css";
import { userInference } from 'moodi_bot/app/api/hello/user_infere/route';

const MessageComposer: React.FC<MessageComposerProps> = ({ onSubmit }) => {
    const [message, setMessage] = useState("");
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(message);
        userInference(message)
        setMessage("");
    };
       

    return (
        <div className="fixed bottom-0 left-0 z-50 w-full pb-2 pt-2 bg-white border-t border-gray-100">
            <form className={` w-full ${styles.flexrow}`} onSubmit={handleSubmit}>
                <input
                    type="text"
                    className={`${styles.inputBox}`}
                    placeholder="Type your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button className={`${styles.sendbutton}`} type="submit">
                    <i className={` fi-br-paper-plane ${styles.sendIcon}`}></i>
                </button>
            </form>
        </div>

    )
}

export default MessageComposer
