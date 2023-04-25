export type topnavbar = {
    id?: string;
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