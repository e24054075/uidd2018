var point = 0;
var c_time = 60;
var clickt = [0,0,0,0,0,0];
var salt = [false,false,false,false,false,false];
var tool = 0;

function move(){
    $("#toolbarcircle").animate({height:"472px",width:"472px"});
}
function close(){
    $("#toolbarcircle").animate({height:"0px",width:"0px"});
}
function usetool(){
        for(var i = 1;i<=5;i++)
	{
		$("#tool"+i).click(function(){
			tool=i;
			close();
			$("#time").text(tool);
    		});
	}
}
function pool(){
	for(var i = 1;i<=5;i++)
	{
		$("#tool"+i).click(function(){
			tool=i;
			close();
    		});
	}
}
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
    usetool();
});
