const fs = require('fs');

function convertCSVToJSON(inputFilename='customer-data.csv', outputFilename) {
    return new Promise( (resolve, reject) => {
        if (!outputFilename) {
            outputFilename = inputFilename.replace(/.csv$/,'')+'.json';
        }
        fs.readFile(inputFilename, { encoding: 'utf-8' }, (err, data) => {
            if (err) {
                return reject({ err });
            }
            const lines = data.trim().split('\n');
            const keys = lines.shift().trim().split(',');
            const obj = lines.map( (line) => {
                return line.trim().split(',').reduce( (prev, curr, idx) => { prev[keys[idx]] = curr; return prev; }, {});
            });
            fs.writeFile(outputFilename, JSON.stringify(obj, null, 2), (err) => {
                if (err) {
                    return reject({ err });
                }
                resolve({ inputFilename, outputFilename, obj });
            });
        });
    
    })
}

module.exports = convertCSVToJSON;
