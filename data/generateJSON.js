const fs = require('fs');

let finalData = [];
let rawData_csv = fs.readFileSync('fatal-police-shootings-data.csv', 'utf8');
let policeData = rawData_csv.split("\n");
let arrayOfStateNames = ["AK","AL","AR","AZ","CA","CO","CT","DC","DE","FL","GA","HI","IA","ID","IL","IN","KS","KY","LA","ME","MD","MA","MI","MN","MO","MS","MT","NC","ND","NE","NH","NJ","NM","NV","NY","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VA","VT","WA","WV","WI","WY"];
let arrayOfEachStatesData = [];
let ak = [];

arrayOfStateNames.forEach(function(current){
  arrayOfEachStatesData.push([]); // adding a blank array in each indice, and each indice in this array of arrays will then be converted to its own json file
});

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

  arrayOfStateNames.forEach(function(currentOne,index){
    if(raw_info[7] === currentOne){
      arrayOfEachStatesData[index].push(personData);
    }
  });
});

fs.writeFileSync('crime2.json', JSON.stringify(finalData), 'utf8');
arrayOfStateNames.forEach(function(currentV,index){
  fs.writeFileSync(''+currentV+'.json',JSON.stringify(arrayOfEachStatesData[index]),'utf8');
});
