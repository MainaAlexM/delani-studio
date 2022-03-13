$(document).ready(function() {
    // Toggle for task 1
    $(".click1").click(function() {
        $(".role1").toggle();
        $(".hidden1").toggle();
    });

    $(".hidden1-h3").click(function(){
        $(".hidden1").toggle();
        $(".role1").toggle();
    });
    
    // Toggle for task 2
    $(".click2").click(function() {
        $(".role2").toggle();
        $(".hidden2").toggle();
    });

    $(".hidden2-h3").click(function(){
        $(".hidden2").toggle();
        $(".role2").toggle();
    });

    // Toggle for task 3
    $(".click3").click(function() {
        $(".role3").toggle();
        $(".hidden3").toggle();
    });

    $(".hidden3-h3").click(function(){
        $(".hidden3").toggle();
        $(".role3").toggle();
    });
});

// Year function
var date = new Date();
    year = date.getFullYear();

    document.getElementById("year").innerHTML = year;      