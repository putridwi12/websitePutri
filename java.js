const header = document.querySelector("header");

window.addEventListener ("scroll", function(){
    header.classList.toggle ("stycky", this.window.scroollY > 0);

})