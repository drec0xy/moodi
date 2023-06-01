import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IChatMessageProps } from "moodi_bot/types/types";
import data from '../../app/chat.json';

interface chatState{
    messages: IChatMessageProps[];
}

var Chats = data.chatsthread as unknown as IChatMessageProps[];

const initialState: chatState = {
    messages: [...Chats],
  };
  const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
      addMessage(state, action: PayloadAction<IChatMessageProps>) {
        state.messages.push(action.payload);
      },
    },
  });
  
  export const { addMessage } = chatSlice.actions;
  
  export default chatSlice.reducer;