const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'), // this is the locomotive scroll lib in this we have to give the main div name of the website and we have to remember that we havent given the hieght or width to that div
    smooth: true
});


function page4animation(){

    let elem = document.querySelector("#elem-container")
    let a = document.querySelector("#fixed-image")
    elem.addEventListener("mouseenter",function(){
        a.style.display = "block"
    })
    elem.addEventListener("mouseleave",function(){
        a.style.display = "none"
    })
    
    
    let b = document.querySelectorAll(".elem")
    b.forEach(function(e){
        e.addEventListener("mouseenter",function(){
            let i = e.getAttribute("data-image")
            a.style.backgroundImage = `url(${i})`
        })
    })
}
//swipers js code
function swipe(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
}

function loader(){
    let loader = document.querySelector("#loader")
    setTimeout(function(){
    loader.style.top="-100%"
    },3500)
}

page4animation()
swipe()
loader()


