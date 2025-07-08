//let mytoken="12345";
//middleware 
 let checkToken=(req,res,next)=>{
    if(req.query.token=="" || req.query.token==undefined){
        return res.send({status:0,msg:"please fill the token"});
    }
   if(req.query.token!=process.env.mytoken){
        return res.send({status:0,msg:"invalid token"});
    }


   // console.log("checkToken middleware called");
    next();
}
module.exports=checkToken;