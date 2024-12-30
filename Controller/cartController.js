const carts = require('../Models/cartModel')
exports.addToCart = async (req, res) => {
    try {
        const userId = req.payload
        const { image, price, title, id } = req.body
        const existing = await carts.findOne({ userId, id })
        if (existing) {
            existing.quantity += 1
            await existing.save()
            res.status(200).json("Cart Quatity Updated ")
        } else {
            const newCartItem = new carts({ image, price, title, id, quantity: 1,userId })
            await newCartItem.save()
            res.status(200).json("Item Added To Cart")
        }
    }
    catch (err) {
        console.log(err);
        res.status(400).json(err)
    }
}
exports.getCart = async (req, res) => {
    try {
        const userId = req.payload
        const cartlist = await carts.find({ userId })
        res.status(200).json(cartlist)
    }
    catch (err) {
        console.log(err);
        res.status(400).json(err)
    }
}
exports.removeCart = async (req, res) => {
    try {
        const { id } = req.params
        const item = await carts.findByIdAndDelete(id)
        res.status(200).json(item)
    }
    catch (err) {
        console.log(err);
        res.status(400).json(err)
    }
}
exports.increaseQuantity = async (req, res) => {
    try {
        const { id } = req.params
        const item = await carts.findOne({_id:id})
        item.quantity += 1
        await item.save()
        res.status(200).json(item)
    }
    catch (err) {
        console.log(err);
        res.status(400).json(err)
    }
}
exports.decreseaQuantity = async (req, res) => {
    try {
        const { id } = req.params
        const item = await carts.findOne({_id:id})
        // console.log(item);
        
        if (item.quantity <= 1) {
            await item.deleteOne()
            res.status(200).json(' Item Removed')
        } else {
            item.quantity -= 1
            await item.save()
            res.status(200).json(item)
        }
    }
    catch (err) {
        console.log(err);
        res.status(400).json(err)
    }


}
exports.emptyCart=async(req,res)=>{
   try{
    const userId=req.payload
    const result=await carts.deleteMany({userId})
    res.status(200).json("Cart is Empty")
}
catch (err) {
    console.log(err);
    res.status(400).json(err)
}

   }