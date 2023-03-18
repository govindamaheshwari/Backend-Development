const express=require('express');
const path=require('path')
const router=express.Router();

router.get('/contact',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','contact-user.html'))
})
router.use('/success',(req,res,next)=>{
    console.log(2)
    res.send('<h1>Form successfully filled</h1>')
})
module.exports=router; 