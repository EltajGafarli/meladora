// $("#seachIcon").click(function(e) {
//     $(".searchArea").addClass("d-block");
//     e.preventDefault();
// });


$("#searchIcon").click(function(e) {
    $(".searchArea").removeClass("d-none");

});

$("#cancel").click(function(e) {
    console.log("iam ");
    $(".searchArea").addClass("d-none");
});