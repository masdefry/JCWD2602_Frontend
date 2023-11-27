import { urlApi } from "./../../utils/urlApi.js";

export default async function Fetching(){

    // cache: 'force-cache' ---> SSG
    // cache: 'no-store' ---> SSR
    // next: { revalidate: 20 } ---> ISR

    const response = await fetch(`${urlApi}/products`, {
        method: 'GET',
        // cache: 'no-store'
    })
    const data = await response.json()

    return(
        <>
            <h1>
                Data Fetching 
            </h1>
            <ol>
                {
                    data.map((item, index) => {
                        return(
                            <li>
                                {item.name}
                            </li>
                        )
                    })
                }
            </ol>
        </>
    )
}