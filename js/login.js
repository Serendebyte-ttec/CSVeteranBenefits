var un="stefansalvatore71298@gmail.com";
var temppassword="rules";


$("#dmva-signin").click(function(event){

    var uninput= $('#uninput').val();
var password=$('#passwordinput').val();

if(uninput!=un || password!=temppassword){
    
    $("#wrongpassword").show();
    event.preventDefault();
    console.log("wrong password");

}
console.log("login")
    
  });
