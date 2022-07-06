var modal = document.getElementById("myModal");

var imgSay = document.getElementById("say");
var imgNat = document.getElementById("nat");
var imgYu = document.getElementById("yu");
var modalImg = document.getElementById("img01");
var screenSize = screen.width;

imgSay.onclick = function(){
  modal.style.display = "block";
  if(screenSize < 1200 && window.innerHeight > window.innerWidth){
    modalImg.src = "./graphics/say(mobile).jpg";
  }
  else{
    modalImg.src = "./graphics/character_box_sayori.png";
  }
}

imgNat.onclick = function(){
  modal.style.display = "block";
  if(screenSize < 1200 && window.innerHeight > window.innerWidth){
    modalImg.src = "./graphics/nats(mobile).jpg";
  }
  else{
    modalImg.src = "./graphics/character_box_natsuki.png";
  }
}

imgYu.onclick = function(){
  modal.style.display = "block";
  if(screenSize < 1200 && window.innerHeight > window.innerWidth){
    modalImg.src = "./graphics/yuri(mobile).jpg";
  }
  else{
    modalImg.src = "./graphics/character_box_yuri.png";
  }
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}