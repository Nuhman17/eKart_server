const mongoose=require('mongoose')
const cartSchema=new mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    userId:{
        type:String,
        required:true
    }
})
const carts=new mongoose.model('carts',cartSchema)
module.exports=carts