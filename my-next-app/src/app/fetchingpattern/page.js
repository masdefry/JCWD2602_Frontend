// *** PARALEL DATA FETCHING
// const baseUrl = 'https://jsonplaceholder.typicode.com'

import { Suspense } from "react"

// const getDataPosts = async() => {
//     try {
//         const response = await fetch(`${baseUrl}/posts`)
//         return response.json()
//     } catch (error) {
//         console.log(error)
//     }
// }

// const getDataUsers = async() => {
//     try {
//         const response = await fetch(`${baseUrl}/users`)
//         await new Promise((resolve, reject) => {
//             setTimeout(resolve, 10000)
//         })

//         return response.json()
//     } catch (error) {
//         console.log(error)
//     }
// }

// export default async function FetchingPattern(){

//     const resPosts = await getDataPosts()
//     const resUsers = await getDataUsers()
    

//     return(
//         <>
//             <h3>
//                 Paralel Data Fetching
//             </h3>
//             <h5>
//                 {JSON.stringify(resPosts).slice(0, 100)}
//             </h5>
//             <h5>
//                 {JSON.stringify(resUsers).slice(0, 100)}
//             </h5>
//         </>
//     )
// }



// *** SEQUENTIAL DATA FETCHING
const baseUrl = 'https://jsonplaceholder.typicode.com'

const getDataPosts = async() => {
    try {
        const response = await fetch(`${baseUrl}/posts`)
        return response.json()
    } catch (error) {
        console.log(error)
    }
}

const getDataUsers = async() => {
    try {
        const response = await fetch(`${baseUrl}/users`)
        await new Promise((resolve, reject) => {
            setTimeout(resolve, 2000)
        })

        return response.json()
    } catch (error) {
        console.log(error)
    }
}

const ComponentUsers = async() => {
    const resUsers = await getDataUsers()

    return(
        <h5>
            {JSON.stringify(resUsers).slice(0, 100)}
        </h5>
    )
}

export default async function FetchingPattern(){

    const resPosts = await getDataPosts()
    

    return(
        <>
            <h3>
                Paralel Data Fetching
            </h3>
            <h5>
                {JSON.stringify(resPosts).slice(0, 100)}
            </h5>
            <Suspense fallback={<h3>Loading</h3>}>
                <ComponentUsers />
            </Suspense>
        </>
    )
}



/*
    Paralel Data Fetching: Fetching ke berbagai sumber dan ingin menampilkan secara bersamaan
    Sequential Data Fetching: Fetching ke berbagai sumber dan menampilkan hasilnya supaya tidak saling tunggu
*/