var i=0;

function outnum(){
    console.log(i++)
    document.title = i;
}

setInterval("outnum()", 1000)