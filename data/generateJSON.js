const fs = require('fs');

let finalData = [];
let rawData_csv = fs.readFileSync('fatal-police-shootings-data.csv', 'utf8');
let policeData = rawData_csv.split("\n");
let arrayOfStateNames = ["AK","AL","AR","AZ","CA","CO","CT","DC","DE","FL","GA","HI","IA","ID","IL","IN","KS","KY","LA","ME","MD","MA","MI","MN","MO","MS","MT","NC","ND","NE","NH","NJ","NM","NV","NY","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VA","VT","WA","WV","WI","WY"];
let arrayOfEachStatesData = [];
let ak = [];
let whiteCount = 0;
let totalcount=0
let blackCount=0
let asianCount=0
let hispanicCount=0
let nativeCount = 0
let otherCount=0
let noMentalIllnessCount=0
let noThreatCount=0
let noFleeCount=0
let unarmedCount=0
let unknownCount = 0
let under21Count = 0
let under30Count = 0

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

  totalcount = totalcount + 1;
  if(personData['race'] == "W"){whiteCount +=1;}
  if(personData['race'] == "B"){blackCount +=1;}
  if(personData['race'] == "A"){asianCount +=1;}
  if(personData['race'] == "H"){hispanicCount +=1;}
  if(personData['race'] == "O"){otherCount +=1;}
  if(personData['race'] == ""){unknownCount +=1;}
  if(personData['race'] == "N"){nativeCount +=1;}
  if(parseInt(personData['age']) <= 21){under21Count +=1;}
  if(parseInt(personData['age']) <= 30){under30Count +=1;}
  if(personData['mental_illness'] == "FALSE"){noMentalIllnessCount +=1;}
  if(personData['threat_level'] !== "attack"){noThreatCount +=1;}
  if(personData['flee'] == "Not fleeing"){noFleeCount +=1;}
  if(personData['armed'] == "unarmed"){unarmedCount +=1;}



  finalData.push(personData);

  arrayOfStateNames.forEach(function(currentOne,index){
    if(raw_info[7] === currentOne){
      arrayOfEachStatesData[index].push(personData);
    }
  });
});

let thecounts = {};
  // thecounts['whiteCount'] = (Math.round(whiteCount/totalcount * 10000) *.01).toFixed(1);
  // thecounts['blackCount'] = parseInt((Math.round(blackCount/totalcount * 10000) *.01).toFixed(1));
  // thecounts['asianCount'] = parseInt((Math.round(asianCount/totalcount * 10000) *.01).toFixed(1));
  // thecounts['hispanicCount'] = parseInt((Math.round(hispanicCount/totalcount * 10000) *.01).toFixed(1));
  // thecounts['otherCount'] = parseInt((Math.round(otherCount/totalcount * 10000) *.01).toFixed(1));
  // thecounts['unknownCount'] = parseInt((Math.round(unknownCount/totalcount * 10000) *.01).toFixed(1));
  // thecounts['nativeCount'] = parseInt((Math.round(nativeCount/totalcount * 10000) *.01).toFixed(1));
  // thecounts['under21Count'] = parseInt((Math.round(under21Count/totalcount * 10000) *.01).toFixed(1));
  // thecounts['under30Count'] = parseInt((Math.round(under30Count/totalcount * 10000) *.01).toFixed(1));
  thecounts['noMentalIllnessCount'] = (noMentalIllnessCount/totalcount).toFixed(3)*100;
  thecounts['under30Count'] = ((under30Count/totalcount).toFixed(3)*100).toFixed(1);
  thecounts['noFleeCount'] = (noFleeCount/totalcount).toFixed(3)*100;
  // thecounts['noMentalIllnessCount'] = (Math.round(noMentalIllnessCount/totalcount * 10000) *.01).toFixed(1);
  thecounts['under21Count'] = (under21Count/totalcount).toFixed(3)*100;
  thecounts['unarmedCount'] = (unarmedCount/totalcount).toFixed(3)*100;

  // (Math.round(data[data.length-1].whiteCount/data[data.length-1].totalcount * 10000)*.01).toFixed(1)
  // thecounts['blackCount'] = blackCount;
  // thecounts['asianCount'] = asianCount;
  // thecounts['hispanicCount'] = hispanicCount;
  // thecounts['otherCount'] = otherCount;
  // thecounts['unknownCount'] = unknownCount;
  // thecounts['nativeCount'] = nativeCount;
  // thecounts['under21Count'] = under21Count;
  // thecounts['under30Count'] = under30Count;
  // thecounts['noMentalIllnessCount'] = noMentalIllnessCount;
  // thecounts['noThreatCount'] = noThreatCount;
  // thecounts['noFleeCount'] = noFleeCount;
  // thecounts['unarmedCount'] = unarmedCount;

  finalData.push(thecounts);
  console.log(finalData[finalData.length-1].whiteCount);
  // finalData.push(blackCount);
  // finalData.push(blackCount);
  // finalData.push(blackCount);
  // finalData.push(blackCount);
  // finalData.push(blackCount);
  // finalData.push(blackCount);
  // finalData.push(blackCount);
  // finalData.push(blackCount);
  // finalData.push(blackCount);
  // finalData.push(blackCount);
  // finalData.push(blackCount);
  // finalData.push(blackCount);
  // finalData.push(blackCount);

fs.writeFileSync('crime2.json', JSON.stringify(finalData), 'utf8');
arrayOfStateNames.forEach(function(currentV,index){
  fs.writeFileSync(''+currentV+'.json',JSON.stringify(arrayOfEachStatesData[index]),'utf8');
});
/*
let totalcount=0
let whiteCount=0
let blackCount=0
let asianCount=0
let hispanicCount=0
let nativeCount = 0
let otherCount=0
let noMentalIllnessCount=0
let noThreatCount=0
let noFleeCount=0
let unarmedCount=0
let unknownCount = 0
let under21Count = 0
let under30Count = 0
 for(let i of data){
  totalcount = totalcount + 1
  if(i.race == "W"){whiteCount = whiteCount + 1}
  if(i.race == "B"){blackCount = blackCount + 1}
  if(i.race == "A"){asianCount = asianCount + 1}
  if(i.race == "H"){hispanicCount = hispanicCount + 1}
  if(i.race == "O" ){otherCount = otherCount + 1}
  if(i.mental_illness == "FALSE"){noMentalIllnessCount = noMentalIllnessCount + 1}
  if(i.threat_level !== "attack"){noThreatCount = noThreatCount + 1}
  if(i.flee == "Not fleeing"){noFleeCount = noFleeCount + 1}
  if(i.armed == "unarmed"){unarmedCount = unarmedCount + 1}
  if(i.race == ""){unknownCount = unknownCount + 1}
  if(i.race == "N"){nativeCount = nativeCount + 1}
    if(parseInt(i.age) <= 21){under21Count = under21Count + 1}
    if(parseInt(i.age) <= 30){under30Count = under30Count + 1}
  let filename = i.state
}*/
