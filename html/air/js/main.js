var num = 0;
var di = "di.mp3";
var work = "ac-work.mp3";
var player = new Audio(di);
var workplayer = new Audio(work);
var yy;
var audio = new Audio("air-extractor-fan.mp3");
var duration;
duration = audio.duration;

function handleOpen() {
  let dom = document.getElementById("leaf-id");
  let dom1 = document.getElementById("switch-id");
  if (num % 2 === 0) {
    dom.setAttribute("class", "ani leaf-ani1");
    dom1.setAttribute("class", "switch-id1");
    player.play(di);
    workplayer.play(work);
    // bgm(1);
    audio.play();
    num++;
  } else {
    dom.setAttribute("class", "ani");
    dom1.setAttribute("class", "switch-id2");
    player.play(di.mp3);
    workplayer.load(workplayer);
    audio.load();
    num++;
  }
}

function ii(tt) {
  if (tt) {
    yy = true;
  } else {
    yy = false;
  }
}

function bgm() {
  ii();
  if (yy) {
    return;
  } else {
    audio.play(); //播放
    window.setInterval("bgm(1)", duration * 1000 + 1000);
  }
}
