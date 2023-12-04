'use server'

import {getCookies} from "./../features/cookies"
import CardPost from "./../components/cardPost"

const onFetchData = async() => {
  try {
    let res = await fetch('http://localhost:5000/posts?_expand=user', {
      cache: 'no-store'
    })
    res = res.json()
    return res 
  } catch (error) {
    console.log(error)
  }
}

export default async function Home() {

  const data = await onFetchData()
  const {value} = await getCookies('userData')
 
  return (
    <main className='px-32 py-10'>
      <section className='grid grid-cols-5'>
        <div className='col-span-2 px-10 py-10 bg-gray-100 h-[400px] rounded-md'>
          <h1 className='font-bold text-3xl'>
            Trending!
          </h1>
          <div className='mt-5 flex flex-col gap-3'>
            <h1 className='text-xl'>
              #timnasindonesia
            </h1>
            <h1 className='text-xl'>
              #purwadhikaschool
            </h1>
            <h1 className='text-xl'>
              #masterchefina
            </h1>
          </div>
        </div>
        <div className='col-span-3 px-10'> 
          {
            data.map((item, index) => {
              return(
                <CardPost item={item} value={value} />
              )
            })
          }
        </div>
      </section>
    </main>
  )
}
