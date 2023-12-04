import InputTodo from './../components/inputTodo'
import ListTodo from '@/components/listTodo'

// 1.1. Fetching Data on Server Component
const onFetchData = async() => {
  try{
    const res = await fetch('http://localhost:5000/todos', {
      method: 'GET',  
      cache: 'no-store'
    })

    // Mengambil Data yang Berbentuk JSON, dan Dikonversikan Menjadi Object JS
    const resJSON = await res.json()
    
    return resJSON
  }catch(error){

  }
}

export default async function Home() {

  // 1.2. Call Fetch Data Function (1.1.)
  const res = await onFetchData() // res berisi array of object hasil return resJSON
  console.log(res)
  return (
    <main className="flex justify-center bg-blue-100 h-screen py-10">
      <div className="w-[700px]">
        <InputTodo />
        {
          // 1.3. Mapping Hasil Res (1.2.)
          res?.map((item, index) => {
            return(
              // 1.4. Kirim Item Melalui Props dengan nama "bebas"
              <ListTodo bebas={item} />
            )
          })
        }
      </div>
    </main>
  )
}
