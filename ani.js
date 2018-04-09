var $point = 0;
var $c_time = 60;
var $toolbarc = 0;
var $clickt = [0,0,0,0,0,0];
var $salt = [false,false,false,false,false,false];

function move(){
    $("#toolbarcircle").animate({height:"472px",width:"472px"});
}
function close(){
    $("#toolbarcircle").animate({height:"0px",width:"0px"});
}
$(document).ready(function(){
    $("#toolbar").click(function(){
    if($toolbarc)
    {
        $("#toolbarcircle").animate({height:"0px",width:"0px"});
        $toobarc = 0;
    }
    else
    {
        $("#toolbarcircle").animate({height:"472px",width:"472px"});
        $toobarc = 1;
    }
    });
    
});
