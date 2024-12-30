const mongoose=require('mongoose')
const wishlistSchema=new mongoose.Schema({
    id:{
        type:String,
        required:true
    },


    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true

    },

    price:{
        type:Number,
        required:true
    },
    category:{
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
   
    userId:{
        type:String,
    required:true

    }


})

const wishlists=mongoose.model('wishlists',wishlistSchema)
module.exports=wishlists