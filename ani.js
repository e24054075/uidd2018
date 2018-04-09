var point = 0;
var c_time = 60;
var poolc = [1,1,1,1,1,1];
var salt = [false,false,false,false,false,false];
var tool = 0;

function move(){
    $("#toolbarcircle").animate({height:"472px",width:"472px"});
}
function close(){
    $("#toolbarcircle").animate({height:"0px",width:"0px"});
}
function usetool(i){
	$("#tool"+i).click(function(){
		tool=i;
		close();
		$("#time").text(tool);
    	});
}

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
$(document).ready(function(){
    $("#toolbar").click(function(){
        move();
    });
    $("#toolbar2").click(function(){
        close();
    });
    for(var i = 1;i<=5;i++)
	usetool(i);
});
