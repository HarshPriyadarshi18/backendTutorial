let express = require('express');
const { dbConnection } = require('./dbConnection');

let app = express();

//mildware call
app.use(express.json());
app.get('/student-read',(req,res)=>{
    res.send("student view API");
});
app.post('/student-insert',async(req,res)=>{
   let mydb=await dbConnection();
   let studentcollection = mydb.collection("student");
   let obj={
    sname:req.body.sname,
    semail:req.body.semail
   }
   let insertRes=await studentcollection.insertOne(obj)
   let resObj={
    status:1,
    message:"student inserted successfully",
    data:insertRes
   }
   res.send(resObj);
})

app.listen(8000)