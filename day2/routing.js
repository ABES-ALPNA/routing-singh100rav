const server=require("http")
server.createServer((req,res)=>{
if(req.url==='/')
{
    res.write("This is my first page")
}
else
    if(req.url==="/about"){
 res.write("This is about page")
}
else
    if(req.url==="/contect"){
        res.write("This is contact page")
    }
    else
    {
        res.write("404 page not not found")
    }
})
.listen(6000,()=>{
    console.log("server started");
});