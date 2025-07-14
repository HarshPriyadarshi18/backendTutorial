let express = require('express');
const { dbConnection } = require('./dbConnection');
const { ObjectId } = require('mongodb');

let app = express();

//mildware call
app.use(express.json());
app.get('/student-read',async(req,res)=>{
    let mydb=await dbConnection();
   let studentcollection = mydb.collection("student");
    let studentData = await studentcollection.find().toArray();
    let resObj={
        status:1,
        message:"student data fetched successfully",
        data:studentData
    }
    res.send(resObj);
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
app.delete('/student-delete/:id',async(req,res)=>{
    let {id}=req.params;   //  6872858323baf71b255ff302
  //  console.log(paramsdata)
  let mydb=await dbConnection();
    let studentcollection = mydb.collection("student");
    let deleteRes=await studentcollection.deleteOne({_id:new ObjectId({id})});
    let resObj={
        status:1,
        message:"student deleted successfully",
        data:deleteRes
    }
    res.send(resObj);

})
app.put('/student-update/:id',async(req,res)=>{
    let {id}=req.params;   //  68728b9bdd3dea28ab931bd2
    let mydb=await dbConnection();
    let studentcollection = mydb.collection("student");
   /* let obj={
    sname:req.body.sname,
    semail:req.body.semail
   }*/
     let obj = {};
    if (req.body.sname !== undefined && req.body.sname !== "") {
        obj.sname = req.body.sname;
    }
    if (req.body.semail !== undefined && req.body.semail !== "") {
        obj.semail = req.body.semail;
    }


   let updateRes=await studentcollection.updateOne({_id:new ObjectId({id})},{$set:obj});
    let resObj={
          status:1,
          message:"student updated successfully",
          data:updateRes
     }
     res.send(resObj);

})

app.listen(8000)