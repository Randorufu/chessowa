$(document).ready(() => {

var mp = 0;
var totalatkval = 0;
var totalatk = document.getElementById("totalatk");

var kingatkval = null;
var kingenable = 0;
var kingatkblock = document.getElementById("kingattackblock");

var kingatkdiv = document.getElementById("kingatk");
kingatkdiv.innerHTML = kingatkval;
var kingtext = document.getElementById("kingatktxt");

var kingatkinc = document.getElementById("kingatkinc");
kingatkinc.addEventListener("click", function () {
  kingatkval = kingatkval + 50;
  kingatkdiv.innerHTML = kingatkval;
  calculate();
});

var kingatkdecr = document.getElementById("kingatkdecr");
kingatkdecr.addEventListener("click", function () {
  kingatkval = kingatkval - 50;
  if (kingatkval < 0) {
    kingatkval = 0;
  }
  kingatkdiv.innerHTML = kingatkval;
  calculate();
});

var kingico = document.getElementById("kingicon");
kingico.addEventListener("click", function () {
  if (kingenable == 0) {
    kingatkval = 200;
    kingatkdiv.innerHTML = kingatkval;
    kingtext.innerHTML = " ATK";
    kingtext.style.color = "#ffffff";
    kingatkdiv.style.color = "#ffffff";
    kingenable = 1;
    kingatkdecr.style.display = "block";
    kingatkinc.style.display = "block";
    kingatkdecr.style.color = "#666666";
    kingatkinc.style.color = "#666666";
    kingico.style.color = "#ffffff";
    mp = mp + 1;
  } else {
    kingatkdiv.innerHTML = "";
    kingtext.innerHTML = "200 ATK";
    kingtext.style.color = "#666666";
    kingatkval = null;
    kingenable = 0;
    kingatkdecr.style.display = "none";
    kingatkinc.style.display = "none";
    kingico.style.color = "#666666";
  }
  calculate();
  mpactive();
  mpdoc.innerHTML = mp;
});

var bishop1atkval = null;
var bishop1enable = 0;
var bishop1atkblock = document.getElementById("bishop1attackblock");

var bishop1atkdiv = document.getElementById("bishop1atk");
bishop1atkdiv.innerHTML = bishop1atkval;
var bishop1text = document.getElementById("bishop1atktxt");

var bishop1atkinc = document.getElementById("bishop1atkinc");
bishop1atkinc.addEventListener("click", function () {
  bishop1atkval = bishop1atkval + 50;
  bishop1atkdiv.innerHTML = bishop1atkval;
  calculate();
});

var bishop1atkdecr = document.getElementById("bishop1atkdecr");
bishop1atkdecr.addEventListener("click", function () {
  bishop1atkval = bishop1atkval - 50;
  if (bishop1atkval < 0) {
    bishop1atkval = 0;
  }
  bishop1atkdiv.innerHTML = bishop1atkval;
  calculate();
});

var bishop1ico = document.getElementById("bishop1icon");
bishop1ico.addEventListener("click", function () {
  if (bishop1enable == 0) {
    bishop1atkval = 100;
    bishop1atkdiv.innerHTML = bishop1atkval;
    bishop1text.innerHTML = " ATK";
    bishop1text.style.color = "#ffffff";
    bishop1atkdiv.style.color = "#ffffff";
    bishop1enable = 1;
    bishop1atkdecr.style.display = "block";
    bishop1atkinc.style.display = "block";
    bishop1atkdecr.style.color = "#666666";
    bishop1atkinc.style.color = "#666666";
    bishop1ico.style.color = "#ffffff";
    mp = mp + 1;
  } else {
    bishop1atkdiv.innerHTML = "";
    bishop1text.innerHTML = "100 ATK";
    bishop1text.style.color = "#666666";
    bishop1atkval = null;
    bishop1enable = 0;
    bishop1atkdecr.style.display = "none";
    bishop1atkinc.style.display = "none";
    bishop1ico.style.color = "#666666";
  }
  mpactive();
  mpdoc.innerHTML = mp;
  calculate();
});

var knight1atkval = null;
var knight1enable = 0;
var knight1atkblock = document.getElementById("knight1attackblock");

var knight1atkdiv = document.getElementById("knight1atk");
knight1atkdiv.innerHTML = knight1atkval;
var knight1text = document.getElementById("knight1atktxt");

var knight1atkinc = document.getElementById("knight1atkinc");
knight1atkinc.addEventListener("click", function () {
  knight1atkval = knight1atkval + 50;
  knight1atkdiv.innerHTML = knight1atkval;
  calculate();
});

var knight1atkdecr = document.getElementById("knight1atkdecr");
knight1atkdecr.addEventListener("click", function () {
  knight1atkval = knight1atkval - 50;
  if (knight1atkval < 0) {
    knight1atkval = 0;
  }
  knight1atkdiv.innerHTML = knight1atkval;
  calculate();
});

var knight1ico = document.getElementById("knight1icon");
knight1ico.addEventListener("click", function () {
  if (knight1enable == 0) {
    knight1atkval = 100;
    knight1atkdiv.innerHTML = knight1atkval;
    knight1text.innerHTML = " ATK";
    knight1text.style.color = "#ffffff";
    knight1atkdiv.style.color = "#ffffff";
    knight1enable = 1;
    knight1atkdecr.style.display = "block";
    knight1atkinc.style.display = "block";
    knight1atkdecr.style.color = "#666666";
    knight1atkinc.style.color = "#666666";
    knight1ico.style.color = "#ffffff";
    mp = mp + 1;
  } else {
    knight1atkdiv.innerHTML = "";
    knight1text.innerHTML = "100 ATK";
    knight1text.style.color = "#666666";
    knight1atkval = null;
    knight1enable = 0;
    knight1atkdecr.style.display = "none";
    knight1atkinc.style.display = "none";
    knight1ico.style.color = "#666666";
  }
  mpactive();
  mpdoc.innerHTML = mp;
  calculate();
});

var rook1atkval = null;
var rook1enable = 0;
var rook1atkblock = document.getElementById("rook1attackblock");

var rook1atkdiv = document.getElementById("rook1atk");
rook1atkdiv.innerHTML = rook1atkval;
var rook1text = document.getElementById("rook1atktxt");

var rook1atkinc = document.getElementById("rook1atkinc");
rook1atkinc.addEventListener("click", function () {
  rook1atkval = rook1atkval + 50;
  rook1atkdiv.innerHTML = rook1atkval;
  calculate();
});

var rook1atkdecr = document.getElementById("rook1atkdecr");
rook1atkdecr.addEventListener("click", function () {
  rook1atkval = rook1atkval - 50;
  if (rook1atkval < 0) {
    rook1atkval = 0;
  }
  rook1atkdiv.innerHTML = rook1atkval;
  calculate();
});

var rook1ico = document.getElementById("rook1icon");
rook1ico.addEventListener("click", function () {
  if (rook1enable == 0) {
    rook1atkval = 150;
    rook1atkdiv.innerHTML = rook1atkval;
    rook1text.innerHTML = " ATK";
    rook1text.style.color = "#ffffff";
    rook1atkdiv.style.color = "#ffffff";
    rook1enable = 1;
    rook1atkdecr.style.display = "block";
    rook1atkinc.style.display = "block";
    rook1atkdecr.style.color = "#666666";
    rook1atkinc.style.color = "#666666";
    rook1ico.style.color = "#ffffff";
    mp = mp + 1;
  } else {
    rook1atkdiv.innerHTML = "";
    rook1text.innerHTML = "150 ATK";
    rook1text.style.color = "#666666";
    rook1atkval = null;
    rook1enable = 0;
    rook1atkdecr.style.display = "none";
    rook1atkinc.style.display = "none";
    rook1ico.style.color = "#666666";
  }
  calculate();
  mpactive();
  mpdoc.innerHTML = mp;
});

var pawn1atkval = null;
var pawn1enable = 0;
var pawn1atkblock = document.getElementById("pawn1attackblock");

var pawn1atkdiv = document.getElementById("pawn1atk");
pawn1atkdiv.innerHTML = pawn1atkval;
var pawn1text = document.getElementById("pawn1atktxt");

var pawn1atkinc = document.getElementById("pawn1atkinc");
pawn1atkinc.addEventListener("click", function () {
  pawn1atkval = pawn1atkval + 50;
  pawn1atkdiv.innerHTML = pawn1atkval;
  calculate();
});

var pawn1atkdecr = document.getElementById("pawn1atkdecr");
pawn1atkdecr.addEventListener("click", function () {
  pawn1atkval = pawn1atkval - 50;
  if (pawn1atkval < 0) {
    pawn1atkval = 0;
  }
  pawn1atkdiv.innerHTML = pawn1atkval;
  calculate();
});

var pawn1ico = document.getElementById("pawn1icon");
pawn1ico.addEventListener("click", function () {
  if (pawn1enable == 0) {
    pawn1atkval = 50;
    pawn1atkdiv.innerHTML = pawn1atkval;
    pawn1text.innerHTML = " ATK";
    pawn1text.style.color = "#ffffff";
    pawn1atkdiv.style.color = "#ffffff";
    pawn1enable = 1;
    pawn1atkdecr.style.display = "block";
    pawn1atkinc.style.display = "block";
    pawn1atkdecr.style.color = "#666666";
    pawn1atkinc.style.color = "#666666";
    pawn1ico.style.color = "#ffffff";
    mp = mp + 1;
  } else {
    pawn1atkdiv.innerHTML = "";
    pawn1text.innerHTML = "50 ATK";
    pawn1text.style.color = "#666666";
    pawn1atkval = null;
    pawn1enable = 0;
    pawn1atkdecr.style.display = "none";
    pawn1atkinc.style.display = "none";
    pawn1ico.style.color = "#666666";
  }
  mpactive();
  mpdoc.innerHTML = mp;
  calculate();
});

var pawn2atkval = null;
var pawn2enable = 0;
var pawn2atkblock = document.getElementById("pawn2attackblock");

var pawn2atkdiv = document.getElementById("pawn2atk");
pawn2atkdiv.innerHTML = pawn2atkval;
var pawn2text = document.getElementById("pawn2atktxt");

var pawn2atkinc = document.getElementById("pawn2atkinc");
pawn2atkinc.addEventListener("click", function () {
  pawn2atkval = pawn2atkval + 50;
  pawn2atkdiv.innerHTML = pawn2atkval;
  calculate();
});

var pawn2atkdecr = document.getElementById("pawn2atkdecr");
pawn2atkdecr.addEventListener("click", function () {
  pawn2atkval = pawn2atkval - 50;
  if (pawn2atkval < 0) {
    pawn2atkval = 0;
  }
  pawn2atkdiv.innerHTML = pawn2atkval;
  calculate();
});

var pawn2ico = document.getElementById("pawn2icon");
pawn2ico.addEventListener("click", function () {
  if (pawn2enable == 0) {
    pawn2atkval = 50;
    pawn2atkdiv.innerHTML = pawn2atkval;
    pawn2text.innerHTML = " ATK";
    pawn2text.style.color = "#ffffff";
    pawn2atkdiv.style.color = "#ffffff";
    pawn2enable = 1;
    pawn2atkdecr.style.display = "block";
    pawn2atkinc.style.display = "block";
    pawn2atkdecr.style.color = "#666666";
    pawn2atkinc.style.color = "#666666";
    pawn2ico.style.color = "#ffffff";
    mp = mp + 1;
  } else {
    pawn2atkdiv.innerHTML = "";
    pawn2text.innerHTML = "50 ATK";
    pawn2text.style.color = "#666666";
    pawn2atkval = null;
    pawn2enable = 0;
    pawn2atkdecr.style.display = "none";
    pawn2atkinc.style.display = "none";
    pawn2ico.style.color = "#666666";
  }
  mpactive();
  mpdoc.innerHTML = mp;
  calculate();
});

var pawn3atkval = null;
var pawn3enable = 0;
var pawn3atkblock = document.getElementById("pawn3attackblock");

var pawn3atkdiv = document.getElementById("pawn3atk");
pawn3atkdiv.innerHTML = pawn3atkval;
var pawn3text = document.getElementById("pawn3atktxt");

var pawn3atkinc = document.getElementById("pawn3atkinc");
pawn3atkinc.addEventListener("click", function () {
  pawn3atkval = pawn3atkval + 50;
  pawn3atkdiv.innerHTML = pawn3atkval;
  calculate();
});

var pawn3atkdecr = document.getElementById("pawn3atkdecr");
pawn3atkdecr.addEventListener("click", function () {
  pawn3atkval = pawn3atkval - 50;
  if (pawn3atkval < 0) {
    pawn3atkval = 0;
  }
  pawn3atkdiv.innerHTML = pawn3atkval;
  calculate();
});

var pawn3ico = document.getElementById("pawn3icon");
pawn3ico.addEventListener("click", function () {
  if (pawn3enable == 0) {
    pawn3atkval = 50;
    pawn3atkdiv.innerHTML = pawn3atkval;
    pawn3text.innerHTML = " ATK";
    pawn3text.style.color = "#ffffff";
    pawn3atkdiv.style.color = "#ffffff";
    pawn3enable = 1;
    pawn3atkdecr.style.display = "block";
    pawn3atkinc.style.display = "block";
    pawn3atkdecr.style.color = "#666666";
    pawn3atkinc.style.color = "#666666";
    pawn3ico.style.color = "#ffffff";
    mp = mp + 1;
  } else {
    pawn3atkdiv.innerHTML = "";
    pawn3text.innerHTML = "50 ATK";
    pawn3text.style.color = "#666666";
    pawn3atkval = null;
    pawn3enable = 0;
    pawn3atkdecr.style.display = "none";
    pawn3atkinc.style.display = "none";
    pawn3ico.style.color = "#666666";
  }
  mpactive();
  mpdoc.innerHTML = mp;
  calculate();
});

var pawn4atkval = null;
var pawn4enable = 0;
var pawn4atkblock = document.getElementById("pawn4attackblock");

var pawn4atkdiv = document.getElementById("pawn4atk");
pawn4atkdiv.innerHTML = pawn4atkval;
var pawn4text = document.getElementById("pawn4atktxt");

var pawn4atkinc = document.getElementById("pawn4atkinc");
pawn4atkinc.addEventListener("click", function () {
  pawn4atkval = pawn4atkval + 50;
  pawn4atkdiv.innerHTML = pawn4atkval;
  calculate();
});

var pawn4atkdecr = document.getElementById("pawn4atkdecr");
pawn4atkdecr.addEventListener("click", function () {
  pawn4atkval = pawn4atkval - 50;
  if (pawn4atkval < 0) {
    pawn4atkval = 0;
  }
  pawn4atkdiv.innerHTML = pawn4atkval;
  calculate();
});

var pawn4ico = document.getElementById("pawn4icon");
pawn4ico.addEventListener("click", function () {
  if (pawn4enable == 0) {
    pawn4atkval = 50;
    pawn4atkdiv.innerHTML = pawn4atkval;
    pawn4text.innerHTML = " ATK";
    pawn4text.style.color = "#ffffff";
    pawn4atkdiv.style.color = "#ffffff";
    pawn4enable = 1;
    pawn4atkdecr.style.display = "block";
    pawn4atkinc.style.display = "block";
    pawn4atkdecr.style.color = "#666666";
    pawn4atkinc.style.color = "#666666";
    pawn4ico.style.color = "#ffffff";
    mp = mp + 1;
  } else {
    pawn4atkdiv.innerHTML = "";
    pawn4text.innerHTML = "50 ATK";
    pawn4text.style.color = "#666666";
    pawn4atkval = null;
    pawn4enable = 0;
    pawn4atkdecr.style.display = "none";
    pawn4atkinc.style.display = "none";
    pawn4ico.style.color = "#666666";
  }
  mpactive();
  mpdoc.innerHTML = mp;
  calculate();
});

var queenatkval = null;
var queenenable = 0;
var queenatkblock = document.getElementById("queenattackblock");

var queenatkdiv = document.getElementById("queenatk");
queenatkdiv.innerHTML = queenatkval;
var queentext = document.getElementById("queenatktxt");

var queenatkinc = document.getElementById("queenatkinc");
queenatkinc.addEventListener("click", function () {
  queenatkval = queenatkval + 50;
  queenatkdiv.innerHTML = queenatkval;
  calculate();
});

var queenatkdecr = document.getElementById("queenatkdecr");
queenatkdecr.addEventListener("click", function () {
  queenatkval = queenatkval - 50;
  if (queenatkval < 0) {
    queenatkval = 0;
  }
  queenatkdiv.innerHTML = queenatkval;
  calculate();
});

var queenico = document.getElementById("queenicon");
queenico.addEventListener("click", function () {
  if (queenenable == 0) {
    queenatkval = 150;
    queenatkdiv.innerHTML = queenatkval;
    queentext.innerHTML = " ATK";
    queentext.style.color = "#ffffff";
    queenatkdiv.style.color = "#ffffff";
    queenenable = 1;
    queenatkdecr.style.display = "block";
    queenatkinc.style.display = "block";
    queenatkdecr.style.color = "#666666";
    queenatkinc.style.color = "#666666";
    queenico.style.color = "#ffffff";
    mp = mp + 2;
  } else {
    queenatkdiv.innerHTML = "";
    queentext.innerHTML = "150 ATK";
    queentext.style.color = "#666666";
    queenatkval = null;
    queenenable = 0;
    queenatkdecr.style.display = "none";
    queenatkinc.style.display = "none";
    queenico.style.color = "#666666";
  }
  mpactive();
  mpdoc.innerHTML = mp;
  calculate();
});

var bishop2atkval = null;
var bishop2enable = 0;
var bishop2atkblock = document.getElementById("bishop2attackblock");

var bishop2atkdiv = document.getElementById("bishop2atk");
bishop2atkdiv.innerHTML = bishop2atkval;
var bishop2text = document.getElementById("bishop2atktxt");

var bishop2atkinc = document.getElementById("bishop2atkinc");
bishop2atkinc.addEventListener("click", function () {
  bishop2atkval = bishop2atkval + 50;
  bishop2atkdiv.innerHTML = bishop2atkval;
  calculate();
});

var bishop2atkdecr = document.getElementById("bishop2atkdecr");
bishop2atkdecr.addEventListener("click", function () {
  bishop2atkval = bishop2atkval - 50;
  if (bishop2atkval < 0) {
    bishop2atkval = 0;
  }
  bishop2atkdiv.innerHTML = bishop2atkval;
  calculate();
});

var bishop2ico = document.getElementById("bishop2icon");
bishop2ico.addEventListener("click", function () {
  if (bishop2enable == 0) {
    bishop2atkval = 100;
    bishop2atkdiv.innerHTML = bishop2atkval;
    bishop2text.innerHTML = " ATK";
    bishop2text.style.color = "#ffffff";
    bishop2atkdiv.style.color = "#ffffff";
    bishop2enable = 1;
    bishop2atkdecr.style.display = "block";
    bishop2atkinc.style.display = "block";
    bishop2atkdecr.style.color = "#666666";
    bishop2atkinc.style.color = "#666666";
    bishop2ico.style.color = "#ffffff";
    mp = mp + 1;
  } else {
    bishop2atkdiv.innerHTML = "";
    bishop2text.innerHTML = "100 ATK";
    bishop2text.style.color = "#666666";
    bishop2atkval = null;
    bishop2enable = 0;
    bishop2atkdecr.style.display = "none";
    bishop2atkinc.style.display = "none";
    bishop2ico.style.color = "#666666";
  }
  mpactive();
  mpdoc.innerHTML = mp;
  calculate();
});

var knight2atkval = null;
var knight2enable = 0;
var knight2atkblock = document.getElementById("knight2attackblock");

var knight2atkdiv = document.getElementById("knight2atk");
knight2atkdiv.innerHTML = knight2atkval;
var knight2text = document.getElementById("knight2atktxt");

var knight2atkinc = document.getElementById("knight2atkinc");
knight2atkinc.addEventListener("click", function () {
  knight2atkval = knight2atkval + 50;
  knight2atkdiv.innerHTML = knight2atkval;
  calculate();
});

var knight2atkdecr = document.getElementById("knight2atkdecr");
knight2atkdecr.addEventListener("click", function () {
  knight2atkval = knight2atkval - 50;
  if (knight2atkval < 0) {
    knight2atkval = 0;
  }
  knight2atkdiv.innerHTML = knight2atkval;
  calculate();
});

var knight2ico = document.getElementById("knight2icon");
knight2ico.addEventListener("click", function () {
  if (knight2enable == 0) {
    knight2atkval = 100;
    knight2atkdiv.innerHTML = knight2atkval;
    knight2text.innerHTML = " ATK";
    knight2text.style.color = "#ffffff";
    knight2atkdiv.style.color = "#ffffff";
    knight2enable = 1;
    knight2atkdecr.style.display = "block";
    knight2atkinc.style.display = "block";
    knight2atkdecr.style.color = "#666666";
    knight2atkinc.style.color = "#666666";
    knight2ico.style.color = "#ffffff";
    mp = mp + 1;
  } else {
    knight2atkdiv.innerHTML = "";
    knight2text.innerHTML = "100 ATK";
    knight2text.style.color = "#666666";
    knight2atkval = null;
    knight2enable = 0;
    knight2atkdecr.style.display = "none";
    knight2atkinc.style.display = "none";
    knight2ico.style.color = "#666666";
  }
  mpactive();
  mpdoc.innerHTML = mp;
  calculate();
});

var rook2atkval = null;
var rook2enable = 0;
var rook2atkblock = document.getElementById("rook2attackblock");

var rook2atkdiv = document.getElementById("rook2atk");
rook2atkdiv.innerHTML = rook2atkval;
var rook2text = document.getElementById("rook2atktxt");

var rook2atkinc = document.getElementById("rook2atkinc");
rook2atkinc.addEventListener("click", function () {
  rook2atkval = rook2atkval + 50;
  rook2atkdiv.innerHTML = rook2atkval;
  calculate();
});

var rook2atkdecr = document.getElementById("rook2atkdecr");
rook2atkdecr.addEventListener("click", function () {
  rook2atkval = rook2atkval - 50;
  if (rook2atkval < 0) {
    rook2atkval = 0;
  }
  rook2atkdiv.innerHTML = rook2atkval;
  calculate();
});

var rook2ico = document.getElementById("rook2icon");
rook2ico.addEventListener("click", function () {
  if (rook2enable == 0) {
    rook2atkval = 150;
    rook2atkdiv.innerHTML = rook2atkval;
    rook2text.innerHTML = " ATK";
    rook2text.style.color = "#ffffff";
    rook2atkdiv.style.color = "#ffffff";
    rook2enable = 1;
    rook2atkdecr.style.display = "block";
    rook2atkinc.style.display = "block";
    rook2atkdecr.style.color = "#666666";
    rook2atkinc.style.color = "#666666";
    rook2ico.style.color = "#ffffff";
    mp = mp + 1;
  } else {
    rook2atkdiv.innerHTML = "";
    rook2text.innerHTML = "150 ATK";
    rook2text.style.color = "#666666";
    rook2atkval = null;
    rook2enable = 0;
    rook2atkdecr.style.display = "none";
    rook2atkinc.style.display = "none";
    rook2ico.style.color = "#666666";
  }
  mpactive();
  mpdoc.innerHTML = mp;
  calculate();
});

var pawn5atkval = null;
var pawn5enable = 0;
var pawn5atkblock = document.getElementById("pawn5attackblock");

var pawn5atkdiv = document.getElementById("pawn5atk");
pawn5atkdiv.innerHTML = pawn5atkval;
var pawn5text = document.getElementById("pawn5atktxt");

var pawn5atkinc = document.getElementById("pawn5atkinc");
pawn5atkinc.addEventListener("click", function () {
  pawn5atkval = pawn5atkval + 50;
  pawn5atkdiv.innerHTML = pawn5atkval;
  calculate();
});

var pawn5atkdecr = document.getElementById("pawn5atkdecr");
pawn5atkdecr.addEventListener("click", function () {
  pawn5atkval = pawn5atkval - 50;
  if (pawn5atkval < 0) {
    pawn5atkval = 0;
  }
  pawn5atkdiv.innerHTML = pawn5atkval;
  calculate();
});

var pawn5ico = document.getElementById("pawn5icon");
pawn5ico.addEventListener("click", function () {
  if (pawn5enable == 0) {
    pawn5atkval = 50;
    pawn5atkdiv.innerHTML = pawn5atkval;
    pawn5text.innerHTML = " ATK";
    pawn5text.style.color = "#ffffff";
    pawn5atkdiv.style.color = "#ffffff";
    pawn5enable = 1;
    pawn5atkdecr.style.display = "block";
    pawn5atkinc.style.display = "block";
    pawn5atkdecr.style.color = "#666666";
    pawn5atkinc.style.color = "#666666";
    pawn5ico.style.color = "#ffffff";
    mp = mp + 1;
  } else {
    pawn5atkdiv.innerHTML = "";
    pawn5text.innerHTML = "50 ATK";
    pawn5text.style.color = "#666666";
    pawn5atkval = null;
    pawn5enable = 0;
    pawn5atkdecr.style.display = "none";
    pawn5atkinc.style.display = "none";
    pawn5ico.style.color = "#666666";
  }
  mpactive();
  mpdoc.innerHTML = mp;
  calculate();
});

var pawn6atkval = null;
var pawn6enable = 0;
var pawn6atkblock = document.getElementById("pawn6attackblock");

var pawn6atkdiv = document.getElementById("pawn6atk");
pawn6atkdiv.innerHTML = pawn6atkval;
var pawn6text = document.getElementById("pawn6atktxt");

var pawn6atkinc = document.getElementById("pawn6atkinc");
pawn6atkinc.addEventListener("click", function () {
  pawn6atkval = pawn6atkval + 50;
  pawn6atkdiv.innerHTML = pawn6atkval;
  calculate();
});

var pawn6atkdecr = document.getElementById("pawn6atkdecr");
pawn6atkdecr.addEventListener("click", function () {
  pawn6atkval = pawn6atkval - 50;
  if (pawn6atkval < 0) {
    pawn6atkval = 0;
  }
  pawn6atkdiv.innerHTML = pawn6atkval;
  calculate();
});

var pawn6ico = document.getElementById("pawn6icon");
pawn6ico.addEventListener("click", function () {
  if (pawn6enable == 0) {
    pawn6atkval = 50;
    pawn6atkdiv.innerHTML = pawn6atkval;
    pawn6text.innerHTML = " ATK";
    pawn6text.style.color = "#ffffff";
    pawn6atkdiv.style.color = "#ffffff";
    pawn6enable = 1;
    pawn6atkdecr.style.display = "block";
    pawn6atkinc.style.display = "block";
    pawn6atkdecr.style.color = "#666666";
    pawn6atkinc.style.color = "#666666";
    pawn6ico.style.color = "#ffffff";
    mp = mp + 1;
  } else {
    pawn6atkdiv.innerHTML = "";
    pawn6text.innerHTML = "50 ATK";
    pawn6text.style.color = "#666666";
    pawn6atkval = null;
    pawn6enable = 0;
    pawn6atkdecr.style.display = "none";
    pawn6atkinc.style.display = "none";
    pawn6ico.style.color = "#666666";
  }
  mpactive();
  mpdoc.innerHTML = mp;
  calculate();
});

var pawn7atkval = null;
var pawn7enable = 0;
var pawn7atkblock = document.getElementById("pawn7attackblock");

var pawn7atkdiv = document.getElementById("pawn7atk");
pawn7atkdiv.innerHTML = pawn7atkval;
var pawn7text = document.getElementById("pawn7atktxt");

var pawn7atkinc = document.getElementById("pawn7atkinc");
pawn7atkinc.addEventListener("click", function () {
  pawn7atkval = pawn7atkval + 50;
  pawn7atkdiv.innerHTML = pawn7atkval;
  calculate();
});

var pawn7atkdecr = document.getElementById("pawn7atkdecr");
pawn7atkdecr.addEventListener("click", function () {
  pawn7atkval = pawn7atkval - 50;
  if (pawn7atkval < 0) {
    pawn7atkval = 0;
  }
  pawn7atkdiv.innerHTML = pawn7atkval;
  calculate();
});

var pawn7ico = document.getElementById("pawn7icon");
pawn7ico.addEventListener("click", function () {
  if (pawn7enable == 0) {
    pawn7atkval = 50;
    pawn7atkdiv.innerHTML = pawn7atkval;
    pawn7text.innerHTML = " ATK";
    pawn7text.style.color = "#ffffff";
    pawn7atkdiv.style.color = "#ffffff";
    pawn7enable = 1;
    pawn7atkdecr.style.display = "block";
    pawn7atkinc.style.display = "block";
    pawn7atkdecr.style.color = "#666666";
    pawn7atkinc.style.color = "#666666";
    pawn7ico.style.color = "#ffffff";
    mp = mp + 1;
  } else {
    pawn7atkdiv.innerHTML = "";
    pawn7text.innerHTML = "50 ATK";
    pawn7text.style.color = "#666666";
    pawn7atkval = null;
    pawn7enable = 0;
    pawn7atkdecr.style.display = "none";
    pawn7atkinc.style.display = "none";
    pawn7ico.style.color = "#666666";
  }
  mpactive();
  mpdoc.innerHTML = mp;
  calculate();
});

var pawn8atkval = null;
var pawn8enable = 0;
var pawn8atkblock = document.getElementById("pawn8attackblock");

var pawn8atkdiv = document.getElementById("pawn8atk");
pawn8atkdiv.innerHTML = pawn8atkval;
var pawn8text = document.getElementById("pawn8atktxt");

var pawn8atkinc = document.getElementById("pawn8atkinc");
pawn8atkinc.addEventListener("click", function () {
  pawn8atkval = pawn8atkval + 50;
  pawn8atkdiv.innerHTML = pawn8atkval;
  calculate();
});

var pawn8atkdecr = document.getElementById("pawn8atkdecr");
pawn8atkdecr.addEventListener("click", function () {
  pawn8atkval = pawn8atkval - 50;
  if (pawn8atkval < 0) {
    pawn8atkval = 0;
  }
  pawn8atkdiv.innerHTML = pawn8atkval;
  calculate();
});

var pawn8ico = document.getElementById("pawn8icon");
pawn8ico.addEventListener("click", function () {
  if (pawn8enable == 0) {
    pawn8atkval = 50;
    pawn8atkdiv.innerHTML = pawn8atkval;
    pawn8text.innerHTML = " ATK";
    pawn8text.style.color = "#ffffff";
    pawn8atkdiv.style.color = "#ffffff";
    pawn8enable = 1;
    pawn8atkdecr.style.display = "block";
    pawn8atkinc.style.display = "block";
    pawn8atkdecr.style.color = "#666666";
    pawn8atkinc.style.color = "#666666";
    pawn8ico.style.color = "#ffffff";
    mp = mp + 1;
  } else {
    pawn8atkdiv.innerHTML = "";
    pawn8text.innerHTML = "50 ATK";
    pawn8text.style.color = "#666666";
    pawn8atkval = null;
    pawn8enable = 0;
    pawn8atkdecr.style.display = "none";
    pawn8atkinc.style.display = "none";
    pawn8ico.style.color = "#666666";
  }
  mpactive();
  mpdoc.innerHTML = mp;
  calculate();
});

totalatkval = 0;
totalatk.innerHTML = totalatkval;

function calculate() {
  if (kingatkval > 0) {
    totalatkval = totalatkval + kingatkval;
  }
  if (queenatkval > 0) {
    totalatkval = totalatkval + queenatkval;
  }
  if (bishop1atkval > 0) {
    totalatkval = totalatkval + bishop1atkval;
  }
  if (bishop2atkval > 0) {
    totalatkval = totalatkval + bishop2atkval;
  }
  if (knight1atkval > 0) {
    totalatkval = totalatkval + knight1atkval;
  }
  if (knight2atkval > 0) {
    totalatkval = totalatkval + knight2atkval;
  }
  if (rook1atkval > 0) {
    totalatkval = totalatkval + rook1atkval;
  }
  if (rook2atkval > 0) {
    totalatkval = totalatkval + rook2atkval;
  }
  if (pawn1atkval > 0) {
    totalatkval = totalatkval + pawn1atkval;
  }
  if (pawn2atkval > 0) {
    totalatkval = totalatkval + pawn2atkval;
  }
  if (pawn3atkval > 0) {
    totalatkval = totalatkval + pawn3atkval;
  }
  if (pawn4atkval > 0) {
    totalatkval = totalatkval + pawn4atkval;
  }
  if (pawn5atkval > 0) {
    totalatkval = totalatkval + pawn5atkval;
  }
  if (pawn6atkval > 0) {
    totalatkval = totalatkval + pawn6atkval;
  }
  if (pawn7atkval > 0) {
    totalatkval = totalatkval + pawn7atkval;
  }
  if (pawn8atkval > 0) {
    totalatkval = totalatkval + pawn8atkval;
  }
  totalatk.innerHTML = totalatkval;
  totalatkval = 0;
}

const maxhealth = 20000;
var totalhealthval = maxhealth;
var totalhealth = document.getElementById("totalhealth");
totalhealth.innerHTML = totalhealthval;
dmgbutton.addEventListener("click", function () {
  var incdmgval = document.getElementById("incdmg").value;
  totalhealthval = totalhealthval - incdmgval;
  totalhealth.innerHTML = totalhealthval;
});
var mpdoc = document.getElementById("mp");
mpdoc.innerHTML = mp;
var hpbuttondecr = document.getElementById("hpbuttondecr");
hpbuttondecr.addEventListener("click", function () {
  if (mp > 0) {
    mp = mp - 1;
  } else {
    mp = 0;
  }
  mpdoc.innerHTML = mp;
  mpactive();
});
var hpbuttoninc = document.getElementById("hpbuttoninc");
hpbuttoninc.addEventListener("click", function () {
  if (mp < 7) {
    mp = mp + 1;
  } else {
    mp = 7;
  }
  mpdoc.innerHTML = mp;
  mpactive();
});

function mpactive() {
for (let i = 0; i < 7; i++) {
    var element = document.getElementsByClassName("mp-items")[i];
    element.classList.remove("mp-active");
  }

  for (let i = 0; i < mp; i++) {
    var element = document.getElementsByClassName("mp-items")[i];
    element.classList.add("mp-active");
  }
}

});
