// import Aos from "aos";
const parallax = document.getElementById("parallax");

window.addEventListener("scroll",function(){
    let offset = this.window.scrollY;
    parallax.style.backgroundPositionY = offset * 0.7 + "px";
})

// let scrollRef = 0;
//   $(window).on("resize scroll", function () {
//     // increase value up to 10, then refresh AOS
//     scrollRef <= 10 ? scrollRef++ : Aos.refresh();
//   });
