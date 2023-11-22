import RegisterForm from "../../Components/RegisterForm"

import {useRef} from 'react';

import toast, { Toaster } from 'react-hot-toast';

import { useState } from "react";
import { Link } from "react-router-dom";

import {axiosInstance} from './../../Lib/AxiosInstance'

export default function Register(){

    const inputUsername = useRef()
    const inputEmail = useRef()
    const inputPassword = useRef()
    const inputConfirmPassword = useRef()

    const[isLoading, setIsLoading] = useState(false)

    const onRegister = async() => {
        try {
            // Step-1. Validation Input
            if(inputUsername.current.value.length < 5) throw({message: 'Minimum 5 Character'})
            if(!inputEmail.current.value.includes('@')) throw({message: 'Email Not Valid'})
            if(inputPassword.current.value !== inputConfirmPassword.current.value) throw({message: 'Password Doesnt Match'})

            setIsLoading(true)

            // Check Username or Email Exist or Not?
            const response = await axiosInstance.get(`/users?email=${inputEmail.current.value}`)
            
            if(response.data.length > 0) throw ({message: 'Email Already Exist!'})

            // Step-2. Send Post Request
            await axiosInstance.post(`/users`, {username: inputUsername.current.value, email: inputEmail.current.value, password: inputPassword.current.value})
            toast.success('Register Success!')

            inputUsername.current.value = ''
            inputEmail.current.value = ''
            inputPassword.current.value = ''
            inputConfirmPassword.current.value = ''
        } catch (error) { // error: {message: ...}
            toast.error(error.message)
        }finally{
            setIsLoading(false)
        }
    }

    return(
        <>  
            <Toaster />
            <div className="flex justify-center py-5 text-3xl font-bold">
                <h1>
                    Register Your Account
                </h1>
            </div>
            <div className="flex justify-center">
                <div className="w-[500px]">
                    <RegisterForm inputRef={inputUsername} type="text" label="Username" />
                    <RegisterForm inputRef={inputEmail} type="text" label="Email" />
                    <RegisterForm inputRef={inputPassword} type="password" label="Password" />
                    <RegisterForm inputRef={inputConfirmPassword} type="password" label="Confirm Password" />
                    <button disabled={isLoading} onClick={onRegister} className="btn bg-red-700 text-white w-full mt-5">
                        {isLoading? 'Loading...':'Submit'}
                    </button>
                    <div className="flex justify-center">
                        Already Have Account? <Link to='/login'>Login Here</Link>
                    </div>
                </div>
            </div>
        </>
    )
}