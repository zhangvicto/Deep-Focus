let buttonState, buttonStateYT, buttonStateFB, buttonStateTB, buttonStateTT, buttonStateRT, buttonStateNO;

//switch on/off
document.addEventListener('DOMContentLoaded', function () {

    //checkbox state
    var checkbox1 = document.querySelector("input[name=checkbox1]");
    
    checkbox1.addEventListener('click', function () {
        if (checkbox1.checked) {
            getStorage();
            saveChanges();
        } else {
            saveChanges();
        }
    });


    var checkboxYT = document.querySelector("input[name=checkboxyt]");
    
    checkboxYT.addEventListener('click', function () {
        if (checkboxYT.checked) {
            saveChanges();
        } else {
            saveChanges();
        }
    });


    var checkboxFB = document.querySelector("input[name=checkboxfb]");
    
    checkboxFB.addEventListener('click', function () {
        if (checkboxFB.checked) {
            saveChanges();
        } else {
            saveChanges();
        }
    });


    var checkboxTB = document.querySelector("input[name=checkboxtb]");
    
    checkboxTB.addEventListener('click', function () {
        if (checkboxTB.checked) {
            saveChanges();
        } else {
            saveChanges();
        }
    });


    var checkboxTT = document.querySelector("input[name=checkboxtt]");
    
    checkboxTT.addEventListener('click', function () {
        if (checkboxTT.checked) {
            saveChanges();
        } else {
            saveChanges();
        }
    });


    var checkboxRT = document.querySelector("input[name=checkboxrt]");
    
    checkboxRT.addEventListener('click', function () {
        if (checkboxRT.checked) {
            saveChanges();
        } else {
            saveChanges();
        }
    });


    var checkboxNO = document.querySelector("input[name=checkboxno]");
    
    checkboxNO.addEventListener('click', function () {
        if (checkboxNO.checked) {
            saveChanges();
        } else {
            saveChanges();
        }
    });



    
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
    });
});

//save settings
function saveChanges() {
    buttonState = document.querySelector("input[name=checkbox1]").checked;
    chrome.storage.sync.set({ 'value1': buttonState }, function () {
        console.log("Results saved");
        console.log(buttonState);
    });

    buttonStateYT = document.querySelector("input[name=checkboxyt]").checked;
    chrome.storage.sync.set({ 'value8': buttonStateYT }, function () {
        console.log("Results saved");
        console.log(buttonStateYT);

    });

    buttonStateFB = document.querySelector("input[name=checkboxfb]").checked;
    chrome.storage.sync.set({ 'value9': buttonStateFB }, function () {
        console.log("Results saved");
        console.log(buttonStateFB);

    });

    buttonStateTB = document.querySelector("input[name=checkboxtb]").checked;
    chrome.storage.sync.set({ 'value4': buttonStateTB }, function () {
        console.log("Results saved");
        console.log(buttonStateTB);

    });

    buttonStateTT = document.querySelector("input[name=checkboxtt]").checked;
    chrome.storage.sync.set({ 'value5': buttonStateTT }, function () {
        console.log("Results saved");
        console.log(buttonStateTT);

    });

    buttonStateRT = document.querySelector("input[name=checkboxrt]").checked;
    chrome.storage.sync.set({ 'value6': buttonStateRT }, function () {
        console.log("Results saved");
        console.log(buttonStateRT);

    });

    buttonStateNO = document.querySelector("input[name=checkboxno]").checked;
    chrome.storage.sync.set({ 'value7': buttonStateNO }, function () {
        console.log("Results saved");
        console.log(buttonStateNO);

    });

}