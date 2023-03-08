document.querySelector(".smalldiv").setAttribute("style", "display: none");

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
    obj.setAttribute("style", 
    "border-style: solid; border-width: 1px; border-color: #990202; outline: none"
    );
})

document.querySelector("#alt-password").addEventListener("blur", function(e){
    document.querySelector(".smalldiv").setAttribute("style", "display: none");
    var obj = document.querySelector("#alt-password");
    obj.removeAttribute("style", 
    "border-style: solid; border-width: 1px; border-color: #990202; outline: none"
    );
})