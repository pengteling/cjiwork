$(function(){

    function code(){
        var _this = $(this);
        var _html = _this.html();

        _this.children().wrapAll('<p></p>');
        _this.children('p').append(_html).children(':last').addClass('a1');



    }


    $('.nav .navli').each(code);

    $('.nav .navli').hover(function(){
        var h =-$(this).height();
        $(this).children("p").stop(true,true).animate({'top':h},300)
    },function(){
        $(this).children("p").stop(true,true).animate({'top':'0px'},300)
    })


    $(".login-main .ipt-submit").on("click",function(){
    	if($(".ipt-user").val()==''){
    		alert("用户名不能为空！");
    		$(".ipt-user").focus();
    		return false;
    	}else if($(".ipt-pwd").val()==''){
    		alert("密码不能为空！")
    		$(".ipt-pwd").focus();
    		return false;
    	}else{
    		return true;
    	}

    })

})

