const express=require('express');  
const bodyParser=require('body-parser')
const app=express()

const adminroutes=require('./routes/admin.js');
const shoproutes=require('./routes/shop.js');


app.use(bodyParser.urlencoded({extended:false}))
app.use('/admin',adminroutes)
app.use('/shop',shoproutes)
app.use((req,res,next)=>{
   
    res.status(404).send('<h1>Page not found</h1>')
})


//const server=http.createServer(app); 
app.listen(3000)
