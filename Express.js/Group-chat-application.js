const express=require('express');
const app=express();
const fs=require('fs');
const bodyParser=require('body-parser')
app.use(bodyParser.
    urlencoded({extended:false}))
app.use('/login',(req,res,next)=>{
    res.send('<form action="/"  onSubmit="localStorage.setItem(`Username`,document.getElementById(`username`).value)"> <input id ="username" type="text" name="username" placeholder="username"> <button type="submit"> Enter Username</button></input></form>')
})
app.get('/',(req,res,next)=>{
    console.log(6)
    fs.readFile("username.txt",(err,data)=>{
        if (err){
            console.log(err)
            data="chat doesn't exits."
        }
       
        res.send(`${data}<form action="/" method ="POST" onSubmit="document.getElementById('username').value=localStorage.getItem('Username')"> <input id ="message" type="text" name="message" placeholder="message"> <input id ="username" type="hidden" name="username"><button type="submit">Send</button></input></input></form>`)
    })
})
app.post('/',(req,res,next)=>{
    console.log(5)
    console.log(req.body.username)
    console.log(req.body.message)
    fs.writeFile("username.txt",`${req.body.username} : ${req.body.message}`,{flag:'a'},(err,data)=>{
        if (err){
            console.log(err)
        }
        res.redirect("/")
    })
})

    

//const server=http.createServer(app);
app.listen(3000)