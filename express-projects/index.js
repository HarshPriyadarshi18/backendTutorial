let express = require('express');
require('dotenv').config();
const checkToken = require('./checkTokenMiddleware');
let app = express();
//mytoken used by the env file
//console.log(process.env.mytoken);

app.use(express.json());
// Global token check for all routes
//app.use(checkToken);

//home page /localhost:8000
app.get('/',(req,res)=>{
    res.send({status:1,msg:"Home page API"});
})
app.get('/news',checkToken,(req,res)=>{
    res.send({status:1,msg:"news API"});
})
app.get('/news/:id',(req,res)=>{
    let currentId=req.params.id;
    res.send("news API with id" + currentId);
})
app.get('/products',(req,res)=>{
    res.send({status:1,msg:"products API"});
})
app.post('/login',(req,res)=>{
    console.log(req.body);
    res.status(200).json({
        status:1,
        msg:"login API",
        bodydata:req.body,
        querydata:req.query
    });
    //res.send({status:1,msg:"login API" ,bodydata:req.body,queydata:req.query});
})
app.listen(process.env.PORT)
