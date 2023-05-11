'use client';
import { NextRequest, NextResponse } from "next/server";
import axios, { AxiosHeaders } from 'axios'
import { json } from "stream/consumers";



export async function userInference(request: String) {
    const userRequest = await request;
    const ORIGIN = '*';
    const headers = {origin: ORIGIN,};

    const response = await axios.get(`https://moodi-api.vercel.app/infere/${userRequest}`
    )
    console.log(response.data);
    return response;

}