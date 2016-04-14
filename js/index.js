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

