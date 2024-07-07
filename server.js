const mongoose =require('mongoose');
const express = require('express');
const login =require('./backend/models/login');
const loginRoute=require('./backend/routers/auth')

const PORT=process.env.PORT || 3000;

const app = express();

const connection_string="mongodb+srv://Pranathi:pranathi123@cluster0-voktq.mongodb.net/<dbname>?retryWrites=true&w=majority";    //now lets take the url and place here

//const connection_string='mongodb+srv://kaushikkumar:bpBhSMsLjUhNDvjc@mayprojectcluster-59tzw.mongodb.net/test?retryWrites=true&w=majority';
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
  });

  app.use('/api/auth',loginRoute);

  // Pranathi can you call me now otherwise it would be difficult just for 5min will finish yeah sure okay

mongoose.connect(connection_string , {useNewUrlParser: true,useUnifiedTopology: true},
    ()=> console.log("connected to db"));



//localhost://api/login
//now you can call this api what is /api it is like interface between frontend and db in simple it will take or give you data
//oh ok we have to run again na ya correct
app.listen(PORT,()=>{
    console.log(`listning at port ${PORT}`);
})

