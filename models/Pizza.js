const {Schema,model}=require('mongoose')
const PizzaSchema=new Schema({
    pizzaName:{
       type:String 
    },
    createdBy:{
        type:String
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    size:{
        type:String,
        default:'large'
    },
    toppings:[]
})

// create the Pizza model using the PizzaSchema
const pizza=model('pizza',PizzaSchema)
module.exports=pizza