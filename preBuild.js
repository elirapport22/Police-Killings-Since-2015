const fs = require('fs');
const dir = '/Users/elirapport/Documents/GitHub/Police-Killings-Since-2015/build';


fs.rmdir(dir, {recursive: true}, (err) => {
  if(err){
    throw err;
  }
  console.log("Build is deleted.");
});
