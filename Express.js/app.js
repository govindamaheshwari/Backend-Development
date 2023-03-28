const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const sequelize=require('./util/database');
const User=require('./models/user.js')
const Product=require('./models/product.js')

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use((req,res,next)=>{
    User.findAll({where:{id:1}})
    .then(user=>{
        req.user=user[0];
        next()
    
    }).catch((err)=>console.log(err))

})

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);
Product.belongsTo(User,{constraints:true,onDelete:'CASCADE'});
User.hasMany(Product);
sequelize.sync().then(user=>{return User.findAll({where:{id:1}})})
.then((user)=>{
    if(!user[0]){
        return User.create({name:'Max',email:'max@gmail.com'})
    }
    return user[0]
})
.then(user=>
{console.log(user)
app.listen(3000)}
).catch((err) =>console.log(err))


