var linke = require('../Keys/ClusterLink');

var mongoose = require('mongoose');

//connection local
var mongoDB_URI = linke()
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
