'use server'

import { BiCommentDots } from "react-icons/bi";
import { VscLocation } from "react-icons/vsc";
import { CgMenuRound } from "react-icons/cg";
import LikePost from './likePost';

export default async function CardPost({item, value}){
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
                    <LikePost id={item.id} likes={item.likes} value={value} />
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
}