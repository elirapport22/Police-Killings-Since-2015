const fs = require('fs');
const ejs = require('ejs');

let displayData = fs.readFileSync('../../data/crime.json', 'utf8');
let siteTemplate = fs.readFileSync('index.ejs', 'utf8');

let indexHTML = ejs.render(siteTemplate, {
  filename: __dirname + 'index.ejs',
  data: JSON.parse(displayData)
});

fs.writeFileSync('../../build/index.html', indexHTML, 'utf8');
