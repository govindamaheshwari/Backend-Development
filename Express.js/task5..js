const express=require('express');  
const path=require('path')
const bodyParser=require('body-parser')
const app=express()

const adminroutes=require('./routes/admin.js');
const shoproutes=require('./routes/shop.js');
const userroutes=require('./routes/contact.js');


app.use(bodyParser.urlencoded({extended:false}))
app.use('/admin',adminroutes)
app.use('/shop',shoproutes)
app.use('/admin',userroutes)
app.use((req,res,next)=>{
   res.sendFile(path.join(__dirname,'views','err.html'))
})


//const server=http.createServer(app); 
app.listen(3000)
