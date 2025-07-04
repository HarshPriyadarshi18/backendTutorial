//one variable let
let help=require("http");
let server=help.createServer((req, res) => {
  //manual routing made
  if(req.url=="/news"){//http://localhost:8000/news
    let obj={
        status:1,
        data:[
            {id:1, title:"News 1", content:"Content of News 1"},
            {id:2, title:"News 2", content:"Content of News 2"},
        ]
    }
    res.end(JSON.stringify(obj));
  }
  if(req.url=="/about"){

  }
  if(req.url=="/"){
     res.end("Hello, World!");
  }
 // res.end("Hello, World!"); 
});

server.listen("8000") //http://localhost:8000