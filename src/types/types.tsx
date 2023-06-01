export type topnavbar = {
    id?: string;
}

export type childrenprops = {
    children: React.ReactNode;
}

export type colorprops = {
    color: string;
}

export class IChatMessageProps {
    message: string
    bot?: boolean

    constructor(message: string, bot?: boolean){
        this.message = message
        if(!bot){
            this.bot = false
        }
        else{
            bot = bot
        }
    }
  }

export type chatBubble = {
    message: string;

} 

export type MessageComposerProps = {
    onSubmit: (message: string) => void;

  }