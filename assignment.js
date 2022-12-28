// navbar starts
document.querySelector(".icon").addEventListener("click",myFunction)
function myFunction() {
    var x = document.getElementById("mynavbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }
// navbar ends
// wrap
let wrap = document.querySelector(".wrap");
const css = window.document.styleSheets[0];
CSS.insertRule(`
@keyframes xx{
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}`,css.cssRules.length);

wrap.addEventListener("click",myFunction);
function myFunction() {
this.style.animation="xx 8s ease";
}