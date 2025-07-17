let express=require('express');
var mongoose=require('mongoose');
let EnquiryModel=require('./models/enquiry.model.js');
require('dotenv').config();

let app=express();
app.use(express.json());
app.post('/api/enquiry-insert',(req,res)=>{
    let {sname,semail,sphone,smessage}=req.body;
    let enquiry=new EnquiryModel({
        name:sname,
        email:semail,
        phone:sphone,
        message:smessage
    });
    enquiry.save().then(()=>{
      res.send({status:1, message:"Enquiry inserted successfully"});
    }).catch((err)=>{
        res.send({status:0, message:"Error inserting enquiry"},err);
    })
 
})
app.get('/api/enquiry-list',async(req,res)=>{
    let enquiryList=await EnquiryModel.find();
    res.send({status:1,message:"Enquiry list fetched successfully",data: enquiryList});
   // res.status(200).json({status:1,message:"Enquiry list fetched successfully",data:[]});
}
)
app.delete('/api/enquiry-delete/:id',async(req,res)=>{
    let enquiryId=req.params.id;
    let deleteEnquiry=await EnquiryModel.deleteOne({_id:enquiryId});
    res.send({status:1,message:"Enquiry deleted successfully",data:deleteEnquiry});
})
//connect to MongoDB
mongoose.connect(process.env.DBURL).then(()=>{
    console.log("Connected to MongoDB");
    app.listen(process.env.PORT,()=>{
        console.log(`Server is running on port ${process.env.PORT}`);
    });

});