"use client"
import Image from 'next/image'
import { useState } from 'react'

import qq from '../../public/asli.jpg'



const Home = () => {



  const [todos, setTodos] = useState([
    { movie: "Eating", id: 1 },
    { movie: "Coding", id: 2 },
    { movie: "Running in the morning", id: 3 },
    { movie: "Fasting", id: 4 },
    { movie: "Celebrating", id: 5 },

  ]);



  const [inputVal, setInput] = useState("")

  const [id, setId] = useState(0)


  const addItem = () => {
    let obj: any = todos.find(item => item.id == id)

    if (obj) {
      let newArray = todos.filter(item => item.id !== obj.id)

      setTodos([{ movie: inputVal, id: id }, ...newArray])
      setInput("")
      setId(0)
      return
    }
    setTodos([{ movie: inputVal, id: id }, ...todos])
    setInput("")
    setId(0)
  }

  const editItem = (id: any) => {

    let obj: any = todos.find(item => item.id == id)
    setInput(obj.movie)
    setId(obj.id)
  }

  const delItem = (id: any) => {
    let newArray = todos.filter((item) => item.id !== id)
    setTodos([...newArray])

  }



  return (
    <div className="relative">
      <Image src={qq} className=" " alt="Your Image" />
      <div className="absolute top-0 left-0 flex items-center justify-center w-full  ">
   
        <div className=" bg-gray-900 bg-opacity-25  text-white w-3/4 rounded-xl mt-[30%] pb-16 pt-10 shadow-2xl shadow-gray-800 ">

          <h1 className="text-4xl font-bold text-center">Todo App</h1>
          <div className=' flex justify-center mt-7'>
            <input type="text"
              placeholder='  Enter Your Todo'
              onChange={(e) => setInput(e.target.value)}
              value={inputVal}



              className='rounded-2xl w-3/4 focus:outline-none h-9 bg-transparent border py-2 pl-2' />
            <button onClick={addItem} className='rounded-2xl bg-transparent hover: ease-in-out hover:bg-black w-[16%] h-9 border ml-2 py-2 text-center'>Add</button>
          </div>

          <span
            onChange={(e: any) => setId(e.target.value)}

          ></span>


          <div className=' flex justify-center '>
            <div className="grid grid-cols-1 gap-6 mt-6 w-[92%]">

              {
                todos.map((item: any, i: any) => {
                  return (
                    <div className=' rounded-2xl border bg-transparent p-5' key={i}>

                      <div className=' flex justify-between'>
                        <span className=' rounded-full border h-8 w-8 text-center pt-1'>{i + 1}</span>
                        <button onClick={() => delItem(item.id)} className=' rounded-full border h-8 w-8 text-center pt-1 hover: ease-in-out hover:bg-black'>X</button>
                      </div>

                      <div className=' mt-5 text-xl'>{item.movie}</div>
                      <div className=' text-right'>
                        <button onClick={() => editItem(item.id)} className=' rounded-2xl border w-auto h-auto px-5 py-1 hover: ease-in-out hover:bg-black'>Edit</button>
                      </div>
                    </div>

                  )
                })
              }











            </div>
          </div>





        </div>
      </div>
    </div>
  );
};

export default Home;
