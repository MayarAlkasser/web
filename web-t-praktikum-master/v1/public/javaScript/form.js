let url = document.createElement("input");
url.type="url";
url.name="content";
url.placeholder="http://beispiel.com";
url.required;
url.style.borderLeft = "0px";
url.style.borderBotom = "solid black 5px";
url.style.borderTop = "0px";
url.style.borderRight = "0px";

document.getElementById("textTutorial").addEventListener('click',function() {
   document.getElementsByName("content")[0].replaceWith(url);
   document.getElementsByName("duration")[0].required = "";
   document.getElementsByTagName("label")[5].className = "";
});



let textarea = document.createElement("textarea");
textarea.name = "content";
textarea.minLength = "40";
textarea.placeholder = "Testing...";
textarea.required;


document.getElementById("videoTutorial").addEventListener("click",function() {
    
    document.getElementsByName("content")[0].replaceWith(textarea);
    document.getElementsByName("duration")[0].required;
    document.getElementsByTagName("label")[5].className = "erforderlich";

});

