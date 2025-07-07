let express = require('express');
let app = express();
app.use(express.json());
let mytoken="12345";

//middleware 
let checkToken=(req,res,next)=>{
    if(req.query.token=="" || req.query.token==undefined){
        return res.send({status:0,msg:"please fill the token"});
    }
   if(req.query.token!=mytoken){
        return res.send({status:0,msg:"invalid token"});
    }


   // console.log("checkToken middleware called");
    next();
}
app.use(checkToken);
//home page /localhost:8000
app.get('/',(req,res)=>{
    res.send({status:1,msg:"Home page API"});
})
app.get('/news',(req,res)=>{
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
app.listen(8000)
