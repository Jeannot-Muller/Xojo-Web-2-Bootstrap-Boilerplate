!function(){"use strict";$(window).scroll((function(){$(document).scrollTop()>50?$("#home > .navbar").removeClass("navbar-transparent"):$("#home > .navbar").addClass("navbar-transparent")})),$('a[href="#"]').click((function(t){t.preventDefault()})),$('.bs-component [data-toggle="popover"]').popover(),$('.bs-component [data-toggle="tooltip"]').tooltip(),$(".bs-component").each((function(){var t=$('<button class="source-button btn btn-primary btn-xs" role="button" tabindex="0">&lt; &gt;</button>');$(this).append(t)})),$("body").on("click",".source-button",(function(t){t.preventDefault();var e=$(this).parent().html();e=function(t){var e=(t=t.replace(/×/g,"&times;").replace(/«/g,"&laquo;").replace(/»/g,"&raquo;").replace(/←/g,"&larr;").replace(/→/g,"&rarr;")).split(/\n/);e.shift(),e.splice(-1,1);var n=e[0].length-e[0].trim().length,o=new RegExp(" {"+n+"}");return e=(e=e.map((function(t){return t.match(o)&&(t=t.slice(Math.max(0,n))),t}))).join("\n")}(e),$("#source-modal pre").text(e),$("#source-modal").modal()}))}();