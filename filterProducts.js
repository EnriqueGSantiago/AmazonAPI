const readProducts = require('./readFileProducts');

/*let filterKeyword = (listObj) => {
    if('productName', 'price', 'category' in listObj && listObj.productName ){

    }
}*/

var methods = {

    filterFilePro: (keyword) => {

        let dataProducts = [];
        dataProducts = JSON.parse(readProducts.data.readFilePro('products.json', 'utf8'));

        let filterList = dataProducts.filter(element => {
            return element.productName === keyword || element.price === keyword || element.category === keyword
        });

        return filterList;


    }
}



exports.data = methods;