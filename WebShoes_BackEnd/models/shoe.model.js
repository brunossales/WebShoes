var mongoose = require('mongoose')

//create schema 
var shoeSchema = mongoose.Schema(
    {
        title: {type: String, require: true, max:100},
        desc: {type: String, require: true, max:200},
        img: {type: String, require: true, max:300},
        price: {type:Number, require: true, maxlength:6}
    }
);

//module for the schema
var ShoeModel = mongoose.model('webshoes', shoeSchema)

module.exports = ShoeModel