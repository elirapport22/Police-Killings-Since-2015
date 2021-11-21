const fs = require('fs');
const ejs = require('ejs');

let displayData = fs.readFileSync('/src/data/crime.json', 'utf8');
let siteTemplate = fs.readFileSync('/views/index.ejs');

let indexHTMl = ejs.render(siteTemplate, {
  filename: __dirname + '/views/index.ejs',
  data: JSON.parse(displayData);
});

fs.writeFileSync('build/index.html', index_html, 'utf8');
