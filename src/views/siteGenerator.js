const fs = require('fs');
const ejs = require('ejs');

let displayData = fs.readFileSync('../../data/crime.json', 'utf8');
let siteTemplate = fs.readFileSync('index.ejs', 'utf8');

let indexHTML = ejs.render(siteTemplate, {
  filename: __dirname + 'index.ejs',
  data: JSON.parse(displayData)
});

fs.writeFileSync('../../build/index.html', indexHTML, 'utf8');

let microTemplate = fs.readFileSync('micro.ejs', 'utf8');

let microHTML = ejs.render(microTemplate, {
  filename: __dirname + 'micro.ejs',
  data: JSON.parse(displayData)
});

for(let i = 0; i < 3; i++){
  fs.writeFileSync('../../build/micro' + [i] + '.html', microHTML, 'utf8');
}
