var mongoose = require('mongoose')


//connection local
var mongoDB_URI = 'mongodb://127.0.0.1:27017/webshoes'
mongoose.connect(mongoDB_URI, {useNewUrlParser:true})

var db = mongoose.connection

//listeners
db.on('connected',()=>{
    console.log('Mongoose Connected to '+mongoDB_URI);
   });
   db.on('disconnected',()=>{
    console.log('Mongoose Disconnected to '+mongoDB_URI);
   });
   db.on('error',(err)=>{
    console.log('Mongoose Error: '+err);
   });