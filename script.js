//BLOCK THE ENTIRE DOMAIN WITH THE FOLLOWING FUNCTION
findAllURL = function changeAllURL(text){
    var current = window.location.href;
    if(current.startsWith(text)){
      if(confirm("This page may contain off-topic points. Would you like to continue?")) {
      }
      else {
        window.location.href = "http://www.google.com"
      }
    }
  }

init = function main() {
  findAllURL("https://www.facebook.com/");
  findAllURL("https://www.youtube.com/");
}


//Switch on/off
document.addEventListener('DOMContentLoaded', function() {
    var checkbox1 = document.querySelector("input[name=checkbox1]");

    checkbox1.addEventListener('change', function() {
      if (this.checked) {
        init();
      } else {
        
      }
    });
});

//Search through categories list
function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }