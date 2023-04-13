const express=require("express");
const app=express();

app.use(express.static(__dirname+'/public'))
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})

app.get('/index',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})
app.get('/education',(req,res)=>{
    res.sendFile(__dirname+'/education.html')
})
app.get('/skilled',(req,res)=>{
    res.sendFile(__dirname+'/skilled.html')
})
app.get('/follow',(req,res)=>{
    res.sendFile(__dirname+'/follow.html')
})
app.get('/contact',(req,res)=>{
    res.sendFile(__dirname+'/contact.html')
})

app.listen(8080,()=>{
    console.log("server is running")
})