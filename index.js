const express = require('express');
const productController = require('./controllers/product-controller');

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.post('/api/products', productController.createProduct);
app.get('/api/products/:id', productController.getProductById);
app.listen(port, () => {
  console.log('It is running...');
});

