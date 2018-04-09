var point = 0;
var c_time = 40;
var salt = [0,0,0,0,0,0];
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
		if(tool == j)
		{
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
			if(tool == 5)
			{
				if(salt[i] != 1)
				{
					salt[i] = 1;
					point+= 1;
					$("#point").text("Point:"+point);
				}
			}
		}
	});
}
function result(){
	if(c_time==0 || point == 6)
	{
		$("#result").show();
		$("#r_point").text("遊戲結束! 得分:"+point);
	}
	else
	{
		$("#result").hide();
	}
}
function timecount(){
	timer = setInterval(function(){
		c_time--;
		$("#time").text("0:"+c_time);
		if(c_time==0)
		{
			clearInterval(timer);
		}
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
    result();
    for(var i = 1;i<=5;i++)
	usetool(i);
});
