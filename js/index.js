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

    // ............... Form Reset
function resetForm(){
    document.getElementById('userRequest').reset();
    }
    
    // ............. Validation
function validate(){
    document.getElementById("userRequest")
    var userName = document.getElementById("name").value
    var mail = document.getElementById("mail").value
    var userMessage = "hello " + userName + ", We have received your submission. We will send you feedback on your email address: " + mail + ". We treasure you!";
    if (userName =="" || mail == ""){
        alert("Please fill in all the fields before submitting");
        return false;
    }
    else if(userName != "" && mail !="" && userMessage ==""){
        alert(userMessage);
    } else{
        alert(userMessage);
    }

    resetForm();
}   

// Window Navbar Scrolling
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
}