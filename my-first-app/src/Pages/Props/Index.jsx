const students = [
    { id: 1, name: 'Imm', program: 'JCWD' },
    { id: 2, name: 'Aboy', program: 'JCWD' },
    { id: 3, name: 'Bulan', program: 'JCWD' },
]

import Child from "./Child";
import StudentList from "./StudentList";

export default function Props(){

    const showData = () => {
        const result = students.map((item, index) => {
            return(
                <StudentList data={item} key={index} />
            )
        })

        return result
    }

    return(
        <>
            <h1>
                Props Pages
            </h1>

            {
                showData()
            }
        </>
    )
}