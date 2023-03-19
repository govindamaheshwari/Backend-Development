const path =require('path')
exports.getAddproduct =(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','admin.html'))
}
exports.getShop=(req,res,next)=>{
    console.log(req.body);
    console.log(2)
    res.redirect('/shop/');
}
exports.getShow=(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','shop.html'));
}
exports.getUser=(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','contact-user.html'))
}
exports.getSubmit=(req,res,next)=>{
    console.log(2)
    res.send('<h1>Form successfully filled</h1>')
}