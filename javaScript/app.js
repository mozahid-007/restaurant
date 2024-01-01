var swiper = new Swiper(".slide-container", {
    slidesPerView: 3,
    spaceBetween: 13,
    slidesPergroup: 3,
    loop: true,
    centerSlide: "true",
    grabCursor: "true",
    fade: "true",
    autoplay:true,
    // pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    //     dynamicBullets: true,
    // },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        520: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        950: {
            slidesPerView: 3,
        },

    },




})

var countDownDate = new Date("april 13, 2023 00:00:00").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000*60*60*24));
    var hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
    var minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
    var seconds = Math.floor((distance % (1000*60)) / (1000));

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if(distance<0){
        clearInterval(x);
    
        document.getElementById("days").innerHTML = "Next";
        document.getElementById("hours").innerHTML = "Offer";
        document.getElementById("minutes").innerHTML = "Coming";
        document.getElementById("seconds").innerHTML = "Soon";

    }

}, 1000);