var getEmployees = function(){
  $.ajax({
    method: "GET",
    url: "/employees"
  }).then(function(res){
    console.log(res);
    $(".container").empty(card);
    for(var i = 0; i < res.length; i++){
      var card = `<div class="card">
        <h1>`+res[i].name+`</h1>
        <h3>Email: `+res[i].email+`</h3>
        <h3>Password: `+res[i].password+`</h3>
        <h3>id: `+res[i].id+`</h3>
        <button onclick="deleteEmployees(`+res[i].id+`)">Delete</button>
        </div>`;
      $(".container").append(card);
    }
  });
};

getEmployees();

var deleteEmployees = function(id){
  $.ajax({
    method: "delete",
    url: "/employees/" + id,
  }).then(function(res){
    getEmployees()
  })
}

var postEmployee = function(){
  var newEmployee = {
    name: $("#newname").val(),
    email: $("#newemail").val(),
    password: $("#newpassword").val(),
    dob: $("#newdob").val(),
    phonenumber: $("#newphonenumber").val()
  };
  $.ajax({
    method: "POST",
    url: "/employees",
    data: newEmployee
  }).then(function(res){
    getEmployees();
    $('#newname').val("");
    $('#newemail').val("");
    $('#newpassword').val("");
    $('#newdob').val("");
    $('#newphonenumber').val("");
  });
};
