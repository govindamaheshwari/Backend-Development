const express=require('express');
const path=require('path')
const productcontroller=require('../controller/products.js')
const router=express.Router();

router.get('/add-product',productcontroller.getAddproduct)
router.use('/product',productcontroller.getShop)
module.exports=router; 