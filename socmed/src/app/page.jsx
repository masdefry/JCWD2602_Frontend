import { IoIosHeartEmpty } from "react-icons/io";
import { BiCommentDots } from "react-icons/bi";
import { VscLocation } from "react-icons/vsc";
import { CgMenuRound } from "react-icons/cg";
import {getCookies} from "./../features/cookies"
import LikePost from './../components/likePost';

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
                <section className="mb-10">
                  <div className="card card-compact w-full bg-base-100 shadow-xl">
                    <div className="card-body">
                      <div className="flex justify-between">
                        <div>
                          <h2 className="card-title">@{item?.user?.username}</h2>  
                          <h5 className='flex items-center'><VscLocation /> {item.location}</h5>
                        </div>
                        <div>
                          <CgMenuRound className='text-2xl' />
                        </div>
                      </div>
                    </div>
                    <figure><img src={`${item.image}`} alt="Shoes" /></figure>
                    <div className="card-body">
                      <div className='flex items-center justify-between'>
                        <h2 className="card-title">@{item?.user?.username}</h2>  
                        <div className='flex'>
                          {
                            item?.likes?.includes(Number(value))?
                            <LikePost id={item.id} />
                            :
                            <IoIosHeartEmpty className='text-3xl' />
                          }
                          <BiCommentDots className='text-3xl' />
                        </div>
                      </div>
                      <p>{item.caption}</p>
                      <p className='mt-5 text-xs'>
                        {item.createdAt}
                      </p>
                    </div>
                  </div>
                </section>
              )
            })
          }
        </div>
      </section>
    </main>
  )
}
