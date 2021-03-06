chrome.runtime.onInstalled.addListener(function() {
    window.open("https://github.com/zhangvicto/Deep-Focus");
  })


   
//Switch on/off
var checkbox1 = document.querySelector("input[name=checkbox]");

checkbox1.addEventListener('change', function() {
  if (this.checked) {
    text.style.display = "block";
  } else {
    text.style.display = "block";
  }
});