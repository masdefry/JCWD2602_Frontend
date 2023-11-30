'use client';

import { useMutation } from "@tanstack/react-query";
import InputComponent from "./inputcomponent";
import {useRef} from 'react';

export default function Page(){

    const inputUsername = useRef()
    const inputPassword = useRef()

    const {mutate} = useMutation({
        mutationFn: async() => {
            // res bentuk datanya masih JSON
            const res = await fetch(`http://localhost:5000/users?username=${inputUsername.current.value}&password=${inputPassword.current.value}`, {method: 'GET'})
            // Konversi JSON to object JS
            return await res.json()
        },

        onSuccess: (data) => {
            if(data.length === 0) return alert('Login Failed')

            alert('Login Success!')
        }, 

        onError: () => {
            console.log('Bebasss')
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