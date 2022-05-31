$(".search-icon").click(function(e) {
    $(".searchArea").slideDown("fast");

});

$("#cancel").click(function(e) {
    $(".searchArea").slideUp("fast");
});

$("#menu-button").click(function(e) {
    $(".menu-for-mobile").show(1000);
});

$("#cancel-for-menu").click(function(e) {
    $(".menu-for-mobile").hide(1000);
})


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