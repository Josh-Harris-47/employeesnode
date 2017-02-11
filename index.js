const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const employeeCtrl = require('./employeeCtrl.js');


var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + "/public"));

app.get('/employees', employeeCtrl.read);
app.post('/employees', employeeCtrl.create);
app.delete('/employees/:id', employeeCtrl.delete);
app.put('/employees/:id', employeeCtrl.update);

app.listen(8000, function(){
  console.log("michael scott is listening on 8000")
});
