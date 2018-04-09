var point = 0;
var c_time = 60;
var poolc = [1,1,1,1,1,1];
var tool = 0;
var temp = 0;

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
    	});
}
function pool(i,j){
	$("#p"+i+"s"+j).click(function(){
		for(var w = 1;w <= 5;w++)
		{
			if(w == j + 1)
			{	
				temp = j+1;
				$("#p"+i+"s"+temp).show();
			}
			else
			{
				$("#p"+i+"s"+w).hide();
			}
		}
	});
}
function timecount(){
	c_time = 60;
	timer = setInterval(function(){
		c_time--;
		$("#time").text("0:"+c_time);
	},1000);
}
$(document).ready(function(){
    for(var i = 1;i<=6;i++)
    {
	    for(var j = 1;j <= 5;j++)
		pool(i,j);
    }
    $("#toolbar").click(function(){
        move();
    });
    $("#toolbar2").click(function(){
        close();
    });
    timecount();
    for(var i = 1;i<=5;i++)
	usetool(i);
});
