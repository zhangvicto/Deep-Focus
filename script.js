let buttonState;

//Set initial state of sliders
function setSliders(state) {
    if (state) {
        document.querySelector("input[name=checkbox1]") = true;
        init();
    } else {
        document.querySelector("input[name=checkbox1]") = false;
    }
}

//switch on/off
document.addEventListener('DOMContentLoaded', function () {

    //fetch settings
    chrome.storage.sync.get(['value'], function (result) {
        buttonState = result['value'];
        console.log("Results Retrieved");
        console.log(buttonState);
    });

    console.log(buttonState);

    setSliders(buttonState);

    //checkbox state
    var checkbox1 = document.querySelector("input[name=checkbox1]");
    
    checkbox1.addEventListener('click', function () {
        if (this.checked) {
            init();
            saveChanges();
        } else {
            saveChanges();
            init();
        }
    });

<<<<<<< Updated upstream
    checkbox1.addEventListener('change', function() {
      if (this.checked) {
      } else {
      }
      
=======
    //Search through categories list
    document.getElementById("myInput").addEventListener("input", function () {
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
>>>>>>> Stashed changes
    });
});

//save settings
function saveChanges() {
    buttonState = document.querySelector("input[name=checkbox1]").checked;
    chrome.storage.sync.set({ 'value': buttonState }, function () {
        console.log("Results saved");
    });
}



