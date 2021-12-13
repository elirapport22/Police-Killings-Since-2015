const fs = require('fs');
const ejs = require('ejs');

let displayData = fs.readFileSync('data/crime.json', 'utf8');
let siteTemplate = fs.readFileSync('src/views/index.ejs', 'utf8');
let raceData = fs.readFileSync('data/racedata2019.json','utf8');

let arrayOfStateNames = ["AK","AL","AR","AZ","CA","CO","CT","DC","DE","FL","GA","HI","IA","ID","IL","IN","KS","KY","LA","ME","MD","MA","MI","MN","MO","MS","MT","NC","ND","NE","NH","NJ","NM","NV","NY","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VA","VT","WA","WV","WI","WY"];
let arrayoffullstatenames = ["Alaska","Alabama","Arkansas","Arizona","California","Colorado","Connecticut","District of Columbia","Delaware","Florida","Georgia","Hawaii","Iowa","Idaho","Illinois","Indiana","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Missouri","Mississippi","Montana","North Carolina","North Dakota","Nebraska","New Hampshire","New Jersey","New Mexico","Nevada","New York", "Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Virginia","Vermont","Washington","West Virginia","Wisconsin","Wyoming"];

let amassedDisplayData = [];

arrayOfStateNames.forEach(function(currentV,index){
  amassedDisplayData.push(fs.readFileSync('data/'+currentV+'.json', 'utf8'))
});
let indexHTML = ejs.render(siteTemplate, {
  filename: __dirname + '/src/views/index.ejs',
  data: JSON.parse(displayData)
});

fs.writeFileSync('build/index.html', indexHTML, 'utf8');

let microTemplate = fs.readFileSync('src/views/micro.ejs', 'utf8');

for(i of arrayOfStateNames){
  let theracedata={};
  let ustheracedata={};
  for(p of JSON.parse(raceData)){
    if(p.location === arrayoffullstatenames[(arrayOfStateNames.indexOf(i))]){
      theracedata = p;
    }
    if(p.location === 'United States'){
      ustheracedata = p;

    }
  }
  let microdisplayData = fs.readFileSync('data/'+i+'.json', 'utf8');
  let microHTML = ejs.render(microTemplate, {
    filename: __dirname + '/src/views/micro.ejs',
    data: JSON.parse(microdisplayData),
    USdata: JSON.parse(displayData),
    stateName: arrayoffullstatenames[(arrayOfStateNames.indexOf(i))],
    stateracedata: theracedata,
    usracedata: ustheracedata

  });
    fs.writeFileSync('build/' + [i] + '.html', microHTML, 'utf8');
    // console.log();
    //console.log(ustheracedata);
}


let aboutTemplate = fs.readFileSync('src/views/about.ejs', 'utf8');
let aboutHTML = ejs.render(aboutTemplate, {
  filename: __dirname + '/src/views/about.ejs',
});
fs.writeFileSync('build/about.html', aboutHTML, 'utf8');
