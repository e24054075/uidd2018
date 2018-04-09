var $point = 0;
var $c_time = 60;
var $toolbarc = 0;
var $clickt = [0,0,0,0,0,0];
var $salt = [false,false,false,false,false,false];

function timecount(){
	c_time = 60;
	timer = setInterval(function(){
		c_time--;
		$("#time").text("0:"+c_time);
		if (c_time == 0)
		{	
			clearInterval(timer);
		}
	},1000);
}
function move(){
    $("#toolbarcircle").animate({height:"472px",width:"472px"});
}
function close(){
    $("#toolbarcircle").animate({height:"0px",width:"0px"});
}
$(document).ready(function(){
    $("#toolbar").click(function(){
        move();
    });
    $("#toolbar2").click(function(){
        close();
    });
    timecount();
});
