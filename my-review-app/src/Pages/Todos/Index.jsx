import { useEffect, useState } from 'react';
import { AxiosInstance } from './../../Lib/AxiosInstance';

export default function Todos(){
    const[data, setData] = useState([]) //[] ---> [{}]

    const onGetData = async() => {
        try {
            const res = await AxiosInstance.get('/todos')
            console.log(res.data)
            setData(res.data)
        } catch (error) {
            
        }
    }

    useEffect(() => {
        // Get Todos from db.json
        onGetData()
    }, [])

    return(
        <div className="flex flex-col items-center py-3">
            <section className="py-10 flex gap-1">
                <input type="text" placeholder="Input Your Todo" className="w-[500px] px-3 py-1 border border-blue-500 rounded-md" />
                <button className="btn bg-blue-500 px-3 py-1 text-white hover:bg-gray-300 hover:text-black rounded-md">
                    Create
                </button>
            </section>
            <section>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                        <tr>
                            <th></th>
                            <th>Todo</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        
                        {
                            data.map((item, index) => {
                                return(
                                    <tr>
                                        <th>1</th>
                                        <td className="text-lg">{item.todo}</td>
                                        <td>
                                            <button className="btn bg-red-600 text-white">
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    )
}