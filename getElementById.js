document.getElementById("demo").innerHTML = "SwitchOn";
document.getElementById("demo").style.fontSize = "55px";
function prenderFoco() {
    document.getElementById('myImage').src = 'public/pic_bulbon.gif';
  }
function apagarFoco() {
    document.getElementById('myImage').src = 'public/pic_bulboff.gif';
  }
