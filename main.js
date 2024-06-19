let about = document.getElementById("buu2");
let hide = document.getElementById("hide");
about.onclick = function () {
    if (hide.getAttribute("class") !== "us") {
        hide.setAttribute("class", "us");
    } else {
        hide.removeAttribute("class","us");
    }
}

let openwindow=document.getElementById("buu1");
openwindow.onclick=function(){
    window.location.href = "file:///C:/Users/Microsoft/OneDrive/Desktop/aplication%204/index2.html";
}



