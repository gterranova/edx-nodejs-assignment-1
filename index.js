const convertCSVToJSON = require('./convert.js');

convertCSVToJSON(process.argv[2], process.argv[3]).then( (data) => {
    if (data.err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`${data.inputFilename} successfully converted to ${data.outputFilename} (${data.obj.length} records written)`);
});
