import { urlApi } from "./../../utils/urlApi.js";

export default async function Fetching(){

    const response = await fetch(`${urlApi}/products`, {
        method: 'GET'
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