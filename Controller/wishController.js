const wishlists = require('../Models/wishModel')

exports.addToWishlist = async (req, res) => {
    try {
        const { id, title, description, category, price, image } = req.body
        const userId = req.payload
        const existing = await wishlists.findOne({ id, userId })
        // console.log(existing);
        
        if (existing) {
            res.status(406).json("Product Already Exist In Wishlist ")
        } else {
            const newWish = new wishlists({
                id, title, description, category, price, image, userId
            })
            await newWish.save()
            res.status(200).json(newWish)
        }
    }
    catch (err) {
        console.log(err);
        res.status(400).json(err)
    }

}


exports.getWishlistItems = async (req, res) => {
    try {
        const userId = req.payload
        const wishItems = await wishlists.find({ userId })
        res.status(200).json(wishItems)
    }
    catch (err) {
        console.log(err);
        res.status(400).json(err)
    }

}

exports.removeFromWishlist=async(req,res)=>{
    try{
        const {id}=req.params
        const val=await wishlists.findOneAndDelete({_id:id})
        res.status(200).json(val)
    }
    catch (err) {
        console.log(err);
        res.status(400).json(err)
    }

}