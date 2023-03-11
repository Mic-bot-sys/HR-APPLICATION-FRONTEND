document.querySelector(".smalldiv").setAttribute("style", "display: none");
var emailDiv = document.querySelector("#emailInput");


document.querySelector("#alt-email").addEventListener("focus", function(e){
    document.querySelector(".small-div").style.visibility = "visible";
    var obj = document.querySelector("#alt-email");
    obj.setAttribute("style", 
    "border-style: solid; border-width: 1px; border-color: #990202; outline: none"
    );
})

document.querySelector("#alt-email").addEventListener("blur", function(e){
    document.querySelector(".small-div").style.visibility = "hidden";
    var obj = document.querySelector("#alt-email");
    obj.removeAttribute("style", 
    "border-style: solid; border-width: 1px; border-color: #990202; outline: none"
    );
})


document.querySelector("#alt-password").addEventListener("focus", function(e){
    document.querySelector(".smalldiv").removeAttribute("style", "display: none");
    var obj = document.querySelector("#alt-password");
    emailDiv.setAttribute("style", "margin-bottom: 0;");
    
    obj.setAttribute("style", 
    "border-style: solid; border-width: 1px; border-color: #990202; outline: none; margin: 0;"
    );
})

document.querySelector("#alt-password").addEventListener("blur", function(e){
    document.querySelector(".smalldiv").setAttribute("style", "display: none");
    var obj = document.querySelector("#alt-password");
    emailDiv.setAttribute("style", "margin-bottom: 1rem;");
    obj.removeAttribute("style", 
    "border-style: solid; border-width: 1px; border-color: #990202; outline: none"
    );
})