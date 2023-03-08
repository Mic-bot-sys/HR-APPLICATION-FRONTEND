
let sideNavigation = document.querySelector(".side-navigation");
let hamburger = document.querySelector(".hamburger");
let terminateIcon = document.querySelector(".terminate-icon");

hamburger.addEventListener("click", function(e){
    sideNavigation.setAttribute("style", 
    "display: block !important; position: absolute; z-index: 10 !important; width: 60% !important; height: 100vh !important;animation: moveToRight forwards 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95);");
})

// terminateIcon.addEventListener("click", function(e){
//     sideNavigation.setAttribute("style", "animation: moveToRight 500ms cubic-bezier(0.445, 0.05, 0.55, 0.95);");
//     sideNavigation.removeAttribute("style", 
//     "display: block !important; position: absolute; z-index: 10 !important; width: 60% !important; height: 100% !important;");
// })

terminateIcon.addEventListener("click", function(e){
    sideNavigation.setAttribute("style", 
    "display: none;");
})