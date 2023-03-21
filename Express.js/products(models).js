const fs = require('fs');
const path = require('path');

const p = path.join(__dirname,'../','data','products.json')

const getProductsFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      console.log(2)
      cb([]);
    } else {
      console.log(JSON.parse(fileContent))
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(t) {
    this.title = t
  }

  save() {
    getProductsFromFile(products => {
      products.push(this);
      console.log(products)
      fs.writeFile(p, JSON.stringify(products), err => {
        console.log(JSON.stringify(products))
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};
