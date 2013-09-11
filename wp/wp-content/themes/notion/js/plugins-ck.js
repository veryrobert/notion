/**
 * BxSlider v4.1.1 - Fully loaded, responsive content slider
 * http://bxslider.com
 *
 * Copyright 2012, Steven Wanderski - http://stevenwanderski.com - http://bxcreative.com
 * Written while drinking Belgian ales and listening to jazz
 *
 * Released under the WTFPL license - http://sam.zoy.org/wtfpl/
 */(function(e){var t={},n={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:2e3,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",responsive:!0,touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!0,pause:4e3,autoStart:!0,autoDirection:"next",autoHover:!1,autoDelay:0,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,onSliderLoad:function(){},onSlideBefore:function(){},onSlideAfter:function(){},onSlideNext:function(){},onSlidePrev:function(){}};e.fn.bxSlider=function(r){if(this.length===0)return this;if(this.length>1){this.each(function(){e(this).bxSlider(r)});return this}var s={},o=this;t.el=this;var u=e(window).width(),a=e(window).height(),f=function(){s.settings=e.extend({},n,r);s.settings.slideWidth=parseInt(s.settings.slideWidth);s.children=o.children(s.settings.slideSelector);s.children.length<s.settings.minSlides&&(s.settings.minSlides=s.children.length);s.children.length<s.settings.maxSlides&&(s.settings.maxSlides=s.children.length);s.settings.randomStart&&(s.settings.startSlide=Math.floor(Math.random()*s.children.length));s.active={index:s.settings.startSlide};s.carousel=s.settings.minSlides>1||s.settings.maxSlides>1;s.carousel&&(s.settings.preloadImages="all");s.minThreshold=s.settings.minSlides*s.settings.slideWidth+(s.settings.minSlides-1)*s.settings.slideMargin;s.maxThreshold=s.settings.maxSlides*s.settings.slideWidth+(s.settings.maxSlides-1)*s.settings.slideMargin;s.working=!1;s.controls={};s.interval=null;s.animProp=s.settings.mode=="vertical"?"top":"left";s.usingCSS=s.settings.useCSS&&s.settings.mode!="fade"&&function(){var e=document.createElement("div"),t=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var n in t)if(e.style[t[n]]!==undefined){s.cssPrefix=t[n].replace("Perspective","").toLowerCase();s.animProp="-"+s.cssPrefix+"-transform";return!0}return!1}();s.settings.mode=="vertical"&&(s.settings.maxSlides=s.settings.minSlides);o.data("origStyle",o.attr("style"));o.children(s.settings.slideSelector).each(function(){e(this).data("origStyle",e(this).attr("style"))});l()},l=function(){o.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>');s.viewport=o.parent();s.loader=e('<div class="bx-loading" />');s.viewport.prepend(s.loader);o.css({width:s.settings.mode=="horizontal"?s.children.length*100+215+"%":"auto",position:"relative"});s.usingCSS&&s.settings.easing?o.css("-"+s.cssPrefix+"-transition-timing-function",s.settings.easing):s.settings.easing||(s.settings.easing="swing");var t=m();s.viewport.css({width:"100%",overflow:"hidden",position:"relative"});s.viewport.parent().css({maxWidth:d()});s.settings.pager||s.viewport.parent().css({margin:"0 auto 0px"});s.children.css({"float":s.settings.mode=="horizontal"?"left":"none",listStyle:"none",position:"relative"});s.children.css("width",v());s.settings.mode=="horizontal"&&s.settings.slideMargin>0&&s.children.css("marginRight",s.settings.slideMargin);s.settings.mode=="vertical"&&s.settings.slideMargin>0&&s.children.css("marginBottom",s.settings.slideMargin);if(s.settings.mode=="fade"){s.children.css({position:"absolute",zIndex:0,display:"none"});s.children.eq(s.settings.startSlide).css({zIndex:50,display:"block"})}s.controls.el=e('<div class="bx-controls" />');s.settings.captions&&N();s.active.last=s.settings.startSlide==g()-1;s.settings.video&&o.fitVids();var n=s.children.eq(s.settings.startSlide);s.settings.preloadImages=="all"&&(n=s.children);if(!s.settings.ticker){s.settings.pager&&S();s.settings.controls&&x();s.settings.auto&&s.settings.autoControls&&T();(s.settings.controls||s.settings.autoControls||s.settings.pager)&&s.viewport.after(s.controls.el)}else s.settings.pager=!1;c(n,h)},c=function(t,n){var r=t.find("img, iframe").length;if(r===0){n();return}var i=0;t.find("img, iframe").each(function(){e(this).is("img")&&e(this).attr("src",e(this).attr("src")+"?timestamp="+(new Date).getTime());e(this).load(function(){setTimeout(function(){++i==r&&n()},0)})})},h=function(){if(s.settings.infiniteLoop&&s.settings.mode!="fade"&&!s.settings.ticker){var t=s.settings.mode=="vertical"?s.settings.minSlides:s.settings.maxSlides,n=s.children.slice(0,t).clone().addClass("bx-clone"),r=s.children.slice(-t).clone().addClass("bx-clone");o.append(n).prepend(r)}s.loader.remove();b();s.settings.mode=="vertical"&&(s.settings.adaptiveHeight=!0);s.viewport.height(p());o.redrawSlider();s.settings.onSliderLoad(s.active.index);s.initialized=!0;s.settings.responsive&&e(window).bind("resize",U);s.settings.auto&&s.settings.autoStart&&H();s.settings.ticker&&B();s.settings.pager&&M(s.settings.startSlide);s.settings.controls&&P();s.settings.touchEnabled&&!s.settings.ticker&&F()},p=function(){var t=0,n=e();if(s.settings.mode!="vertical"&&!s.settings.adaptiveHeight)n=s.children;else if(!s.carousel)n=s.children.eq(s.active.index);else{var r=s.settings.moveSlides==1?s.active.index:s.active.index*y();n=s.children.eq(r);for(i=1;i<=s.settings.maxSlides-1;i++)r+i>=s.children.length?n=n.add(s.children.eq(i-1)):n=n.add(s.children.eq(r+i))}if(s.settings.mode=="vertical"){n.each(function(n){t+=e(this).outerHeight()});s.settings.slideMargin>0&&(t+=s.settings.slideMargin*(s.settings.minSlides-1))}else t=Math.max.apply(Math,n.map(function(){return e(this).outerHeight(!1)}).get());return t},d=function(){var e="100%";s.settings.slideWidth>0&&(s.settings.mode=="horizontal"?e=s.settings.maxSlides*s.settings.slideWidth+(s.settings.maxSlides-1)*s.settings.slideMargin:e=s.settings.slideWidth);return e},v=function(){var e=s.settings.slideWidth,t=s.viewport.width();s.settings.slideWidth===0||s.settings.slideWidth>t&&!s.carousel||s.settings.mode=="vertical"?e=t:s.settings.maxSlides>1&&s.settings.mode=="horizontal"&&(t>s.maxThreshold||t<s.minThreshold&&(e=(t-s.settings.slideMargin*(s.settings.minSlides-1))/s.settings.minSlides));return e},m=function(){var e=1;if(s.settings.mode=="horizontal"&&s.settings.slideWidth>0)if(s.viewport.width()<s.minThreshold)e=s.settings.minSlides;else if(s.viewport.width()>s.maxThreshold)e=s.settings.maxSlides;else{var t=s.children.first().width();e=Math.floor(s.viewport.width()/t)}else s.settings.mode=="vertical"&&(e=s.settings.minSlides);return e},g=function(){var e=0;if(s.settings.moveSlides>0)if(s.settings.infiniteLoop)e=s.children.length/y();else{var t=0,n=0;while(t<s.children.length){++e;t=n+m();n+=s.settings.moveSlides<=m()?s.settings.moveSlides:m()}}else e=Math.ceil(s.children.length/m());return e},y=function(){return s.settings.moveSlides>0&&s.settings.moveSlides<=m()?s.settings.moveSlides:m()},b=function(){if(s.children.length>s.settings.maxSlides&&s.active.last&&!s.settings.infiniteLoop){if(s.settings.mode=="horizontal"){var e=s.children.last(),t=e.position();w(-(t.left-(s.viewport.width()-e.width())),"reset",0)}else if(s.settings.mode=="vertical"){var n=s.children.length-s.settings.minSlides,t=s.children.eq(n).position();w(-t.top,"reset",0)}}else{var t=s.children.eq(s.active.index*y()).position();s.active.index==g()-1&&(s.active.last=!0);t!==undefined&&(s.settings.mode=="horizontal"?w(-t.left,"reset",0):s.settings.mode=="vertical"&&w(-t.top,"reset",0))}},w=function(e,t,n,r){if(s.usingCSS){var i=s.settings.mode=="vertical"?"translate3d(0, "+e+"px, 0)":"translate3d("+e+"px, 0, 0)";o.css("-"+s.cssPrefix+"-transition-duration",n/1e3+"s");if(t=="slide"){o.css(s.animProp,i);o.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){o.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd");_()})}else if(t=="reset")o.css(s.animProp,i);else if(t=="ticker"){o.css("-"+s.cssPrefix+"-transition-timing-function","linear");o.css(s.animProp,i);o.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){o.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd");w(r.resetValue,"reset",0);j()})}}else{var u={};u[s.animProp]=e;t=="slide"?o.animate(u,n,s.settings.easing,function(){_()}):t=="reset"?o.css(s.animProp,e):t=="ticker"&&o.animate(u,speed,"linear",function(){w(r.resetValue,"reset",0);j()})}},E=function(){var t="",n=g();for(var r=0;r<n;r++){var i="";if(s.settings.buildPager&&e.isFunction(s.settings.buildPager)){i=s.settings.buildPager(r);s.pagerEl.addClass("bx-custom-pager")}else{i=r+1;s.pagerEl.addClass("bx-default-pager")}t+='<div class="bx-pager-item"><a href="" data-slide-index="'+r+'" class="bx-pager-link">'+i+"</a></div>"}s.pagerEl.html(t)},S=function(){if(!s.settings.pagerCustom){s.pagerEl=e('<div class="bx-pager" />');s.settings.pagerSelector?e(s.settings.pagerSelector).html(s.pagerEl):s.controls.el.addClass("bx-has-pager").append(s.pagerEl);E()}else s.pagerEl=e(s.settings.pagerCustom);s.pagerEl.delegate("a","click",O)},x=function(){s.controls.next=e('<a class="bx-next" href="">'+s.settings.nextText+"</a>");s.controls.prev=e('<a class="bx-prev" href="">'+s.settings.prevText+"</a>");s.controls.next.bind("click",C);s.controls.prev.bind("click",k);s.settings.nextSelector&&e(s.settings.nextSelector).append(s.controls.next);s.settings.prevSelector&&e(s.settings.prevSelector).append(s.controls.prev);if(!s.settings.nextSelector&&!s.settings.prevSelector){s.controls.directionEl=e('<div class="bx-controls-direction" />');s.controls.directionEl.append(s.controls.prev).append(s.controls.next);s.controls.el.addClass("bx-has-controls-direction").append(s.controls.directionEl)}},T=function(){s.controls.start=e('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+s.settings.startText+"</a></div>");s.controls.stop=e('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+s.settings.stopText+"</a></div>");s.controls.autoEl=e('<div class="bx-controls-auto" />');s.controls.autoEl.delegate(".bx-start","click",L);s.controls.autoEl.delegate(".bx-stop","click",A);s.settings.autoControlsCombine?s.controls.autoEl.append(s.controls.start):s.controls.autoEl.append(s.controls.start).append(s.controls.stop);s.settings.autoControlsSelector?e(s.settings.autoControlsSelector).html(s.controls.autoEl):s.controls.el.addClass("bx-has-controls-auto").append(s.controls.autoEl);D(s.settings.autoStart?"stop":"start")},N=function(){s.children.each(function(t){var n=e(this).find("img:first").attr("title");n!==undefined&&(""+n).length&&e(this).append('<div class="bx-caption"><span>'+n+"</span></div>")})},C=function(e){s.settings.auto&&o.stopAuto();o.goToNextSlide();e.preventDefault()},k=function(e){s.settings.auto&&o.stopAuto();o.goToPrevSlide();e.preventDefault()},L=function(e){o.startAuto();e.preventDefault()},A=function(e){o.stopAuto();e.preventDefault()},O=function(t){s.settings.auto&&o.stopAuto();var n=e(t.currentTarget),r=parseInt(n.attr("data-slide-index"));r!=s.active.index&&o.goToSlide(r);t.preventDefault()},M=function(t){var n=s.children.length;if(s.settings.pagerType=="short"){s.settings.maxSlides>1&&(n=Math.ceil(s.children.length/s.settings.maxSlides));s.pagerEl.html(t+1+s.settings.pagerShortSeparator+n);return}s.pagerEl.find("a").removeClass("active");s.pagerEl.each(function(n,r){e(r).find("a").eq(t).addClass("active")})},_=function(){if(s.settings.infiniteLoop){var e="";s.active.index===0?e=s.children.eq(0).position():s.active.index==g()-1&&s.carousel?e=s.children.eq((g()-1)*y()).position():s.active.index==s.children.length-1&&(e=s.children.eq(s.children.length-1).position());s.settings.mode=="horizontal"?w(-e.left,"reset",0):s.settings.mode=="vertical"&&w(-e.top,"reset",0)}s.working=!1;s.settings.onSlideAfter(s.children.eq(s.active.index),s.oldIndex,s.active.index)},D=function(e){if(s.settings.autoControlsCombine)s.controls.autoEl.html(s.controls[e]);else{s.controls.autoEl.find("a").removeClass("active");s.controls.autoEl.find("a:not(.bx-"+e+")").addClass("active")}},P=function(){if(g()==1){s.controls.prev.addClass("disabled");s.controls.next.addClass("disabled")}else if(!s.settings.infiniteLoop&&s.settings.hideControlOnEnd)if(s.active.index==0){s.controls.prev.addClass("disabled");s.controls.next.removeClass("disabled")}else if(s.active.index==g()-1){s.controls.next.addClass("disabled");s.controls.prev.removeClass("disabled")}else{s.controls.prev.removeClass("disabled");s.controls.next.removeClass("disabled")}},H=function(){if(s.settings.autoDelay>0)var e=setTimeout(o.startAuto,s.settings.autoDelay);else o.startAuto();s.settings.autoHover&&o.hover(function(){if(s.interval){o.stopAuto(!0);s.autoPaused=!0}},function(){if(s.autoPaused){o.startAuto(!0);s.autoPaused=null}})},B=function(){var t=0;if(s.settings.autoDirection=="next")o.append(s.children.clone().addClass("bx-clone"));else{o.prepend(s.children.clone().addClass("bx-clone"));var n=s.children.first().position();t=s.settings.mode=="horizontal"?-n.left:-n.top}w(t,"reset",0);s.settings.pager=!1;s.settings.controls=!1;s.settings.autoControls=!1;s.settings.tickerHover&&!s.usingCSS&&s.viewport.hover(function(){o.stop()},function(){var t=0;s.children.each(function(n){t+=s.settings.mode=="horizontal"?e(this).outerWidth(!0):e(this).outerHeight(!0)});var n=s.settings.speed/t,r=s.settings.mode=="horizontal"?"left":"top",i=n*(t-Math.abs(parseInt(o.css(r))));j(i)});j()},j=function(e){speed=e?e:s.settings.speed;var t={left:0,top:0},n={left:0,top:0};s.settings.autoDirection=="next"?t=o.find(".bx-clone").first().position():n=s.children.first().position();var r=s.settings.mode=="horizontal"?-t.left:-t.top,i=s.settings.mode=="horizontal"?-n.left:-n.top,u={resetValue:i};w(r,"ticker",speed,u)},F=function(){s.touch={start:{x:0,y:0},end:{x:0,y:0}};s.viewport.bind("touchstart",I)},I=function(e){if(s.working)e.preventDefault();else{s.touch.originalPos=o.position();var t=e.originalEvent;s.touch.start.x=t.changedTouches[0].pageX;s.touch.start.y=t.changedTouches[0].pageY;s.viewport.bind("touchmove",q);s.viewport.bind("touchend",R)}},q=function(e){var t=e.originalEvent,n=Math.abs(t.changedTouches[0].pageX-s.touch.start.x),r=Math.abs(t.changedTouches[0].pageY-s.touch.start.y);n*3>r&&s.settings.preventDefaultSwipeX?e.preventDefault():r*3>n&&s.settings.preventDefaultSwipeY&&e.preventDefault();if(s.settings.mode!="fade"&&s.settings.oneToOneTouch){var i=0;if(s.settings.mode=="horizontal"){var o=t.changedTouches[0].pageX-s.touch.start.x;i=s.touch.originalPos.left+o}else{var o=t.changedTouches[0].pageY-s.touch.start.y;i=s.touch.originalPos.top+o}w(i,"reset",0)}},R=function(e){s.viewport.unbind("touchmove",q);var t=e.originalEvent,n=0;s.touch.end.x=t.changedTouches[0].pageX;s.touch.end.y=t.changedTouches[0].pageY;if(s.settings.mode=="fade"){var r=Math.abs(s.touch.start.x-s.touch.end.x);if(r>=s.settings.swipeThreshold){s.touch.start.x>s.touch.end.x?o.goToNextSlide():o.goToPrevSlide();o.stopAuto()}}else{if(s.settings.mode=="horizontal"){r=s.touch.end.x-s.touch.start.x;n=s.touch.originalPos.left}else{r=s.touch.end.y-s.touch.start.y;n=s.touch.originalPos.top}if(!s.settings.infiniteLoop&&(s.active.index==0&&r>0||s.active.last&&r<0))w(n,"reset",200);else if(Math.abs(r)>=s.settings.swipeThreshold){r<0?o.goToNextSlide():o.goToPrevSlide();o.stopAuto()}else w(n,"reset",200)}s.viewport.unbind("touchend",R)},U=function(t){var n=e(window).width(),r=e(window).height();if(u!=n||a!=r){u=n;a=r;o.redrawSlider()}};o.goToSlide=function(t,n){if(s.working||s.active.index==t)return;s.working=!0;s.oldIndex=s.active.index;t<0?s.active.index=g()-1:t>=g()?s.active.index=0:s.active.index=t;s.settings.onSlideBefore(s.children.eq(s.active.index),s.oldIndex,s.active.index);n=="next"?s.settings.onSlideNext(s.children.eq(s.active.index),s.oldIndex,s.active.index):n=="prev"&&s.settings.onSlidePrev(s.children.eq(s.active.index),s.oldIndex,s.active.index);s.active.last=s.active.index>=g()-1;s.settings.pager&&M(s.active.index);s.settings.controls&&P();if(s.settings.mode=="fade"){s.settings.adaptiveHeight&&s.viewport.height()!=p()&&s.viewport.animate({height:p()},s.settings.adaptiveHeightSpeed);s.children.filter(":visible").fadeOut(s.settings.speed).css({zIndex:0});s.children.eq(s.active.index).css("zIndex",51).fadeIn(s.settings.speed,function(){e(this).css("zIndex",50);_()})}else{s.settings.adaptiveHeight&&s.viewport.height()!=p()&&s.viewport.animate({height:p()},s.settings.adaptiveHeightSpeed);var r=0,i={left:0,top:0};if(!s.settings.infiniteLoop&&s.carousel&&s.active.last)if(s.settings.mode=="horizontal"){var u=s.children.eq(s.children.length-1);i=u.position();r=s.viewport.width()-u.outerWidth()}else{var a=s.children.length-s.settings.minSlides;i=s.children.eq(a).position()}else if(s.carousel&&s.active.last&&n=="prev"){var f=s.settings.moveSlides==1?s.settings.maxSlides-y():(g()-1)*y()-(s.children.length-s.settings.maxSlides),u=o.children(".bx-clone").eq(f);i=u.position()}else if(n=="next"&&s.active.index==0){i=o.find("> .bx-clone").eq(s.settings.maxSlides).position();s.active.last=!1}else if(t>=0){var l=t*y();i=s.children.eq(l).position()}if("undefined"!=typeof i){var c=s.settings.mode=="horizontal"?-(i.left-r):-i.top;w(c,"slide",s.settings.speed)}}};o.goToNextSlide=function(){if(!s.settings.infiniteLoop&&s.active.last)return;var e=parseInt(s.active.index)+1;o.goToSlide(e,"next")};o.goToPrevSlide=function(){if(!s.settings.infiniteLoop&&s.active.index==0)return;var e=parseInt(s.active.index)-1;o.goToSlide(e,"prev")};o.startAuto=function(e){if(s.interval)return;s.interval=setInterval(function(){s.settings.autoDirection=="next"?o.goToNextSlide():o.goToPrevSlide()},s.settings.pause);s.settings.autoControls&&e!==!0&&D("stop")};o.stopAuto=function(e){if(!s.interval)return;clearInterval(s.interval);s.interval=null;s.settings.autoControls&&e!==!0&&D("start")};o.getCurrentSlide=function(){return s.active.index};o.getSlideCount=function(){return s.children.length};o.redrawSlider=function(){s.children.add(o.find(".bx-clone")).outerWidth(v());s.viewport.css("height",p());s.settings.ticker||b();s.active.last&&(s.active.index=g()-1);s.active.index>=g()&&(s.active.last=!0);if(s.settings.pager&&!s.settings.pagerCustom){E();M(s.active.index)}};o.destroySlider=function(){if(!s.initialized)return;s.initialized=!1;e(".bx-clone",this).remove();s.children.each(function(){e(this).data("origStyle")!==undefined?e(this).attr("style",e(this).data("origStyle")):e(this).removeAttr("style")});e(this).data("origStyle")!==undefined?this.attr("style",e(this).data("origStyle")):e(this).removeAttr("style");e(this).unwrap().unwrap();s.controls.el&&s.controls.el.remove();s.controls.next&&s.controls.next.remove();s.controls.prev&&s.controls.prev.remove();s.pagerEl&&s.pagerEl.remove();e(".bx-caption",this).remove();s.controls.autoEl&&s.controls.autoEl.remove();clearInterval(s.interval);s.settings.responsive&&e(window).unbind("resize",U)};o.reloadSlider=function(e){e!==undefined&&(r=e);o.destroySlider();f()};f();return this}})(jQuery);(function(e){"use strict";e.fn.scrollTo=function(t){var n={offset:0,speed:"slow",override:null,easing:null};if(t){t.override&&(t.override=override("#")!=-1?t.override:"#"+t.override);e.extend(n,t)}return this.each(function(t,r){e(r).click(function(t){var i;if(e(r).attr("href").match(/#/)!==null){t.preventDefault();i=n.override?n.override:e(r).attr("href");if(history.pushState){history.pushState(null,null,i);e("html,body").stop().animate({scrollTop:e(i).offset().top+n.offset},n.speed,n.easing)}else e("html,body").stop().animate({scrollTop:e(i).offset().top+n.offset},n.speed,n.easing,function(e){window.location.hash=i})}})})}})(jQuery);(function(e){function n(e){return typeof e=="object"?e:{top:e,left:e}}var t=e.scrollTo=function(t,n,r){e(window).scrollTo(t,n,r)};t.defaults={axis:"xy",duration:parseFloat(e.fn.jquery)>=1.3?0:1,limit:!0};t.window=function(t){return e(window)._scrollable()};e.fn._scrollable=function(){return this.map(function(){var t=this,n=!t.nodeName||e.inArray(t.nodeName.toLowerCase(),["iframe","#document","html","body"])!=-1;if(!n)return t;var r=(t.contentWindow||t).document||t.ownerDocument||t;return/webkit/i.test(navigator.userAgent)||r.compatMode=="BackCompat"?r.body:r.documentElement})};e.fn.scrollTo=function(r,i,s){if(typeof i=="object"){s=i;i=0}typeof s=="function"&&(s={onAfter:s});r=="max"&&(r=9e9);s=e.extend({},t.defaults,s);i=i||s.duration;s.queue=s.queue&&s.axis.length>1;s.queue&&(i/=2);s.offset=n(s.offset);s.over=n(s.over);return this._scrollable().each(function(){function d(e){u.animate(c,i,s.easing,e&&function(){e.call(this,r,s)})}if(r==null)return;var o=this,u=e(o),a=r,l,c={},p=u.is("html,body");switch(typeof a){case"number":case"string":if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(a)){a=n(a);break}a=e(a,this);if(!a.length)return;case"object":if(a.is||a.style)l=(a=e(a)).offset()}e.each(s.axis.split(""),function(e,n){var r=n=="x"?"Left":"Top",i=r.toLowerCase(),f="scroll"+r,v=o[f],m=t.max(o,n);if(l){c[f]=l[i]+(p?0:v-u.offset()[i]);if(s.margin){c[f]-=parseInt(a.css("margin"+r))||0;c[f]-=parseInt(a.css("border"+r+"Width"))||0}c[f]+=s.offset[i]||0;s.over[i]&&(c[f]+=a[n=="x"?"width":"height"]()*s.over[i])}else{var y=a[i];c[f]=y.slice&&y.slice(-1)=="%"?parseFloat(y)/100*m:y}s.limit&&/^\d+$/.test(c[f])&&(c[f]=c[f]<=0?0:Math.min(c[f],m));if(!e&&s.queue){v!=c[f]&&d(s.onAfterFirst);delete c[f]}});d(s.onAfter)}).end()};t.max=function(t,n){var r=n=="x"?"Width":"Height",i="scroll"+r;if(!e(t).is("html,body"))return t[i]-e(t)[r.toLowerCase()]();var s="client"+r,o=t.ownerDocument.documentElement,u=t.ownerDocument.body;return Math.max(o[i],u[i])-Math.min(o[s],u[s])}})(jQuery);(function(e){function r(t,n,r){var i=n.hash.slice(1),s=document.getElementById(i)||document.getElementsByName(i)[0];if(!s)return;t&&t.preventDefault();var o=e(r.target);if(r.lock&&o.is(":animated")||r.onBefore&&r.onBefore.call(r,t,s,o)===!1)return;r.stop&&o.stop(!0);if(r.hash){var u=s.id==i?"id":"name",a=e("<a> </a>").attr(u,i).css({position:"absolute",top:e(window).scrollTop(),left:e(window).scrollLeft()});s[u]="";e("body").prepend(a);location=n.hash;a.remove();s[u]=i}o.scrollTo(s,r).trigger("notify.serialScroll",[s])}var t=location.href.replace(/#.*/,""),n=e.localScroll=function(t){e("body").localScroll(t)};n.defaults={duration:1e3,axis:"y",event:"click",stop:!0,target:window,reset:!0};n.hash=function(t){if(location.hash){t=e.extend({},n.defaults,t);t.hash=!1;if(t.reset){var s=t.duration;delete t.duration;e(t.target).scrollTo(0,t);t.duration=s}r(0,location,t)}};e.fn.localScroll=function(s){function o(){return!!this.href&&!!this.hash&&this.href.replace(this.hash,"")==t&&(!s.filter||e(this).is(s.filter))}s=e.extend({},n.defaults,s);return s.lazy?this.bind(s.event,function(t){var n=e([t.target,t.target.parentNode]).filter(o)[0];n&&r(t,n,s)}):this.find("a,area").filter(o).bind(s.event,function(e){r(e,this,s)}).end().end()}})(jQuery);jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,t,n,r,i){return jQuery.easing[jQuery.easing.def](e,t,n,r,i)},easeInQuad:function(e,t,n,r,i){return r*(t/=i)*t+n},easeOutQuad:function(e,t,n,r,i){return-r*(t/=i)*(t-2)+n},easeInOutQuad:function(e,t,n,r,i){return(t/=i/2)<1?r/2*t*t+n:-r/2*(--t*(t-2)-1)+n},easeInCubic:function(e,t,n,r,i){return r*(t/=i)*t*t+n},easeOutCubic:function(e,t,n,r,i){return r*((t=t/i-1)*t*t+1)+n},easeInOutCubic:function(e,t,n,r,i){return(t/=i/2)<1?r/2*t*t*t+n:r/2*((t-=2)*t*t+2)+n},easeInQuart:function(e,t,n,r,i){return r*(t/=i)*t*t*t+n},easeOutQuart:function(e,t,n,r,i){return-r*((t=t/i-1)*t*t*t-1)+n},easeInOutQuart:function(e,t,n,r,i){return(t/=i/2)<1?r/2*t*t*t*t+n:-r/2*((t-=2)*t*t*t-2)+n},easeInQuint:function(e,t,n,r,i){return r*(t/=i)*t*t*t*t+n},easeOutQuint:function(e,t,n,r,i){return r*((t=t/i-1)*t*t*t*t+1)+n},easeInOutQuint:function(e,t,n,r,i){return(t/=i/2)<1?r/2*t*t*t*t*t+n:r/2*((t-=2)*t*t*t*t+2)+n},easeInSine:function(e,t,n,r,i){return-r*Math.cos(t/i*(Math.PI/2))+r+n},easeOutSine:function(e,t,n,r,i){return r*Math.sin(t/i*(Math.PI/2))+n},easeInOutSine:function(e,t,n,r,i){return-r/2*(Math.cos(Math.PI*t/i)-1)+n},easeInExpo:function(e,t,n,r,i){return t==0?n:r*Math.pow(2,10*(t/i-1))+n},easeOutExpo:function(e,t,n,r,i){return t==i?n+r:r*(-Math.pow(2,-10*t/i)+1)+n},easeInOutExpo:function(e,t,n,r,i){return t==0?n:t==i?n+r:(t/=i/2)<1?r/2*Math.pow(2,10*(t-1))+n:r/2*(-Math.pow(2,-10*--t)+2)+n},easeInCirc:function(e,t,n,r,i){return-r*(Math.sqrt(1-(t/=i)*t)-1)+n},easeOutCirc:function(e,t,n,r,i){return r*Math.sqrt(1-(t=t/i-1)*t)+n},easeInOutCirc:function(e,t,n,r,i){return(t/=i/2)<1?-r/2*(Math.sqrt(1-t*t)-1)+n:r/2*(Math.sqrt(1-(t-=2)*t)+1)+n},easeInElastic:function(e,t,n,r,i){var s=1.70158,o=0,u=r;if(t==0)return n;if((t/=i)==1)return n+r;o||(o=i*.3);if(u<Math.abs(r)){u=r;var s=o/4}else var s=o/(2*Math.PI)*Math.asin(r/u);return-(u*Math.pow(2,10*(t-=1))*Math.sin((t*i-s)*2*Math.PI/o))+n},easeOutElastic:function(e,t,n,r,i){var s=1.70158,o=0,u=r;if(t==0)return n;if((t/=i)==1)return n+r;o||(o=i*.3);if(u<Math.abs(r)){u=r;var s=o/4}else var s=o/(2*Math.PI)*Math.asin(r/u);return u*Math.pow(2,-10*t)*Math.sin((t*i-s)*2*Math.PI/o)+r+n},easeInOutElastic:function(e,t,n,r,i){var s=1.70158,o=0,u=r;if(t==0)return n;if((t/=i/2)==2)return n+r;o||(o=i*.3*1.5);if(u<Math.abs(r)){u=r;var s=o/4}else var s=o/(2*Math.PI)*Math.asin(r/u);return t<1?-0.5*u*Math.pow(2,10*(t-=1))*Math.sin((t*i-s)*2*Math.PI/o)+n:u*Math.pow(2,-10*(t-=1))*Math.sin((t*i-s)*2*Math.PI/o)*.5+r+n},easeInBack:function(e,t,n,r,i,s){s==undefined&&(s=1.70158);return r*(t/=i)*t*((s+1)*t-s)+n},easeOutBack:function(e,t,n,r,i,s){s==undefined&&(s=1.70158);return r*((t=t/i-1)*t*((s+1)*t+s)+1)+n},easeInOutBack:function(e,t,n,r,i,s){s==undefined&&(s=1.70158);return(t/=i/2)<1?r/2*t*t*(((s*=1.525)+1)*t-s)+n:r/2*((t-=2)*t*(((s*=1.525)+1)*t+s)+2)+n},easeInBounce:function(e,t,n,r,i){return r-jQuery.easing.easeOutBounce(e,i-t,0,r,i)+n},easeOutBounce:function(e,t,n,r,i){return(t/=i)<1/2.75?r*7.5625*t*t+n:t<2/2.75?r*(7.5625*(t-=1.5/2.75)*t+.75)+n:t<2.5/2.75?r*(7.5625*(t-=2.25/2.75)*t+.9375)+n:r*(7.5625*(t-=2.625/2.75)*t+.984375)+n},easeInOutBounce:function(e,t,n,r,i){return t<i/2?jQuery.easing.easeInBounce(e,t*2,0,r,i)*.5+n:jQuery.easing.easeOutBounce(e,t*2-i,0,r,i)*.5+r*.5+n}});