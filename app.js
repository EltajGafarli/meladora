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