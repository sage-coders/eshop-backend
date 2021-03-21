const productRepository = require('../repositories/product-repository');

const createProduct = async function (req, res) {
  try {
    const productToCreate = req.body;
    await productRepository.insertOne(productToCreate);
    return res.status(200).json(productToCreate);
  }
  catch (error) {
    return res.status(500).json(error);
  }
}

const getProductById = async function (req, res) {
  try {
    const id = req.params.id;
    const product = await productRepository.getById(id);
    return res.status(200).json(product);

  }
  catch (error) {
    return res.status(500).json(error);
  }

}
module.exports = {
  createProduct,
  getProductById
}
