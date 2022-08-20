let links = document.querySelectorAll("#a a");
let mac = window.matchMedia("screen and (max-width:480px)");

let pelement = document.createElement("p");

//für das erste Mal Lader der Seite wenn die Display <= 480px --> also damit  ☰ direkt angezeigt wird
prüfen(mac);

//Bei Größenänderung der Display wird dynamisch ("change") das p-element in dem nav manupuliert und angepasst 
mac.addEventListener("change",prüfen);

function prüfen(mac){
    if(mac.matches){
        links.forEach(element => {
            element.style.display = "none";
        });
        pelement.textContent = "☰";
        document.getElementsByTagName("nav")[0].prepend(pelement);
        pelement.style.textAlign = "left";
        pelement.style.display = "inline"
        pelement.style.maxWidth = "20px";
        pelement.style.maxHeight = "20px";
        pelement.style.alignSelf = "center";
        }
    else {
        links.forEach(element => {
        element.style.display = "block";
    });
        pelement.textContent = "";
        document.getElementsByTagName("nav")[0].prepend(pelement);
    }
}


// Click-Event auf das p-element 
pelement.addEventListener("click",function(){
    if(links[0].style.display === "block"){
        console.log("control");
        links.forEach(element => {
            element.style.display = "none";

        });
        
        pelement.style.alignSelf = "center";

    }
    else {
        console.log("control2");
        links.forEach(element => {
            element.style.display = "block";
        });
        pelement.style.alignSlef = "center";

    }
});