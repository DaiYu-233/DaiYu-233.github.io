function percent(){let e=document.documentElement.scrollTop||window.pageYOffset,t=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)-document.documentElement.clientHeight,n=Math.round(e/t*100)+1;n<=99||(n=99),document.querySelector("#percent").innerHTML=n,document.getElementById("page-name").innerText=document.title.split(" | 呆鱼")[0]}window.onscroll=percent;