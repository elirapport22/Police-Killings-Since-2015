const fs = require('fs');
const ejs = require('ejs');

let displayData = fs.readFileSync(/data/crime.json);
