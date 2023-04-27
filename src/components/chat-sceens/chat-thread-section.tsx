import React, { Children } from 'react';
import { childrenprops } from 'moodi_bot/types/types';
import styles from "./chatscreen.module.css";

const ChatThreads: React.FC<childrenprops> = ({children}) => {
    return(
        <div className={`overflow-y-auto ${styles.chatThreads}`}>
            {children}
        </div>
    )
}

export default ChatThreads;