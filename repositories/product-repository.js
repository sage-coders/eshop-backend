const Product = require('../models/product');

const insertOne = function (product) {
  Product.create(product);

}

const getById = async function (id) {
  const product = await Product.findByPk(id);
  return product;


}

module.exports = {
  insertOne,
  getById
}


