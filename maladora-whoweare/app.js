$("#searchIcon").click(function(e) {
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


console.log(document.getElementsByClassName("gardens"));