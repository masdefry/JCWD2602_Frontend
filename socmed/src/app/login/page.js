'use client';

import { useMutation } from "@tanstack/react-query";
import InputComponent from "./inputcomponent";

export default function Page(){

    const {mutate} = useMutation({
        mutationFn: async() => {
            await fetch('http://localhost:5000/users', {method: 'GET'})
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

                    <InputComponent label='username' type='text' />
                    <InputComponent label='password' type='password' />
                    <button onClick={() => mutate()} className="btn bg-blue-500 text-white mt-2 w-full">
                        Login 
                    </button>
                </div>
               
            </section>
        </>
    )
}