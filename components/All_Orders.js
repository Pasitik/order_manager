import React from 'react'
import OrderList from "../components/OrderList"

const All_Orders = () => {
  return (
    <div className='w-full'>
        <table className=' table-fixed w-full'>
            <thead>
                <th align="left" className=''>Food</th>
                <th align="left">Quantity</th>
                <th align="left">Price</th>
                <th align="left">Customer</th>
                <th align="left">Location</th>
                <th align="left">Phone Number</th>
                <th align="left">Time</th>
            </thead>
            <tbody>
                    {
                        OrderList.map((order)=>{
                            return(
                            <tr>
                            <td>{order.Food}</td>
                            <td>{order.Quantity}</td>
                            <td>{order.Price}</td>
                            <td>{order.Customer}</td>
                            <td>{order.Location}</td>
                            <td>{order.Phone}</td>
                            <td>{order.Time}</td>
                            </tr>
                            )

                        })
                    }

            </tbody>
        </table>
    </div>
  )
}

export default All_Orders