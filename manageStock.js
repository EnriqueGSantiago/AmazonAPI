const fs = require('fs');
const readProducts = require('./readFileProducts');

let writeFileProducts = (dataProducts) => {
    let dataProductsString = JSON.stringify(dataProducts);
    fs.writeFileSync('products.json', dataProductsString,'utf8');
}

var methods = {

    manageStock: (productID, quatity) => {

        let dataProducts = [];
        dataProducts = JSON.parse(readProducts.data.readFilePro('products.json', 'utf8'));

        let filterList = dataProducts.filter(element => {
            if(element.id === productID) {
                element.stock-=quatity;
            }
            return dataProducts;
        });

        writeFileProducts(filterList);

        return filterList;


    }
}

exports.data = methods;