function fps(){if("1"==window.localStorage.getItem("fpson")){var e=window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)},n=0,o=Date.now(),t=Date.now(),s=function(){var a=Date.now(),l=a-t,i=Math.round(1e3/l);if(t=a,n++,a>1e3+o){if((i=Math.round(1e3*n/(a-o)))<=6)var d='<span style="color:#bd0000">卡成ppt</span>';else if(i<=10)d='<span style="color:red">电竞级帧率</span>';else if(i<=14)d='<span style="color:yellow">难受</span>';else if(i<24)d='<span style="color:orange">卡</span>';else if(i<=40)d='<span style="color:green">一般般</span>';else d='<span style="color:#425aef">灰常流畅</span>';document.getElementById("fps").innerHTML=`FPS:${i} ${d}`,n=0,o=a}e(s)};s()}else $("#fps").hide()}function console_daiyu(){document.getElementById("console_daiyu_id").style.display="block"}document.addEventListener("pjax:complete",fps),document.addEventListener("DOMContentLoaded",fps);