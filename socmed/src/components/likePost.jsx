'use client'
import { IoMdHeart } from "react-icons/io";
import { useMutation } from "@tanstack/react-query";

export default function LikePost({id, likes, value}){

    
    const {mutate} = useMutation({
        mutationFn: async() => {
           try {
            if(likes.includes(Number(value))){
                likes.splice(likes.indexOf(Number(value)), 1)
            }

            const res = await fetch(`http://localhost:5000/posts/${id}`, {
                method: 'PATCH', 
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    likes: likes
                })
            })

            return res
           } catch (error) {
            console.log(error)
           }
        }
    })

    return(
        <>
            <IoMdHeart onClick={() => mutate()} className='text-3xl text-red-400' />
        </>
    )
}