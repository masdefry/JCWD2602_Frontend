// 1.5. 
export default function ListTodo({bebas}){
    return(
        <section name='list' className='py-10'>
          <div className='bg-blue-400 rounded-lg px-3 py-3 mb-3 flex justify-between items-center'>
            <span>
              {bebas.todo}
            </span>
            <button className='btn bg-red-500 font-bold rounded-md px-2 py-1 text-white'>
              Delete
            </button>
          </div>
        </section>
    )
}