const express=require('express');
const path=require('path')
const router=express.Router();
const productcontroller=require('../controller/products.js')

router.get('/contact',productcontroller.getUser)
router.use('/success',productcontroller.getSubmit)
module.exports=router; 