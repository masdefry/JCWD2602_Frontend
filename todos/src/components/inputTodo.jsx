'use client'

// 2.1. Import useRef 
import { useRef } from "react"

// 2.6. Import useMutation
import { useMutation } from "@tanstack/react-query"

// 2.8.
import { useRouter } from "next/navigation"

export default function InputTodo(){
  // 2.2. Define variable untuk mengambil inputan
  const inputTodo = useRef()  

  // 2.9. Define variable untuk useRouter
  const router = useRouter()

  // 2.7. 
  const {mutate} = useMutation({
    mutationFn: async() => {
      await fetch('http://localhost:5000/todos', {
        method: 'POST', 
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          todo: inputTodo.current.value
        })
      })
    }, 

    onSuccess: () => {
      router.refresh()
    }
  })
  
  return(
        <section name='input' className="flex justify-between gap-3">
          {/* 2.3. Pasang variable useRef */}
          <input type="text" ref={inputTodo} placeholder="Type here" className="w-full input input-bordered" />
          <button onClick={() => mutate()} className="btn bg-blue-500 text-white">
            Add
          </button>
        </section>
    )
}