getStorage();

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

//init = function main() {
//  findAllURL("https://www.facebook.com/");
//  findAllURL("https://www.youtube.com/");
//}

//storage get
function getStorage() {
  chrome.storage.sync.get(['value1'], function (result) {
    buttonState = result['value1'];
    console.log("Results Retrieved");
    console.log(buttonState);
      if(buttonState){
        //init();
        findAllURL("https://www.youtube.com/");
        var checkbox1 = document.querySelector("input[name=checkbox1]");
        checkbox1.checked = true;
      }
    
  });
  
  chrome.storage.sync.get(['value8'], function (result) {
    buttonState = result['value8'];
    console.log("Results Retrieved");
    console.log(buttonStateYT);
      if(buttonStateYT){
        var checkboxyt = document.querySelector("input[name=checkboxyt]");
        checkboxyt.checked = true;

        if (buttonState) {
          findAllURL("https://www.youtube.com/");
        }
      }
    
  });
  
  chrome.storage.sync.get(['value9'], function (result) {
    buttonState = result['value9'];
    console.log("Results Retrieved");
    console.log(buttonStateFB);
      if(buttonStateFB){
        if (buttonState) {
          findAllURL("https://www.facebook.com/");
        }
        var checkboxfb = document.querySelector("input[name=checkboxfb]");
        checkboxfb.checked = true;
      }
    
  });
  
  chrome.storage.sync.get(['value4'], function (result) {
    buttonStateTB = result['value4'];
    console.log("Results Retrieved");
    console.log(buttonStateTB);
      if(buttonStateTB){
        if (buttonState) {
          findAllURL("https://www.tumblr.com/");
        }
        var checkboxtb = document.querySelector("input[name=checkboxtb]");
        checkboxtb.checked = true;
      }
    
  });
  
  chrome.storage.sync.get(['value5'], function (result) {
    buttonStateTT = result['value5'];
    console.log("Results Retrieved");
    console.log(buttonStateTT);
      if(buttonStateTT){
        if (buttonState) {
          findAllURL("https://twitter.com/");
        }
        var checkboxtt = document.querySelector("input[name=checkboxtt]");
        checkboxtt.checked = true;
      }
    
  });
  
  chrome.storage.sync.get(['value6'], function (result) {
    buttonStateRT = result['value6'];
    console.log("Results Retrieved");
    console.log(buttonStateRT);
      if(buttonStateRT){
        if (buttonState) {
          findAllURL("https://www.reddit.com/");
        }
        var checkboxrt = document.querySelector("input[name=checkboxrt]");
        checkboxrt.checked = true;
      }
    
  });
  
  chrome.storage.sync.get(['value7'], function (result) {
    buttonStateNO = result['value7'];
    console.log("Results Retrieved");
    console.log(buttonStateNO);
      if(buttonStateNO){
        if (buttonState) {
          go();
        }
        var checkboxno = document.querySelector("input[name=checkboxno]");
        checkboxno.checked = true;
      }
    
  });

}

chrome.tabs.onUpdated.addListener(function(tab, tabId, changeInfo) {
  console.log('Injecting content script(s)');
  //On Firefox document.body.textContent is probably more appropriate
  chrome.tabs.executeScript(tab.id,{
      code: 'document.body.innerText;'
      //If you had something somewhat more complex you can use an IIFE:
      //code: '(function (){return document.body.innerText})();'
      //If your code was complex, you should store it in a
      // separate .js file, which you inject with the file: property.
  },receiveText);
});

//tabs.executeScript() returns the results of the executed script
//  in an array of results, one entry per frame in which the script
//  was injected.
function receiveText(resultsArray){
  console.log(resultsArray[0]);
}