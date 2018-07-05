const path = require('path');
const fs = require('fs');

const convertCSVToJSON = require('../convert.js');
const testCSVFile = path.resolve(path.join(__dirname, '..', 'customer-data.csv'));
const outputJsonFile = path.resolve(path.join(__dirname, 'customer-data.json'));
const solutionJsonFile = path.resolve(path.join(__dirname, 'customer-data-solution.json'));

var assert = require('assert');

describe('convertCSVToJSON', function () {
    it('should create output json file', function () {
        return convertCSVToJSON(testCSVFile, outputJsonFile).then(() => {
            assert.equal(fs.existsSync(outputJsonFile), true);
        });
    });
    it('output should match customer-data-solution.json', function () {
        return convertCSVToJSON(testCSVFile, outputJsonFile).then(() => {
            var inBuf = JSON.stringify(JSON.parse(fs.readFileSync(outputJsonFile)));
            var refBuf = JSON.stringify(JSON.parse(fs.readFileSync(solutionJsonFile)));
            assert.equal(inBuf == refBuf, true);
        });
    });
});
