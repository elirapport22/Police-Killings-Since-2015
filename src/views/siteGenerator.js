const fs = require('fs');
const ejs = require('ejs');

let displayData = fs.readFileSync('../../data/crime.json', 'utf8');
let siteTemplate = fs.readFileSync('index.ejs', 'utf8');
let arrayOfStateNames = ["AK","AL","AR","AZ","CA","CO","CT","DC","DE","FL","GA","HI","IA","ID","IL","IN","KS","KY","LA","MA","MD","ME","MI","MN","MO","MS","MT","NC","NE","NH","NJ","NM","NV","NY","OH","OK","OR","PA","SC","SD","TN","TX","UT","VA","VT","WA","WI","WV","WY"];
let amassedDisplayData = [];

arrayOfStateNames.forEach(function(currentV,index){
  amassedDisplayData.push(fs.readFileSync('../../data/'+currentV+'.json', 'utf8'))
});
let indexHTML = ejs.render(siteTemplate, {
  filename: __dirname + 'index.ejs',
  data: JSON.parse(displayData)
});

fs.writeFileSync('../../build/index.html', indexHTML, 'utf8');

let microTemplate = fs.readFileSync('micro.ejs', 'utf8');

for(i of arrayOfStateNames){
  let microdisplayData = fs.readFileSync('../../data/'+i+'.json', 'utf8');
  let microHTML = ejs.render(microTemplate, {
    filename: __dirname + 'micro.ejs',
    data: JSON.parse(microdisplayData)
  });
    fs.writeFileSync('../../build/' + [i] + '.html', microHTML, 'utf8');
}


let aboutTemplate = fs.readFileSync('about.ejs', 'utf8');
let aboutHTML = ejs.render(aboutTemplate, {
  filename: __dirname + 'about.ejs',
});
fs.writeFileSync('../../build/about.html', aboutHTML, 'utf8');
