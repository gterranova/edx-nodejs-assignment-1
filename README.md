edx Introduction to NodeJS: Assignment 1
=====

This project is my solution for the 1st assignment at edX Introduction to Node.js course.

https://courses.edx.org/courses/course-v1:Microsoft+DEV283x+2T2018/course/

It converts a CSV file to JSON and saves it to same directory. 
You can provide the CSV on the command line (otherwise it defaults to the provided customer-data.csv).

```
$ node . [cvs file]
```

### 1. Why did I design this project the way I did?

I did not think it was strictly necessary to use external dependencies to parse a CSV file. 
After all, it was just a few additional lines of code to map the CSV fields into a JSON object (although it might not be as complete/reliable as possibly existing external libraries). 

Also, the convertCSVToJSON function (exported by convert.js) returns a Promise. I did so for testing purposes, I needed the output file to be created before checking that it exists and its content matches the provided solution. Alternative suggestions are welcome. 

### 2. How did I test?

I tested the results with mocha, installed as dev dependency. Tests have passed. 

```
$ npm test
```

It tests that the json file is created and compare the output with the provided solution file [here](https://prod-edxapp.edx-cdn.org/assets/courseware/v1/49802b4bc23bb76c0a1eb9bff4178d55/asset-v1:Microsoft+DEV283x+2T2018+type@asset+block/customer-data-solution.json).

### 3. Known issues

 * Json files might differ due to different new line endings (LFCR - CR) or indentation. I overcame the issue by parsing and re-stringifying the output and solution json files content, then comparing them.
 