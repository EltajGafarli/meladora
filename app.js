$("#searchIcon").click(function(e) {
    $(".searchArea").slideDown("slow");

});

$("#cancel").click(function(e) {
    $(".searchArea").slideUp("slow");
});

$("#menu-button").click(function(e) {
    $(".menu-for-mobile").show(1000);
});

$("#cancel-for-menu").click(function(e) {
    $(".menu-for-mobile").hide(1000);
})


const boxes = document.querySelectorAll('.box');
const buttons = document.querySelectorAll(".meladora .boxes .buttons .button");



let currentSlider = 0;


for (let i = 0; i < boxes.length; i++) {
    buttons[i].addEventListener("click", function(e) {
        displayNone(boxes);
        standartBackGroundColor(buttons)
        boxes[i].style.display = "flex";
        this.style.backgroundColor = "orange"
    })
}


function displayNone(boxes) {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.display = "none";
    }
}


function standartBackGroundColor(buttons) {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = "#6e6d6d";
    }
}


window.onscroll = function() { scrollFunction() };
$(function() {
    $('.back-upper').click(function() {
        $("html, body").animate({ scrollTop: 0 }, 0);
    })
});

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        $('.back-upper').css("display", "flex")
    } else {
        $('.back-upper').css("display", "none");
    }
}