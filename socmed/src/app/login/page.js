'use client';

import { useMutation } from "@tanstack/react-query";
import InputComponent from "./inputcomponent";
import {useRef} from 'react';
import {useRouter} from 'next/navigation';

// 1.1. Import Redux
import { setUser } from "@/redux/slice/userSlice";
import { useDispatch } from "react-redux";
import { setCookies } from "@/features/cookies";

export default function Page(){

    const inputUsername = useRef()
    const inputPassword = useRef()

    // 1.2. Define useDispatch
    const dispatch = useDispatch()

    const route = useRouter()

    const {mutate} = useMutation({
        mutationFn: async() => {
            try {
                // res bentuk datanya masih JSON
                const res = await fetch(`http://localhost:5000/users?username=${inputUsername.current.value}&password=${inputPassword.current.value}`, {method: 'GET'})

                if(!res.ok) throw new Error('Server Error')
                // Konversi JSON to object JS
                return await res.json()
            } catch (error) {
                throw new Error(error)
            }
        },

        onSuccess: (data) => {
            if(data.length === 0) return alert('Login Failed')

            alert('Login Success!')
            // 1.3. Dispatch Data User
            //      Dipatch Mengirimkan Data Menuju ke Param Action.Payload
            dispatch(setUser(data))
            setCookies(data)
            route.push('/')
        }, 

        onError: (error) => {
            alert(error)
        }
    })

    return(
        <>
            <section className="flex flex-col items-center">
                
                <div className="w-[500px] py-20">
                    <h1 className="text-3xl font-bold text-blue-500">
                        Login
                    </h1>
                    <p>
                        Login into your accont to share with others.
                    </p>

                    <InputComponent label='username' type='text' inputRef={inputUsername} />
                    <InputComponent label='password' type='password' inputRef={inputPassword} />
                    <button onClick={() => mutate()} className="btn bg-blue-500 text-white mt-2 w-full">
                        Login 
                    </button>
                </div>
               
            </section>
        </>
    )
}