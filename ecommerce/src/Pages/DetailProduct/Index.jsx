import { useEffect, useState } from 'react';
import { axiosInstance } from './../../Lib/AxiosInstance';
import { useParams } from 'react-router-dom';

export default function DetailProduct(){
    const params = useParams()
    const slug = params.slug 
    console.log(slug)

    const [data, setData] = useState([])

    const getDetail = async() => {
        try {
            const response = await axiosInstance.get(`/products/${slug}`)
            console.log(response)
            setData(response.data)
        } catch (error) {
            
        }
    }

    useEffect(() => {
        getDetail()
    }, [])

    return(
        <>
            <h1>
                Product 
            </h1>
        </>
    )
}