import Image from 'next/image'
import InputComponent from './login/inputcomponent'
import { AiTwotoneLike } from "react-icons/ai";
import { BiCommentDots } from "react-icons/bi";
import { VscLocation } from "react-icons/vsc";

export default function Home() {
  return (
    <main className='px-10 py-10'>
      <section className='grid grid-cols-5'>
        <div className='col-span-2 px-10 py-10 bg-gray-300 h-[400px] rounded-md'>
          <h1 className='font-bold text-3xl'>
            Start Your Post!
          </h1>
          <InputComponent label='caption' type='text' />
          <InputComponent label='image url' type='text' />
          <button className="btn bg-blue-500 text-white mt-2 w-full">
            Post 
          </button>
        </div>
        <div className='col-span-3 px-10'> 
          <section className="mb-10">
            <div className="card card-compact w-full bg-base-100 shadow-xl">
              <div className="card-body">
                <div>
                  <h2 className="card-title">@purwadhikadigitalschool</h2>  
                  <h5 className='flex items-center'><VscLocation /> GOP-09 BSD City</h5>
                </div>
              </div>
              <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
              <div className="card-body">
                <div className='flex items-center justify-between'>
                  <h2 className="card-title">@purwadhikadigitalschool</h2>  
                  <div className='flex'>
                    <AiTwotoneLike className='text-3xl' />
                    <BiCommentDots className='text-3xl' />
                  </div>
                </div>
                <p>Barang lucu. Hehehe</p>
                <p className='mt-5 text-xs'>
                  Sat, 17 Aug 1945
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  )
}
