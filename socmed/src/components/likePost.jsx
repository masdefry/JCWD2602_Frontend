'use client'
import { IoMdHeart } from "react-icons/io";
import { useMutation } from "@tanstack/react-query";

export default async function LikePost(props){
    useMutation({
        mutationFn: async() => {
            await fetch(`http://localhost:5000/posts/${props.id}`, {
                method: 'PATCH', 
                body: 
            })
        }
    })

    return(
        <>
            {props.id}
            <IoMdHeart className='text-3xl text-red-400' />
        </>
    )
}