'use client'
import { IoMdHeart } from "react-icons/io";
import { IoIosHeartEmpty } from "react-icons/io";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export default function LikePost({id, likes, value}){    

    const router = useRouter()

    const {mutate} = useMutation({
        mutationFn: async() => {
           try {
            // Kalo id user ada didalam likes, hapus id user dari dalam likes
            if(likes.includes(Number(value))){
                likes.splice(likes.indexOf(Number(value)), 1)
            }else{
                likes.push(Number(value))
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
        }, 
        
        onSuccess: () => {
            router.refres()
        }
    })

    return(
        <>
            {
                likes.includes(Number(value))?
                <IoMdHeart onClick={() => mutate()} className='text-3xl text-red-400' />
                :
                <IoIosHeartEmpty onClick={() => mutate()} className='text-3xl text-black' />
            }
        </>
    )
}