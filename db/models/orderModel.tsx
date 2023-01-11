import mongoose from "mongoose"; 

const OrderSchema = new mongoose.Schema({
    food:{
        type: String,
        required:true
    }, 
    quantity:{
        type: Number,
        required:true
    }, 
    price:{
        type: Number,
        required:true
    }, 
    customer:{
        type: String,
        required:true
    }, 
    location:{
        type: String,
        required:true
    }, 
    phone:{
        type: String,
        required:true
    }, 
    time:{
        type: String,
        required:true
    }

},{timestamps:true});

export default mongoose.models.order || mongoose.model('order', OrderSchema)

