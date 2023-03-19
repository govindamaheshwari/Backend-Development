const express=require('express');
const path=require('path');
const router=express.Router();
const productcontroller=require('../controller/products.js')

router.get('/',(productcontroller.getShow))
module.exports=router