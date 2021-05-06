function icon_open() {
    var element = document.getElementById("btnnav_op");
   var close = document.getElementById("btnnav_cl");
   var ul = document.getElementById("uladd");
   var nav = document.getElementById("navbar");
   nav.classList.add("navbgb");
   ul.classList.add("ul2");
   element.classList.add("dpn");
   close.classList.remove("dpn");
}

function icon_close() {
    var element = document.getElementById("btnnav_op");
   var close = document.getElementById("btnnav_cl");
   var ul = document.getElementById("uladd");
   var nav = document.getElementById("navbar");
   nav.classList.remove("navbgb");
   ul.classList.remove("ul2");
   element.classList.remove("dpn");
   close.classList.add("dpn");
}
