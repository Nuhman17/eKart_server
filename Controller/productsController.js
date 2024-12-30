const products=require('../Models/productModel')

exports.getProducts=async(req,res)=>{
    try{
        const productList=await products.find()
        res.status(200).json(productList)  
    }
    catch(err){
        console.log(err)
        res.status(400).json(err)
    }
   
}
exports.getSpecificProduct=async(req,res)=>{
    try{
        const {id}=req.params
        // console.log(type(id))
        const product=await products.findOne({_id:id})
        res.status(200).json(product)

    }
    catch(err){
        console.log(err)
        res.status(400).json(err)
    }
   
}
