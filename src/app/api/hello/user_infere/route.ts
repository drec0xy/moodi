'use client';
import { NextRequest, NextResponse } from "next/server";
import axios, { AxiosHeaders } from 'axios'
import { json } from "stream/consumers";
import {store} from '../../../store';
import { addMessage } from "moodi_bot/features/chatsState/chatstate-slice";
import { useAppSelector, useAppDispatch } from "moodi_bot/app/hooks";
import { IChatMessageProps } from "moodi_bot/types/types";


export async function userInference(request: string) {
    
    const userRequest = await request;
    const ORIGIN = '*';
    const headers = {origin: ORIGIN,};

    //const response = await axios.get(`http://localhost:3000/${userRequest}`)

    const response = await axios.get(`https://moodi-api.vercel.app/infere/${userRequest}`)


    const res = new IChatMessageProps(response.data.botResponds, true)
    console.log(res);
    return res;

}