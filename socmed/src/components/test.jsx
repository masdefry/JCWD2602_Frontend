'use client'

import { AiTwotoneLike } from "react-icons/ai";
import { useRouter } from "next/navigation";

export default function Test(){

    const route = useRouter();

    const onLikePost = async() => {
        await fetch('http://localhost:5000/posts', {
            method: 'POST', 
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                caption: 'Lorem Lagi'
            })
        })

        route.refresh();
    }

    return(
        <AiTwotoneLike className='text-3xl' onClick={onLikePost} />
    )
}