// useState: Menyimpan Data (Pengganti Variable di React)
// - Ketika terjadi perupahan pada useState, component akan di render ulang

// useEffect: Fase ketika halaman React dimuat di index.html
// - Mounting
// - Update
// - Unmounting

import { useEffect, useState } from "react";

export default function Login(){

    const [number, setNumber] = useState(0)

    // Mounting
    useEffect(() => {
        console.log('Mounting')
    }, [])

    // Update
    useEffect(() => {
        console.log('Update')
    }, [number])

    // Unmounting
    useEffect(() => {
        return () => {
            console.log('Unmounting')
        }
    }, [])

    return(
        <>
            {console.log('Rendering Component')}
            <h1>
                Login Page
            </h1>
            <h3>
                {number}
            </h3>
            <button onClick={() => setNumber(1)} className="btn bg-blue-300">
                Increment
            </button>
        </>
    )
}