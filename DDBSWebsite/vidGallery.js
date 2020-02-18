var vidsIndex = 1;
showVids(vidsIndex);

// Next/previous controls
function nextVids(n) {
  showVids(vidsIndex += n);
}

function showVids(n) {
  var i;
  var slides = document.getElementsByClassName("teaserVideo");
  var vids = document.getElementsByClassName("demo");
  if (n > slides.length) {vidsIndex = 1}
  if (n < 1) {vidsIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < vids.length; i++) {
    vids[i].className = vids[i].className.replace(" active", "");
  }
  slides[vidsIndex-1].style.display = "block";
  vids[vidsIndex-1].className += " active";
}