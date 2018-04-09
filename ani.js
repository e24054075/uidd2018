var point = 0;
var c_time = 60;
var toolbarc = 0;
var clickt = [0,0,0,0,0,0];
var salt = [false,false,false,false,false,false];

$(document).ready(function(){
$("#toolbar").click(function(){
    $("#toolbarcircle").animate("width: 100px;
  height: 100px;
  -webkit-border-radius: 100px 0 0 0;");
  });
});
