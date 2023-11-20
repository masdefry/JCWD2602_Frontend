import { useEffect, useState } from "react"

let dataDummy = []

export default function Hooks(){

    const[number, setNumber] = useState(0)

    // Kiri untuk pakai data, kanan untuk menyimpan data
    const[data, setData] = useState([])

    // Like Component Did Mount
    useEffect(() => {
        onGetData()
    }, [])

    // Like Component Will Unmount
    // useEffect(() => {
    //     return(() => {
    //         console.log('Component Will Unmount')
    //     })
    // }, [])

    // Like Component Did Update
    // useEffect(() => {
    //     console.log('Component Did Update')
    // }, [number])

    const onGetData = async() => {
        try {
            let response = await fetch('https://jsonplaceholder.typicode.com/users', {method: "GET"})
            response = await response.json()
            setData(response)
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <div className="flex justify-center flex-col items-center">
            <h1>
                Hooks Page
            </h1>
            <ul>
                {data.map((item, index) => {
                    return(
                        <li>{item.username}</li>
                    )
                })}
            </ul>
            <button className="btn bg-blue-300" onClick={onGetData}>
                Fetch Data
            </button>
        </div>
    )   
}