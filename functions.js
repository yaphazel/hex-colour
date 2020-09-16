const listColor = ["#ff0000","#ff4000","#ff8000","#ffbf00","#ffff00","#bfff00","#80ff00","#40ff00","#00ff00","#00ff40","#00ff80","#00ffbf","#00ffff","#00bfff","#0080ff","#0040ff","#0000ff","#4000ff","#8000ff","#bf00ff","#ff00ff","#ff00bf","#ff0080","#ff0040","#ff0000","#d9dbee","#087056","#bada55","#f6b914","#00ffc5","#c0c4e4","#677da1","#354e71","#000099","#5066c6",'#0000ff',"#005589","#acab68","#c0c4e4","#000099","#0000ff","#5066c6","#c0d6e4","#168294","#6d8068","#dc8581","#bf4513","#808080","#ffe4e1","#3d56c0","#c03d56","#8f6558","#771e52","#782d4d","#2d7858","#ff7373","#50296a","#354e71","#6600cc","#fb9092","#b15ff6","#ffa500","#c03d56 ","#696969"]
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener("click",function(){
  const number = getrandomNumber();
  color.textContent=listColor[number];
  document.body.style.backgroundColor=listColor[number];
});

function getrandomNumber(){
  return Math.floor(Math.random()*listColor.length);
}
