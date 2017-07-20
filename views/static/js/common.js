$(function () {
	
	if(location.pathname != "/dashboard/login"){
		//判断是否登陆
		if(!$.cookie('PHPSESSID')){
			location.href ='/dashboard/login';
			return;
		}
    //获取cookie，设置头像和用户名
    var userInfo = JSON.parse($.cookie('userInfo'));
    
    
    var html = template('profile-tpl',userInfo);
    $("#profile").html(html);
		
	}
	
 
})