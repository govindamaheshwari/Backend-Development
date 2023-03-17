const express=require('express');  
const bodyParser=require('body-parser')
const app=express()
app.use(bodyParser.urlencoded({extended:false}))
app.use('/add-product',(req,res,next)=>{
    res.send('<form action="/product" method ="POST"><input type="text" name="title"><input type="text" name="size"> <button type="submit">Add product </button></input></input></form>')
})
app.use('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
})
app.use((req,res,next)=>{
    console.log("in the another middleware")
    res.send('<h1>hello express</h1>')
})

//const server=http.createServer(app);
app.listen(3000)
