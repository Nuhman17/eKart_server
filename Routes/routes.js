const express=require('express')

 const userController=require('../Controller/userController')
const productController=require('../Controller/productsController')
const wishController=require('../Controller/wishController')
const cartController=require('../Controller/cartController')
const jwt = require('../Middleware/jwtMidleware')


 const router=express.Router()

 router.post('/reg',userController.userRegistration)
 router.post('/log',userController.userLogin)
 router.get('/products',productController.getProducts)
 router.get('/product/:id',productController.getSpecificProduct)
 router.post('/addwish',jwt,wishController.addToWishlist)
 router.get('/wishitems',jwt,wishController.getWishlistItems)
 router.delete('/removewish/:id',jwt,wishController.removeFromWishlist)

 router.post('/addcart',jwt,cartController.addToCart)
 router.get('/cartlist',jwt,cartController.getCart)
 router.delete('/delcart/:id',jwt,cartController.removeCart)
 router.get('/increcart/:id',jwt,cartController.increaseQuantity)
 router.get('/decrecart/:id',jwt,cartController.decreseaQuantity)

 router.delete('/emptycart',jwt,cartController.emptyCart)


 module.exports=router
