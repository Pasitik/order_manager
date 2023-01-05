import mongoose from "mongoose"; 

const OrderSchema = new mongoose.Schema({
    food:{
        type: String
    }, 
    quantity:{
        type: String
    }, 
    price:{
        type: String
    }, 
    customer:{
        type: String
    }, 
    location:{
        type: String
    }, 
    phone:{
        type: String
    }, 
    time:{
        type: String
    } 

});

export default mongoose.models.order || mongoose.model('order', OrderSchema)

