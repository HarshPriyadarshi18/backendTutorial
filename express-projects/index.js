let express = require('express');
let app = express();
app.use(express.json());
//home page /localhost:8000
app.get('/',(req,res)=>{
    res.send({status:1,msg:"Home page API"});
})
app.get('/news',(req,res)=>{
    res.send({status:1,msg:"news API"});
})
app.get('/products',(req,res)=>{
    res.send({status:1,msg:"products API"});
})
app.post('/login',(req,res)=>{
    console.log(req.body);
    res.send({status:1,msg:"login API" ,bodydata:req.body,queydata:req.query});
})
app.listen(8000)
