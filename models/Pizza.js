const {Schema,model}=require('mongoose')
const dateFormat=require('../utils/dateFormat')
const PizzaSchema=new Schema({
    pizzaName:{
       type:String 
    },
    createdBy:{
        type:String
    },
    createdAt:{
        type:Date,
        default:Date.now,
        get:(createdAtVal)=>dateFormat(createdAtVal)
        
    },
    size:{
        type:String,
        default:'large'
    },
    toppings:[],
    comments:[{
        type:Schema.Types.ObjectId,
        ref:'Comment'
    }]
},
{
    toJSON:{
        virtuals:true,
        getters:true
    },
    id:false
}
)
PizzaSchema.virtual('CommentCount').get(function(){
    return this.comments.reduce((total,comment)=>total+comment.replies.length+1,0)
})
// create the Pizza model using the PizzaSchema
const pizza=model('pizza',PizzaSchema)
module.exports=pizza









// const developers = [
//     {
//       name: "Eliza",
//       experience: 7,
//       role: "manager"
//     },
//     {
//       name: "Manuel",
//       experience: 2,
//       role: "developer"
//     },
//     {
//       name: "Kim",
//       experience: 5,
//       role: "developer"
//     }
//   ];
  
//   function calculateAverage(total, years, index, array) {
    // accumulator - total
    // currentValue - years
    // currentIndex -index
    // array -array
//     console.log(total,years,index,array)
//     total += years;
//     return index === array.length-1 ? total/array.length: total
//   }
  
//   const average = developers.map(dev => dev.experience).reduce(calculateAverage);
//   console.log(average)