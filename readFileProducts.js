const fs = require('fs');

var methods = {

    readFilePro: (fileName, encoding) => {
        return fs.readFileSync(fileName, encoding);
    }
}

exports.data = methods;