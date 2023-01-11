import React from 'react'

const Remove = () => {
  return (
    <div className='w-full'>
        <table className=' table-fixed w-full'>
            <thead>
                <th align="left" className=''>Food</th>
                <th align="left">Details</th>
                <th align="left">Price</th>
                <th align="left">Action</th>
            </thead>
            <tbody>
                <tr>
                <td className=' col-span-2'>Banku with grilled tillapia</td>
                <td> Hot and Spicy </td>
                <td>30</td>
                <td> <button>Remove</button> </td>
                </tr>

            </tbody>
        </table>
    </div>
  )
}

export default Remove