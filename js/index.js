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