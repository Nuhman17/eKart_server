const mongoose=require('mongoose')

mongoose.connect(process.env.DB_STRING).then(res=>{
   console.log("Server Connected to MongoDB") 
}).catch(err=>{
    console.log(err)
})