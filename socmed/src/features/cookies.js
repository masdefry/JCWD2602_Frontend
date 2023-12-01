'use server'

import {cookies} from 'next/headers';

export async function setCookies(data){
    cookies().set('userData', data[0].id) 
}

export async function getCookies(){
    const cookieStore = cookies()
    const value = cookieStore.get('userData')
    
    if(value) return value 
    return {value: null}
}

export async function removeCookies(){
    cookies().delete('userData')
}