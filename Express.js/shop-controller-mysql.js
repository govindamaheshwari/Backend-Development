const Product = require('../models/product');
const Cart = require('../models/cart')
exports.getProducts = (req, res, next) => {
  Product.fetchAll()
  .then(([rows,fieldData])=>{
    res.render('shop/product-list', {
      prods: rows,
      pageTitle: 'Shop',
      path: '/'
    })   
  }).catch((err)=>console.log(err))
}

exports.getProduct=(req,res,next)=>{
  const prodId=req.params.productId
  Product.findId(prodId).then(([product])=>{
    console.log(product)
    console.log(product[0])
    res.render('shop/product-detail',{
      product:product[0],
      pageTitle:product[0].title,
      path:'/products'
    })
  }).catch((err)=>console.log(err))
}


exports.getIndex = (req, res, next) => {
  Product.fetchAll()
  .then(([rows,fieldData])=>{
    res.render('shop/index', {
      prods: rows,
      pageTitle: 'Shop',
      path: '/'
    }); 
  });
};

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart'
  });
};
exports.postCart =(req,res,next)=>{
  console.log(2)
  const prodId=req.body.productId
  Product.findId(prodId,(product)=>{
    Cart.addProduct(prodId,product.price)
    res.redirect("/cart");
  })
};
exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};
