//BLOCK THE ENTIRE DOMAIN WITH THE FOLLOWING FUNCTION
findAllURL = function changeAllURL(text){
    var current = window.location.href;
    if(current.startsWith(text)){
      if(confirm("This page may contain off-topic points. Would you like to continue Y/N?")) {
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

init();
  
