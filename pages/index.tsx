import React from 'react'
import Link from 'next/link'
import All_Orders from "../components/All_Orders"
import Remove from "../components/Remove"
import { useState,useEffect } from 'react'
import axios from 'axios'


export const getServerSideProps=async()=>{
  
  const response= await axios.get("http://localhost:3000/api/orders")  
  return{
    props:{
      orderList: response.data
    }
  }
}


interface IProps{
  orderList:{
    id:string 
    food:string
    quantity:number 
    price:number 
    customer: string 
    location: string 
    phone:string 
    time: string 
  }[]
}

const Home:React.FC<IProps> = ({orderList}) => {

  const [option, setOption]=useState("")

  useEffect(()=>setOption("orders"),[])
  return (
    <div className='bg-gray-300 w-full'>
        <div className='flex  items-center bg-gradient-to-r from-green-500 via-pink-500 to-red-500 w-full h-20'>
          <div className='flex justify-end w-full'><span className=' text-white font-bold'> Cs Kitchen</span></div>
          <div className='flex justify-end w-full'><span className=' bg-white mx-5 border-solid border-2 rounded p-4 text-red-500 hover: cursor-pointer'>LOGOUT</span></div>
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
          <div className='bg-white w-w-80 mb-5 p-5'>
            <div>
              {
                option =="orders" ? <div className='w-full'> <All_Orders orderList={orderList}/> </div> : option =="add" ? <div>add item</div> : option =="remove" ? <div className='w-full'> <Remove/> </div> : option =="overview" ? <div>overview</div> :""
              }
            </div>
          </div>
        </div>

    </div>
  )
}

export default Home