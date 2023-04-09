const mongoose = require("mongoose");


const productSchema =  mongoose.Schema({
    name:{
        type:String,
        required:[true, "Please Enter product Name"],
        trim:true
    },
    description:{
        type:String,
        required:[true,"Please Enter product description"]
    },
    price:{
        type:Number,
    require:[true,"Please Enter product price"],
maxLength:[8,"Price can not exced 8 characters"]
},
rating:{
    type:Number,
    default:0
},
image:[
    {

        public_id:{
            type:String,
            required:true
        }
    }
],
url:{
  type:String,
  required:true  
},
category:{
    type:String,
    required:[true,"Please Enter Product category"]
},
Stock:{
    type:Number,
    Required:[true,"Please Enter Product Stock"],
    maxLength:[4,"Stock cannot exced 4 character"],
    default:1 
},
numOfReviews:{
    type:Number,
    default:0
},

reviews:[
    {
        name:{
            type:String,
            required:true,
        },
        rating:{
            type:Number,
            required:true,
        },
        comment:{
            type:String,
            required:true
        }
    }
],
createdAt:{
    type:Date,
    default:Date.now
}
})

module.exports = mongoose.model("Product",productSchema)