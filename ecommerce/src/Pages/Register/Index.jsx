import RegisterForm from "../../Components/RegisterForm"

import {useRef} from 'react';

export default function Register(){

    const inputUsername = useRef()
    const inputEmail = useRef()
    const inputPassword = useRef()
    const inputConfirmPassword = useRef()

    const onRegister = () => {
        if(inputUsername.current.value.length < 5) alert('Minimum Character 5')
        if(!inputEmail.current.value.includes('@')) alert('Email Not Valid')
    }

    return(
        <>
            <div className="flex justify-center py-5 text-3xl font-bold">
                <h1>
                    Register Your Account
                </h1>
            </div>
            <div className="flex justify-center">
                <div onClick={onRegister} className="w-[500px]">
                    <RegisterForm inputRef={inputUsername} type="text" label="Username" />
                    <RegisterForm inputRef={inputEmail} type="text" label="Email" />
                    <RegisterForm inputRef={inputPassword} type="password" label="Password" />
                    <RegisterForm inputRef={inputConfirmPassword} type="password" label="Confirm Password" />
                    <button onClick={onRegister} className="btn bg-red-700 text-white w-full mt-5">
                        Submit
                    </button>
                </div>
            </div>
        </>
    )
}