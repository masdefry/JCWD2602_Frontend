'use client';

import { useMutation } from "@tanstack/react-query";
import InputComponent from "./inputcomponent";
import {useRef} from 'react';
import Link from "next/link";

export default function Page(){
    const inputUsername = useRef()
    const inputEmail = useRef()
    const inputPassword = useRef()

    const {mutate} = useMutation({
        mutationFn: async() => {
            try {
                if(!inputEmail.current.value.includes('@')) throw new Error('Email Not Valid')

                const res = await fetch('http://localhost:3000/users', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        username: inputUsername.current.value, 
                        email: inputEmail.current.value, 
                        password: inputPassword.current.value 
                    })
                })

                if(!res.ok) throw new Error('Failed Fetch Data')
            } catch (error) {
                console.log(error)
                throw new Error(error.message)
            }
        },
        onSuccess: () => {
            alert('Register Success!')
        },
        onError: (error) => {
            alert(error.message)
        }
    })

    return(
        <>
            <section className="flex flex-col items-center">
                
                <div className="w-[500px] py-20">
                    <h1 className="text-3xl font-bold text-blue-500">
                        Register
                    </h1>
                    <p>
                        Register your account to join with us!
                    </p>

                    <InputComponent label='username' type='text' inputRef={inputUsername} />
                    <InputComponent label='email' type='text' inputRef={inputEmail} />
                    <InputComponent label='password' type='password' inputRef={inputPassword} />
                    <button onClick={() => mutate()} className="btn bg-blue-500 text-white mt-2 w-full">
                        Register 
                    </button>

                    <div className="flex justify-center py-5">
                        Already have account? <Link href='/login'>Login Here!</Link>
                    </div>
                </div>
               
            </section>
        </>
    )
}