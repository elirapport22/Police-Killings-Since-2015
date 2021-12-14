const fs = require('fs');
const dir = 'C:/Users/Trinity/Police-Killings-Since-2015/build';
const path = require('path');

fs.mkdir(path.join(__dirname, 'build'), err => {
if(err){
  return console.error(err);
}
console.log('Created empty build folder.');
});
