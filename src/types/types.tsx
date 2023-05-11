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
    userQuery: string
    botResponds: string
    queryTimestamp: Date
    respondTimestamp: Date

    constructor(userQuery: string, botResponds: string, queryTimestamp: Date, respondTimestamp: Date){
        this.botResponds = botResponds
        this.userQuery = userQuery
        this.respondTimestamp = respondTimestamp
        this.queryTimestamp = queryTimestamp
    }
  }

export type chatBubble = {
    message: string;
} 

export type MessageComposerProps = {
    onSubmit: (message: string) => void;

  }