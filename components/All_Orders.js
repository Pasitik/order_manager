import React from 'react'
//import OrderList from "../components/OrderList"

const All_Orders = ({orderList}) => {
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
                        orderList.map((item)=>
                            (
                            <tr key={item.id}>
                            <td>{item.food}</td>
                            <td>{item.quantity}</td>
                            <td>{item.price}</td>
                            <td>{item.customer}</td>
                            <td>{item.location}</td>
                            <td>{item.phone}</td>
                            <td>{item.time}</td>
                            </tr>
                            )

                        )
                    }

            </tbody>
        </table>
    </div>
  )
}

export default All_Orders