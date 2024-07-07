const router = require('express').Router();
const login = require('../models/login');

router.get('/register',async (req,res)=>{

    try{
    const users=await login.find({});
    return res.status(200).send(users);
    }catch(error){
        console.log(error);

        return res.status(500).send({error:error})
    }

})


router.post('/login',async (req,res)=>{
    try{

        const userDetails=new login({
            Firstname:req.body.firstname,
            Lastname:req.body.lastname,
            mailId:req.body.email,
            password:req.body.password

        })
        console.log("running");
        const user=await userDetails.save();
        return res.status(200).send(user);
        
        

        res.status(200).send("executed");
    
       }catch(error){
           console.log(error);

           return res.status(500).send({error:error})
       }

})


module.exports = router;