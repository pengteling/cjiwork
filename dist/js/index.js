$(function(){$.fn.extend({animateCss:function(n){var i="webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";$(this).addClass("animated "+n).one(i,function(){$(this).removeClass("animated "+n)})}})}),$(function(){$(".fullSlide").slide({titCell:".hd ul",mainCell:".bd ul",effect:"fold",vis:"auto",autoPlay:!0,autoPage:!0,trigger:"click",interTime:8e3,startFun:function(n,i){$(".fullSlide .mengban").animateCss("bounceInDown"),$(".fullSlide a").animateCss("bounceInLeft"),$(".fullSlide a .tit").animateCss("fadeInUp"),$(".fullSlide a .intro").animateCss("fadeInUp")}})}),$(function(){function n(){var n=$(this),i=n.html();n.children().wrapAll("<p></p>"),n.children("p").append(i).children(":last").addClass("a1")}$(".nav .navli").each(n),$(".nav .navli").hover(function(){var n=-$(this).height();$(this).children("p").stop(!0,!0).animate({top:n},300)},function(){$(this).children("p").stop(!0,!0).animate({top:"0px"},300)})});