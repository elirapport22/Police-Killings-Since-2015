const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(express.static('build'));
app.use(express.static('src'));
app.use(express.static('images'));
app.use(express.static('data'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
