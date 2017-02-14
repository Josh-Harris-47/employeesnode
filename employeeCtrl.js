const employeeList = require('./employeeList.js');

module.exports = {
  read: function(req,res){
    res.send(employeeList);
  },
  create: function(req,res){
    var id = 0;
    for(var i = 0; i < employeeList.length; i++){
      if(employeeList[id].id > id){
        id = employeeList[i].id;
      }
    }
    req.body.id = id+1;
    employeeList.push(req.body);
    res.send(employeeList);
  },
  update: function(req,res){
    for(var i = 0; i < employeeList.length; i++){
      if(employeeList[i].id == req.params.id){
        employeeList.splice(i, 1, req.body);
        break;
      }
    }
    res.send(employeeList);
  },
  delete: function(req,res){
    for(var i = 0; i < employeeList.length; i++){
      if(employeeList[i].id == req.params.id){
        employeeList.splice(i,1);
        break;
      }
    }
    res.send(employeeList);
  }
}
