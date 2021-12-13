const fs = require('fs');
const dir = 'C:\Users\Trinity\Documents\Police-Killings-Since-2015\Police-Killings-Since-2015\build';


fs.rmdir(dir, {recursive: true}, (err) => {
  if(err){
    throw err;
  }
  console.log("Build is deleted.");
});
