'use client'

import Link from "next/link";
import { TbUserSquareRounded } from "react-icons/tb";
import { useQuery } from "@tanstack/react-query";

// 1.1. Import useSelector
import { useSelector } from "react-redux";

import { getCookies, removeCookies } from "@/features/cookies";

import {useDispatch} from 'react-redux';
import {setUser} from './../redux/slice/userSlice.js';

export default function Navbar(){
    const dataUser = useSelector((state) => state.user)

    const dispatch = useDispatch()

    // Function CheckIsLogin
    useQuery({
        queryFn: async() => {
            const {value} = await getCookies() // Get Id
            
           if(value !== null){
                let res = await fetch(`http://localhost:5000/users/${value}`) // Id to Get Data
                res = await res.json() // {id:, username:, dsb...}
                
                dispatch(setUser(res))
           }
        }
    })

    const onLogout = async() => {
        await removeCookies()
        dispatch(setUser(null))
    }

    return(
        <>
            <section className="bg-blue-500 text-white h-[90px] flex justify-between items-center gap-3 px-10">
                <div className="flex items-center gap-3">
                    <div>
                        <Link href='/'>
                            <h1 className="text-3xl">
                                Logo.
                            </h1>
                        </Link>
                    </div>
                    <div>
                        Home
                    </div>
                    <div>
                        Support
                    </div>
                </div>
                <div>
                    {
                        dataUser.user?
                            <>
                                {dataUser.user.username}
                                <button onClick={onLogout} className="btn bg-blue-500 text-white ml-3 px-1">
                                    Logout
                                </button>
                            </> 
                        :
                            <Link href='/login'>
                                <button className="btn bg-blue-500 text-white px-1 py-1">
                                    <TbUserSquareRounded className="text-2xl" /> Login
                                </button>
                            </Link>

                    }
                </div>
            </section>
        </>
    )
}