import React from 'react'
import Link from 'next/link'
import { useState } from 'react'

const Home = () => {
  const [option, setOption]=useState("")
  return (
    <div className='bg-gray-300 w-full'>
        <div className='flex  items-center bg-gradient-to-r from-green-500 via-pink-500 to-red-500 w-full h-20'>
          <div className='flex justify-end w-full'><span className=' text-white font-bold'> Cs Kitchen</span></div>
          <div className='flex justify-end w-full'><span className=' bg-white mx-5 border-solid border-2 rounded p-4 text-red-500'>LOGOUT</span></div>
        </div>

        <div className='flex justify-center w-full'>
          <div className='bg-white w-w-80 mb-5'>
            <div>
              <ul className='flex'>
                <li className=' p-5 text-red-500 active:bg-red-300 focus:bg-red-300 hover: cursor-pointer' onClick={()=>setOption("orders")}>ALL ORDERS</li>
                <li className=' mx-5 p-5 text-red-500 active:bg-red-300 focus:bg-red-300 hover: cursor-pointer' onClick={()=>setOption("add")}>NEW MENU ITEM</li>
                <li className=' mx-5 p-5 text-red-500 active:bg-red-300 focus:bg-red-300 hover: cursor-pointer' onClick={()=>setOption("remove")}>REMOVE MENU ITEM</li>
                <li className=' mx-5 p-5 text-red-500 active:bg-red-300 focus:bg-red-300 hover: cursor-pointer' onClick={()=>setOption("overview")}>OVERVIEW</li>
              </ul>
            </div>
          </div>
        </div>

        <div className='flex justify-center w-full'>
          <div className='bg-white w-w-80 mb-5'>
            <div>
              {
                option =="orders" ? <div>orders</div> : option =="add" ? <div>add item</div> : option =="remove" ? <div>remove item</div> : option =="overview" ? <div>overview</div> :""
              }
              <ul className=''>
                <li className=''>ALL ORDERS</li>
                <li className=''>NEW MENU ITEM</li>
                <li className=''>REMOVE MENU ITEM</li>
                <li className=''>OVERVIEW</li>
              </ul>
            </div>
          </div>
        </div>

    </div>
  )
}

export default Home