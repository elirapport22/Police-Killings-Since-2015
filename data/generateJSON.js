const fs = require('fs');

let finalData = [];
let rawData_csv = fs.readFileSync('fatal-police-shootings-data.csv', 'utf8');
let policeData = rawData_csv.split("\n");

policeData.forEach(function(data) {
  let raw_info = data.split(',');
  let personData = {};
  personData['id'] = raw_info[0];
  personData['name'] = raw_info[1];
  personData['date'] = raw_info[2];
  personData['armed'] = raw_info[3];
  personData['age'] = raw_info[4];
  personData['gender'] = raw_info[5];
  personData['race'] = raw_info[6];
  personData['state'] = raw_info[7];
  personData['mental_illness'] = raw_info[8];
  personData['threat_level'] = raw_info[9];
  personData['flee'] = raw_info[10];
  personData['longitude'] = raw_info[11];
  if(raw_info[12])
  personData['latitude'] = raw_info[12].trim();
  else{
    personData['latitude'] = [];
  }


  finalData.push(personData);


});

fs.writeFileSync('crime2.json', JSON.stringify(finalData), 'utf8');
