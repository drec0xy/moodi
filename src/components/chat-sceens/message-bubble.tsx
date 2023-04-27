import React from 'react';
import styles from "./chatscreen.module.css";


interface ChatProps {
    userMessage: string;
    botMessage: string;
}

const Chat: React.FC<ChatProps> = ({ userMessage, botMessage }) => {
    return (
        <div className={`${styles.ChatWrapper}`}>
            <div className={`${styles.userWrapper}`}>
                <div className={`${styles.UserBubble}`}>{userMessage}</div>
            </div>

            <div className={`${styles.botWrapper}`}>
                <div className={`w-50 h-50 ${styles.circulardiv}`}>
                    <div>
                        <svg width="10"
                            height="10"
                            viewBox="0 0 260 206"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <rect width="260" height="162.442" rx="25" fill="black" />
                            <ellipse cx="64.5695" cy="81.2208" rx="19.8013" ry="33.842" fill="white" />
                            <ellipse cx="198.874" cy="81.2208" rx="19.8013" ry="33.842" fill="white" />
                            <ellipse cx="130.861" cy="81.2208" rx="20.6623" ry="20.3052" fill="white" />
                            <path d="M201.744 161.932L160.604 194.29L173.911 117.962L201.744 161.932Z" fill="black" />
                        </svg>
                    </div>
                    </div>

                    {
                        botMessage == "" ?
                            <div className={`${styles.BotBubble}`}>

                                <div className={`${styles.circle}`}></div>
                                <div className={`${styles.circle}`}></div>
                                <div className={`${styles.circle}`}></div>

                            </div>
                            :
                            <div className={`${styles.BotBubble}`}>{botMessage}</div>

                    }
                </div>



                
            </div>
    );
};

export default Chat;