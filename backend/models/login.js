const mongoose=require('mongoose');
const { ModuleResolutionKind } = require('typescript');

// this is the sample i place you can chang the fields


const loginSchema =new mongoose.Schema({

    Firstname: {type:String},
    Lastname :{type:String},
    mailId:{type:String, required :true},
    password:{type:String, required :true} // you can validate also with many parameters 

    //type pranathiii...thats it na okay
    //now lets try to save
})

module.exports =mongoose.model('Login',loginSchema); // first argument is the table name you can write is according to you
