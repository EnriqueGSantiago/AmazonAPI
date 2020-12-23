const fs = require('fs');
const readProducts = require('./readFileProducts');


let writeFileProducts = (dataProducts) => {
    let dataProductsString = JSON.stringify(dataProducts);
    fs.writeFileSync('products.json', dataProductsString,'utf8');
}

var methods = {

    addNewPro: (newProduct, filePath) => {

        let dataProducts = [];
        dataProducts = JSON.parse(readProducts.data.readFilePro(filePath, 'utf8'));
        dataProducts.push(newProduct);

        writeFileProducts(dataProducts);
        return dataProducts;
    },
}



exports.data = methods;