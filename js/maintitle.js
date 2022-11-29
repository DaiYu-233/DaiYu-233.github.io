var i = 0

function outnum(){
    document.getElementById('page-name').innerText = document.title.split(' | 呆鱼') [0];
    // console.log(i++)
}

setInterval("outnum()", 1000)