const router=require('express').Router()
const pizzaRoutes=require('./pizza-routes')
const commentRoutes = require('./comment-route');

router.use('/pizzas',pizzaRoutes)

router.use('/comments', commentRoutes);


module.exports=router

