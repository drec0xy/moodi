export type topnavbar = {
    id?: string;
}

export type childrenprops = {
    children: React.ReactNode;
}

export type colorprops = {
    color: string;
}

export type IChatMessageProps = {
    userQuery: string;
    botResponds: string;
    queryTimestamp: Date;
    respondTimestamp: Date;
  }

export type chatBubble = {
    message: string;
} 

export type MessageComposerProps = {
    onSubmit: (message: string) => void;
  }