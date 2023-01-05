import dbConnect from "../../../db/dbConect"
import order from '../../../db/models/orderModel'


export default async function handler(req, res) {
    const {method} =req

    await dbConnect() 

    if(method==="GET"){
      try{
        const orders = await order.find({})
        res.status(200).json(orders)

      }catch(error){
        res.status(500).json(error)
      }
    }
    if(method==="POST"){
      try{
        const orders =await order.create(req.body)
        res.status(200).json("added sucessfully")
      }catch(error){
        res.status(500).json(error)
      }

    }

    //res.status(200).json({ name: 'John Doe' })
  }
  
