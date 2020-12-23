const express = require('express');
const app = express();

const readProducts = require('./readFileProducts');
const addProduct = require('./addNewProduct');
const filterProduct = require('./filterProducts');
const manageStock = require('./manageStock');

const { v4: uuidv4 } = require('uuid');

app.use(express.json());

app.get('/', function(req, res){
    res.send('Hello World')
})

app.get('/readProducts', function(req, res){
    res.send(readProducts.data.readFilePro('products.json', 'utf8'));
})

app.post('/addProduct', function(req, res){

    let newP = {
        id: uuidv4(),
        productName: req.body.productName,
        price: req.body.price,
        category: req.body.category,
        stock: req.body.stock
    };

    res.send(addProduct.data.addNewPro(newP, 'products.json'));

});

app.post('/addProductCart', function(req, res){

    res.send(addProduct.data.addNewPro(req.body, 'shoppingCart.json'));

});

app.get('/filterProduct', function(req, res){
    res.send(filterProduct.data.filterFilePro(req.body.keyword));
});

app.put('/manageStock', function(req, res){
    res.send(manageStock.data.manageStock(req.body.id, req.body.quantity));
})

app.listen(3000, () => {
    console.log('El servidor esta inicializado');
});
