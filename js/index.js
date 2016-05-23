$(function(){
    $.fn.extend({
        animateCss: function (animationName) {
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            $(this).addClass('animated ' + animationName).one(animationEnd, function() {
                $(this).removeClass('animated ' + animationName);
            });
        }
    });
})
$(function(){
    //vis:"auto"
    $(".fullSlide").slide({ titCell:".hd ul", mainCell:".bd ul", effect:"leftLoop", vis:"auto", autoPlay:true, autoPage:true, trigger:"click",interTime:8000,startFun:function(i,c){
            $(".fullSlide .mengban").animateCss("bounceInDown");
            $(".fullSlide a").animateCss("bounceInLeft");
            $(".fullSlide a .tit").animateCss("fadeInUp");
            $(".fullSlide a .intro").animateCss("fadeInUp");
    } });
})
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
    });
});

$(function(){
    $("#index-xm").slide({titCell:".tabtit a",mainCell:".tabcon"});
})
$(function(){
    $("#frm-so").on("submit",function(){
        if($.trim($("#key").val())==""){
            alert("请输入搜索关键字");
            return false;
        }
    })
})

$(function(){
    $(".slidebox").slide({titCell:".hd ul li",mainCell:".bd ul",trigger:"click",startFun:function(i,c){
        console.log(i,c);
        var ln = 0; //移动个数
        var left = parseInt($(".slidebox .hd ul").css("left")); //左移距离 n*235
        ln = left /235;
        var left_max = (c-1-4) * -235;

        if(i>=4&&left>left_max){
            //左移1个
            left = left - 235;
            $(".slidebox .hd ul").animate({'left':left+'px'},300);
        }
        console.log(left);
        //if($(".slidebox ul").css("left")
        if(left<0 && ln== -i){
            left = left + 235;
            $(".slidebox .hd ul").animate({'left':left+'px'},300);
            
        }
    }});
    $(".fmtbox").slide({titCell:".tabtit a",mainCell:".tabbd"});
})